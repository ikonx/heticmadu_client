import React from 'react';
import { StyledFormControl, StyledInput, StyledLabel } from './_style';

interface Props {
  title: string;
  placeholder: string;
  fieldKey?: string;
  onChange?: (_fieldKey: string, _fieldValue: string) => void;
  fieldValue?: string;
  type?: string;
}

const InputText: React.FC<Props> = ({
  title,
  placeholder,
  onChange,
  fieldValue,
  fieldKey,
  type
}) => {
  return (
    <StyledFormControl>
      <StyledLabel htmlFor={title}>{title}</StyledLabel>
      <StyledInput
        id={title}
        type={type || "text"}
        placeholder={placeholder}
        defaultValue={fieldValue || ''}
        onBlur={e => {
          onChange && onChange(fieldKey || '', e.target.value || '');
        }}
      />
    </StyledFormControl>
  );
};

export default InputText;
