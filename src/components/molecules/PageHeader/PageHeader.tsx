import React from 'react';
import { PageHeaderContainer } from "./_style";
import MainTitle from "../../atoms/Text/MainTitle";
import BtnBlue from "../../atoms/Buttons/BtnBlue";
// @TODOS remove onAddItemProp
interface Props {
  title: string;
  subtitle: string;
  text?: string;
  onAddItem?: () => void;
  formBar?: boolean;
  link?: string;
}

const PageHeader: React.FC<Props> = ({title, text, subtitle, onAddItem, formBar}) => {
  return (
    <PageHeaderContainer formBar={formBar ? 1 : 0}>
      <MainTitle title={title} subtitle={subtitle} isForm={formBar ? 1 : 0}/>
      { text && onAddItem && (
        <BtnBlue text={text} onClick={onAddItem} />
      )}
    </PageHeaderContainer>
  );
};

export default PageHeader;
