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
  onChange: any;
}

const InputGreenscore: React.FC<Props> = ({ DataGreenscore, onChange }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | number>(
    DataGreenscore.radio[0].value,
  );

  const [selectedScoreValue, setSelectedScoreValue] = React.useState<number>(
    DataGreenscore.radio[0].score,
  );

  const handleChange = (item: any) => {
    setSelectedValue(item.value);
    setSelectedScoreValue(item.score);
    console.log(selectedScoreValue);
    // onChange(item);
  };

  // useEffect(() => {
  //   onChange(DataGreenscore.radio[0]);
  // }, []);

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
                    onChange={() => handleChange(item)}
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
