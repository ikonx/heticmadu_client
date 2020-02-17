import React from 'react';
import styled from 'styled-components';
import { GridContentAlignment, GridJustification } from '@material-ui/core';

export enum FlowEnum {
  ROW = 'row',
  COLUMN = 'column',
}

interface Props {
  flow?: FlowEnum;
  gap?: number;
  align?: GridContentAlignment;
  justify?: GridJustification;
  style?: any;
}

const StyledWrapper = styled.div<Props>`
//   height: 100%;
//   width: 100%;
  display: grid;
  grid-auto-flow: ${props => props.flow || 'row'};
  gap: ${props => props.gap || 0}px;
  align-items: ${props => props.align || 'inherit'};
`;

const Grid: React.FC<Props> = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

export default Grid;
