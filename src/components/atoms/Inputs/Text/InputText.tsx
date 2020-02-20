import React from 'react';
import { StyledFormControl, StyledInput, StyledLabel } from "./_style";

interface Props {
  title: string;
  placeholder: string;
  onChange?: any;
  onKeyDown?: any;
  value?: string;
}

const InputText: React.FC<Props> = ({ title, placeholder, onChange, value, onKeyDown }) => {

  return (
    <StyledFormControl>
      <StyledLabel htmlFor={title}>{ title }</StyledLabel>
      <StyledInput
        id={title}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
    </StyledFormControl>
  );
};

export default InputText;
