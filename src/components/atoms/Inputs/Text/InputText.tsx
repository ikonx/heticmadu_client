import React from 'react';
import { StyledFormControl, StyledInput, StyledLabel } from "./_style";

interface Props {
  title: string;
  placeholder: string;
}

const InputText: React.FC<Props> = ({ title, placeholder }) => {
  return (
    <StyledFormControl>
      <StyledLabel htmlFor={title}>{ title }</StyledLabel>
      <StyledInput
        id={title}
        type="text"
        placeholder={placeholder}
      />
    </StyledFormControl>
  );
};

export default InputText;
