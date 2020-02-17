import React from 'react';
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@material-ui/icons';


interface Props {
  name: string,
  desc: boolean
}

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  color: #828282;
  cursor: pointer;
`;

const Text = styled(Typography)`
  text-transform: uppercase;
  color: #828282;
  font-weight: 600;
`;

const TextHead: React.FC<Props> = ({ name, desc }) => {
  return (
    <TextContainer>
      <Text>
          {name}
      </Text>
      { desc ?  <KeyboardArrowDown /> : <KeyboardArrowUp />}
    </TextContainer>
  );
};

export default TextHead;
