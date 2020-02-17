import React from 'react';
import { PageHeaderContainer } from "./_style";
import MainTitle from "../../atoms/Text/MainTitle";
import BtnBlue from "../../atoms/Buttons/BtnBlue";

interface Props {}

const PageHeader: React.FC<Props> = () => {
  return (
    <PageHeaderContainer>
      <MainTitle title='Entreprise' subtitle='list'/>
      <BtnBlue text='Créer une entreprise' link='/'/>
    </PageHeaderContainer>
  );
};

export default PageHeader;
