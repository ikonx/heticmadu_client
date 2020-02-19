import React, { ChangeEvent, useState } from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledInputValue,
  StyledTitle,
} from './_style';

interface Props {
  title: string;
  values: string[];
  onChange?: (value: any) => void;
}

const CustomSelect: React.FC<Props> = ({ title, values, onChange }) => {
  const [selectValue, setSelectValue] = useState(values[0]);
  const selectChange = (event: React.ChangeEvent<{ value: any }>) => {
    const { value } = event.target;
    setSelectValue(value);
    onChange && onChange(value);
  };

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledInput value={selectValue} displayEmpty onChange={selectChange}>
        {values.map((item, i) => (
          <StyledInputValue value={item} key={i}>
            {item}
          </StyledInputValue>
        ))}
      </StyledInput>
    </StyledContainer>
  );
};

export default CustomSelect;
