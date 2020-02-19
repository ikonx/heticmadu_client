import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface Props {
    onClick?: () => void;
}

const StyledIconContainer = styled(Button)`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #eaedf3;
  box-sizing: border-box;
  border-radius: 2px;
`;

const Icon: React.FC<Props> = ({ children, ...props }) => {
  return <StyledIconContainer {...props}>{children}</StyledIconContainer>;
};

export default Icon;
