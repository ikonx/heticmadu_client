import React from 'react';
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Colors, Fonts } from "../../../utils/styles";

interface Props {
  title: string;
  subtitle: string;
  isForm?: number;
}

const StyledSubtitle = styled.p`
  margin: 0 0 4px;
  color: ${Colors.grey};
  letter-spacing: 2px;
  font-size: 10px;
  text-transform: uppercase;
  text-align: left;
`;

const StyledTitle = styled(Typography)<{ status: number }>`
  && {
    font-size: 24px;
    color: ${Colors.black};
    line-height: unset;
    letter-spacing: .88px;
    font-family: ${Fonts.bold};
    position: relative;
    &::after {
      content: '';
      width: 2rem;
      height: 2px;
      background: ${props => (props.status ? Colors.blue : 'unset' )};
      position: absolute;
      bottom: -8px;
      left: 0;
    }
  }
`;

const MainTitle: React.FC<Props> = ({ title, subtitle, isForm }) => {
  return (
    <div>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle variant="h2" status={isForm ? 1 : 0}>{title}</StyledTitle>
    </div>
  );
};

export default MainTitle;
