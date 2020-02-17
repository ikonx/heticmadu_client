import React from 'react';
import TextGrey from "../../atoms/Text/TextGrey";
import { CompanyHeaderContainer } from "./_style";
import BtnFilter from 'components/atoms/Buttons/Filter/BtnFilter';

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
