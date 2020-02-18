import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import {Colors, Fonts} from '../../../utils/styles';

interface Props {
  text: string;
  onClick: () => void;
}

const StyledButton = styled(Button)`
  && {
    background-color: transparent;
    color: ${Colors.blue};
    border: 1px solid ${Colors.blue};
    transition: 0.5s;
    padding: 12px 1rem;
    text-transform: none;
    font-family: ${Fonts.bold};
    font-size: 14px;
    box-shadow: unset;
    &:hover {
      box-shadow: unset;
      background: ${Colors.lightBlue};
    }
  }
`;

const BtnBorderBlue: React.FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default BtnBorderBlue;
