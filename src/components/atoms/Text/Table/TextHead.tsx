import React from 'react';
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { Colors } from "../../../../utils/styles";


interface Props {
  name: string,
}

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  color: #828282;
  cursor: pointer;
`;

const Text = styled(Typography)`
  && {
    color: ${Colors.black};
    font-size: 12px;
  }
`;

const TextHead: React.FC<Props> = ({ name }) => {
  return (
    <TextContainer>
      <Text>
          {name}
      </Text>
    </TextContainer>
  );
};

export default TextHead;
