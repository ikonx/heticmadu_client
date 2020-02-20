import React from 'react';
import {
  RadioContainer,
  StyledRadioGreenscore,
  StyledRadioGroup,
  StyledTitle,
  ContainerRowInput,
} from './_style';
import { Radio } from '@material-ui/core';

interface Props {
  DataGreenscore: {
    title: string;
    radio: {
      name: string;
      score: number;
      value: string;
    }[];
  };
}

const InputGreenscore: React.FC<Props> = ({ DataGreenscore }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | number>(
    DataGreenscore.radio[0].value,
  );


  const handleChange = (event: { target: HTMLInputElement }) => {
    
    setSelectedValue(event.target.value);
  };

  return (
    <ContainerRowInput>
      <StyledTitle>{DataGreenscore.title}</StyledTitle>
      <RadioContainer>
        {DataGreenscore.radio.length > 0 &&
          DataGreenscore.radio.map((item, i) => (
            <StyledRadioGroup
            key={i}
            defaultValue={DataGreenscore.radio[i].score}
            >
              <StyledRadioGreenscore
                value={item.value}
                control={
                  <Radio
                    checked={item.value === selectedValue}
                    onChange={handleChange}
                    value={item.value}
                    name={item.name}
                  />
                }
                label={item.value}
                labelPlacement="end"
              />
            </StyledRadioGroup>
          ))}
      </RadioContainer>
    </ContainerRowInput>
  );
};

export default InputGreenscore;
