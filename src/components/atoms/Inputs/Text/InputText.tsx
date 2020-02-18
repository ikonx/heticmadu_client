import React from 'react';
import { StyledFormControl, StyledInput, StyledLabel } from "./_style";

interface Props {
  name: string;
  placeholder: string;
}

const InputText: React.FC<Props> = ({ name, placeholder }) => {
  return (
    <StyledFormControl>
      <StyledLabel htmlFor={name}>{ name }</StyledLabel>
      <StyledInput id={name} type="text" placeholder={placeholder}/>
    </StyledFormControl>
  );
};

export default InputText;
