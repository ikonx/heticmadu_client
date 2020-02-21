import React from 'react';
import styled from "styled-components";
import { ReactComponent as IconClose } from "assets/img/close.svg";
import { Colors, Fonts } from "../../utils/styles";

interface Props {
  text: string;
  clickListener: () => void;
}

const TagsBackground = styled.div`
  background: ${Colors.lighterBlue};
  border-radius: 4px;
  font-size: 15px;
  font-family: ${Fonts.medium};
  padding: 4px 8px;
  display: flex;
  align-items: center;
  width: max-content;
  margin-right: 16px;
  p {
    margin: 0;
  }
`;

const CloseContainer = styled.div`
  border: 1px solid ${Colors.lightGrey};
  background: ${Colors.darkWhite};
  margin-left: 2rem;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TagsHighlighted: React.FC<Props> = ({ text, clickListener }) => {
  return (
    <TagsBackground>
      <p>{ text }</p>
      <CloseContainer onClick={clickListener}>
        <IconClose />
      </CloseContainer>
    </TagsBackground>
  );
};

export default TagsHighlighted;
