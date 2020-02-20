import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Colors, Fonts } from '../../../utils/styles';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  link?: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)`
  && {
    background-color: ${Colors.blue};
    color: ${Colors.white};
    transition: 0.5s;
    text-transform: none;
    font-family: ${Fonts.bold};
    font-size: 14px;
    box-shadow: unset;
    padding: 12px 1rem;
    &:hover {
      background: ${Colors.darkBlue};
      box-shadow: unset;
    }
  }
`;

const StyledLink = styled(Link)`
  && {
    font-size: 14px;
    letter-spacing: 0.22px;
    text-decoration: none;
    color: inherit;
    /* padding: 12px 1rem; */
  }
`;

const BtnBlue: React.FC<Props> = ({ text, link, onClick }) => {
  return (
    <>
      {onClick ? (
        <StyledButton variant="contained" onClick={onClick}>
          {text}
        </StyledButton>
      ) : (
        <StyledButton variant="contained">
          {link ? <StyledLink to={link}>{text}</StyledLink> : { text }}
        </StyledButton>
      )}
    </>
  );
};

export default BtnBlue;
