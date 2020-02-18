import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../../utils/styles';

interface Props {
  text: string;
  onClick: () => void;
}

const StyledButton = styled(Button)`
  && {
    background-color: ${Colors.blue};
    color: ${Colors.white};
    transition: 0.5s;
    &:hover {
      opacity: 0.5;
      background: ${Colors.blue};
    }
  }
`;

const BtnBlue: React.FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default BtnBlue;
