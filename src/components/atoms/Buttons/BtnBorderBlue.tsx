import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import {Colors, Fonts} from '../../../utils/styles';
import { Link } from "react-router-dom";

interface Props {
  text: string;
  link?: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)`
  && {
    background-color: transparent;
    color: ${Colors.blue};
    border: 1px solid ${Colors.blue};
    transition: 0.5s;
    text-transform: none;
    font-family: ${Fonts.bold};
    font-size: 14px;
    box-shadow: unset;
    padding: 0;
    &:hover {
      box-shadow: unset;
      background: ${Colors.lightBlue};
    }
  }
`;

const StyledLink = styled(Link)`
  && {
    font-size: 14px;
    letter-spacing: 0.22px;
    text-decoration: none;
    color: inherit;
    padding: 12px 1rem;
  }
`;

const BtnBorderBlue: React.FC<Props> = ({ text, link,onClick }) => {
  return (
    <>
      { onClick ? (
        <StyledButton variant="contained" onClick={onClick}>
          { text }
        </StyledButton>
      ) : (
        <StyledButton variant="contained">
          { link ? (
            <StyledLink to={link}>{text}</StyledLink>
          ) : (
            { text }
          )}
        </StyledButton>
      )}
    </>
  );
};

export default BtnBorderBlue;
