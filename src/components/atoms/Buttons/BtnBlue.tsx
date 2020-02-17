import React from 'react';
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../../utils/styles";

interface Props {
  text: string;
  link: string;
}

const StyledButton = styled(Button)`
  && {
    background-color: ${Colors.blue};
    color: ${Colors.white};
    padding: 0;
    transition: .5s;
    &:hover {
      opacity: .5;
      background: ${Colors.blue};
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
