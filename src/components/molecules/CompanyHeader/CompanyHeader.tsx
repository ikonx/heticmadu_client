import React from 'react';
import BtnFilter from "../../atoms/Buttons/filter/btnFilter";
import TextGrey from "../../atoms/Text/TextGrey";
import { CompanyHeaderContainer } from "./_style";

interface Props {}

const CompanyHeader: React.FC<Props> = () => {
  return (
    <CompanyHeaderContainer>
      <TextGrey>Total 29010</TextGrey>
      <BtnFilter />
    </CompanyHeaderContainer>
  );
};

export default CompanyHeader;
