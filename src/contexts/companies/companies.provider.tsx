import React, { useState, useEffect } from 'react';
import { getCompanies, getPois } from 'utils/http';
import { CompaniesModel } from "../../utils/models/companies.model";
import CompaniesContext from "./companies.context";

interface Props {}

const defaultCompanies: CompaniesModel[] = [];

const CompaniesProvider: React.FC<Props> = ({ children }) => {
  const [companies, setCompanies] = useState<CompaniesModel[]>(defaultCompanies);
  const [fetchingCompanies, setFetchingCompanies] = useState<boolean>(false);

  useEffect(() => {
    setFetchingCompanies(true);
  }, []);

  const refreshCompanies = () => getCompanies().then((res: any) => {
    if (res.status === 200) {
      setCompanies(res.data);
      setFetchingCompanies(false);
    }
    return res
  });

  const fetchCompanies = (allCompanies: boolean) => {
    getCompanies().then((res: any) => {
      if (res.status === 200) {
        setCompanies(res.data);
        setFetchingCompanies(false);
      }
    });
  };

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies, fetchingCompanies, refreshCompanies }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesProvider;
