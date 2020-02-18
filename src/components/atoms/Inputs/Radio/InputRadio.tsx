import React from 'react';
import {RadioContainer, StyledLabel, StyledRadio, StyledRadioGroup, StyledTitle} from "./_style";

interface Props {
  title: string;
  values: {
    name: string,
    category: string
  }[]
}

const InputRadio: React.FC<Props> = ({ title, values }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(values[0].name);

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  return (
    <div>
      <StyledTitle>{ title }</StyledTitle>
      <RadioContainer>
        { values.length > 0 && values.map((item, i) => (
          <StyledRadioGroup key={i}>
            <StyledRadio
              type="radio"
              name={item.category}
              value={item.name}
              onChange={handleChange}
              checked={item.name === selectedValue}
            />
            <StyledLabel>{ item.name }</StyledLabel>
          </StyledRadioGroup>
        ))}
      </RadioContainer>
    </div>
  );
};

export default InputRadio;
