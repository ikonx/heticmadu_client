import React from 'react';
import { PageHeaderContainer } from "./_style";
import MainTitle from "../../atoms/Text/MainTitle";
import BtnBlue from "../../atoms/Buttons/BtnBlue";

interface Props {
  title: string,
  text: string,
  subtitle: string,
  link: string
}

const PageHeader: React.FC<Props> = ({title, text, subtitle, link}) => {
  return (
    <PageHeaderContainer>
      <MainTitle title={title} subtitle={subtitle}/>
      <BtnBlue text={text} link={link} />
    </PageHeaderContainer>
  );
};

export default PageHeader;
