import React, { useState, useEffect } from 'react';
import PoisContext from './pois.context';
import { PoiModel } from 'utils/models/pois.model';
import { getPois } from 'utils/http';

interface Props {}

const defaultPois: PoiModel[] = [];

const PoisProvider: React.FC<Props> = ({ children }) => {
  const [pois, setPois] = useState<PoiModel[]>(defaultPois);
  const [fetchingPois, setFetchingPois] = useState<boolean>(false);

  useEffect(() => {
    setFetchingPois(true);
    getPois().then((res: any) => {
      if (res.status === 200) {
        setPois(res.data);
        setFetchingPois(false);
      }
    });
  }, []);

  const refreshPois = () => getPois().then((res: any) => {
    if (res.status === 200) {
      setPois(res.data);
      setFetchingPois(false);
    }
    return res
  });

  return (
    <PoisContext.Provider value={{ pois, setPois, fetchingPois, refreshPois }}>
      {children}
    </PoisContext.Provider>
  );
};

export default PoisProvider;
