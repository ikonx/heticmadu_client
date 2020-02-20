import React from 'react'
import PageHeader from "../molecules/PageHeader/PageHeader";
import { ScrollableContent } from "../../utils/styles/Globals";
import InputText from "../atoms/Inputs/Text/InputText";
import styled from "styled-components";
import BtnBlue from "../atoms/Buttons/BtnBlue";
import TagsBlock from "../molecules/TagsBlock";

interface Props {
}

const StyledScrollableContent = styled(ScrollableContent)`
  margin-top: 2rem;
  width: 50%;
`;

const TagsInput = styled.div`
  display: flex;
  align-items: flex-end;
  button {
    margin-left: 1rem;
  }
`;

const Tags: React.FC<Props> = () => {
    const onAddTag = () => {
      console.log('ADD TAG');
    };

    return (
      <>
        <PageHeader title="Gérer les tags" subtitle="tags" />
        <StyledScrollableContent>
          <TagsInput>
            <InputText title="Tags" placeholder="Rentrez les tags"/>
            <BtnBlue text="Valider" onClick={onAddTag}/>
          </TagsInput>
          <TagsBlock/>
        </StyledScrollableContent>
      </>
    )
}

export default Tags
