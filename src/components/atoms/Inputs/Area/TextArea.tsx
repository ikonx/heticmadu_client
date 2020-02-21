import React from 'react';
import { StyledArea, StyledAreaContainer, StyledLabel } from './_style';

interface Props {
  title: string;
  fieldKey?: string;
  fieldValue?: string;
  onChange?: (_fieldKey: string, _fieldValue: any) => void;
}

const TextArea: React.FC<Props> = ({
  title,
  onChange,
  fieldKey,
  fieldValue,
}) => {
  return (
    <StyledAreaContainer>
      <StyledLabel>{title}</StyledLabel>
      <StyledArea
        placeholder="..."
        defaultValue={fieldValue || ''}
        onBlur={e => onChange && onChange(fieldKey || '', e.target.value || '')}
      />
    </StyledAreaContainer>
  );
};

export default TextArea;
