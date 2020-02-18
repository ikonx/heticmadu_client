import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../utils/styles';

interface Props {
  text: string;
  link: string;
  onClick?: () => void;
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

const StyledLink = styled(Link)`
  && {
    font-size: 14px;
    letter-spacing: 0.22px;
    text-decoration: none;
    color: inherit;
    padding: 12px 1rem;
  }
`;

const BtnBlue: React.FC<Props> = ({ text, link, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      <StyledLink to={link}>{text}</StyledLink>
    </StyledButton>
  );
};

export default BtnBlue;
