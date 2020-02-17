import React from 'react';
import { Button } from "@material-ui/core";
import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

const StyledButton = styled(Button)`
  && {
    background-color: #2C7BE5;
    color: #FFFFFF;
    padding: 0;
    transition: .5s;
    &:hover {
      opacity: .5;
      background: #2C7BE5;
    }
  }
`;

const StyledLink = styled(Link)`
  && {
    font-size: 14px;
    letter-spacing: .22px;
    text-decoration: none;
    color: inherit;
    padding: 12px 1rem;
  }
`;

const BtnBlue: React.FC<Props> = ({ text , link}) => {
  return (
    <StyledButton variant="contained">
      <StyledLink to={link}>
        { text }
      </StyledLink>
    </StyledButton>
  );
};

export default BtnBlue;
