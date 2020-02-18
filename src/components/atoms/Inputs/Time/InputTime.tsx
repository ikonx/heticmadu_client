import React, { useState } from 'react';
import {
  StyledTimeInput,
} from "./_style";

interface Props {
  name: string;
}

const InputTime: React.FC<Props> = ({ name }) => {
  const [inputValue, setValue] = useState('');

  const limitTimeInput = (event: any) => {
    const { value } = event.target;
    // Prevent letter "e"
    event.which === 69 && event.preventDefault();
    // Prevent more than 2 numbers && only on numerical keyboard elements
    value.length > 1 && event.which >= 47 && event.which <= 57 && event.preventDefault();
  };

  const changeInput = (event: { target: HTMLInputElement }) => {
    var { value } = event.target;
    setValue(value);
  };
  
  return (
      <StyledTimeInput
        type="number"
        value={inputValue}
        min="0"
        max="24"
        name={name}
        onKeyDown={limitTimeInput}
        onChange={changeInput}
        placeholder="00"
      />
  );
};

export default InputTime;
