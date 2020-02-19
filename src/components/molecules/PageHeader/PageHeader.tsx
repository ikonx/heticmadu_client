import React from 'react';
import { PageHeaderContainer, PageHeaderContent, PageHeaderSeparator } from "./_style";
import MainTitle from "../../atoms/Text/MainTitle";
import BtnBlue from "../../atoms/Buttons/BtnBlue";
// @TODOS remove onAddItemProp
interface Props {
  title: string;
  subtitle: string;
  text?: string;
  onAddItem?: () => void;
  link?: string;
}

const PageHeader: React.FC<Props> = ({title, text, subtitle, onAddItem, link}) => {
  return (
    <PageHeaderContainer>
      <PageHeaderContent>
        <MainTitle title={title} subtitle={subtitle} />
        { text && link && (
          <BtnBlue text={text} link={link} />
        )}
        { text && onAddItem && (
          <BtnBlue text={text} onClick={onAddItem} />
        )}
      </PageHeaderContent>
      <PageHeaderSeparator />
    </PageHeaderContainer>
  );
};

export default PageHeader;
