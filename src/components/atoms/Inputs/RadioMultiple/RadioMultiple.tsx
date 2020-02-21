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
  }[];
  onChange?: (value: any) => void;
}

const RadioMultiple: React.FC<Props> = ({ title, values, onChange }) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = (_value: string, _checked: boolean, _index: number) => {
    let newSelectedValues: string[] = [...selectedValues];

    if (selectedValues?.includes(_value)) {
      newSelectedValues = newSelectedValues.filter(filter => filter !== _value);
    } else {
      newSelectedValues.push(_value);
    }
    setSelectedValues(newSelectedValues);
    onChange && onChange(newSelectedValues);
  };

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <RadioContainer>
        {values.length > 0 ? (
          values.map((item, i) => (
            <StyledRadioGroup key={i}>
              <StyledRadio
                name={item.category}
                value={item.name}
                onClick={() => {
                  handleChange(
                    item.name,
                    selectedValues?.includes(item.name),
                    i,
                  );
                }}
                checked={selectedValues?.includes(item.name)}
              />
              <StyledLabel>{item.name}</StyledLabel>
            </StyledRadioGroup>
          ))
        ) : (
          <p>Il faut créer des tags avant.</p>
        )}
      </RadioContainer>
    </div>
  );
};

export default RadioMultiple;
