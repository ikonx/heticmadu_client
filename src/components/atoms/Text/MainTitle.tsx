import React from 'react';
import styled from "styled-components";
import { TextField, Typography } from "@material-ui/core";

interface Props {
  title: string;
  subtitle: string;
}

const StyledSubtitle = styled.p`
  margin: 0 0 4px;
  color: #A4A6B3;
  letter-spacing: 2px;
  font-size: 10px;
  text-transform: uppercase;
  text-align: left;
`;

const StyledTitle = styled(Typography)`
  && {
    font-size: 24px;
    color: #1A1626;
    line-height: unset;
    letter-spacing: .88px;
  }
`;

const MainTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle variant="h2">{title}</StyledTitle>
    </div>
  );
};

export default MainTitle;
