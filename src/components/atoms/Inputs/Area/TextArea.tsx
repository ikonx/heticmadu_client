import React from 'react';
import { StyledArea, StyledAreaContainer, StyledLabel } from "./_style";

interface Props {
  title: string;
}

const TextArea: React.FC<Props> = ({ title }) => {
  return (
    <StyledAreaContainer>
      <StyledLabel>{title}</StyledLabel>
      <StyledArea placeholder="..."/>
    </StyledAreaContainer>
  );
};

export default TextArea;
