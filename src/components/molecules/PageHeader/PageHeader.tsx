import React from 'react';
import { PageHeaderContainer, PageHeaderContent, PageHeaderSeparator } from "./_style";
import MainTitle from "../../atoms/Text/MainTitle";
import BtnBlue from "../../atoms/Buttons/BtnBlue";

interface Props {
  title: string;
  subtitle: string;
  text?: string;
  onAddItem?: () => void;
  isForm?: string;
}

const PageHeader: React.FC<Props> = ({title, text, subtitle, onAddItem, isForm}) => {
  return (
    <PageHeaderContainer formBar={isForm}>
      <PageHeaderContent>
        <MainTitle title={title} subtitle={subtitle} formBar={isForm}/>
        { text && onAddItem && (
          <BtnBlue text={text} onClick={onAddItem} />
        )}
      </PageHeaderContent>
      <PageHeaderSeparator />
    </PageHeaderContainer>
  );
};

export default PageHeader;
