import React from 'react';
import BtnFilter from "../../atoms/Buttons/filter/btnFilter";
import { CompanyHeaderContainer, CompanyTotal } from "./_style";

interface Props {}

const CompanyHeader: React.FC<Props> = () => {
  return (
    <CompanyHeaderContainer>
      <CompanyTotal>Total 29010</CompanyTotal>
      <BtnFilter />
    </CompanyHeaderContainer>
  );
};

export default CompanyHeader;
