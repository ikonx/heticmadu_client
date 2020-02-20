import React from 'react';
import {
  RadioContainer,
  StyledLabel,
  StyledRadio,
  StyledRadioGroup,
  StyledTitle,
} from './_style';

interface Props {
  title: string;
  values: {
    name: string;
    category: string;
    value: string;
  }[];
  fieldKey?: string;
  onChange?: (_fieldKey: string, _fieldValue: any) => void;
  fieldValue?: string;
}

const InputRadio: React.FC<Props> = ({ title, values, onChange, fieldValue, fieldKey }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    values[0].value,
  );

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange && onChange(fieldKey || "", value);
  };

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <RadioContainer>
        {values.length > 0 &&
          values.map((item, i) => (
            <StyledRadioGroup key={i}>
              <StyledRadio
                type="radio"
                name={item.name}
                value={item.value}
                onChange={handleChange}
                checked={item.value === selectedValue}
              />
              <StyledLabel>{item.name}</StyledLabel>
            </StyledRadioGroup>
          ))}
      </RadioContainer>
    </div>
  );
};

export default InputRadio;
