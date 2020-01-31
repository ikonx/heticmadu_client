import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledLogoBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled(Typography)`
  && {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    margin-left: 16px;
  }
`;

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <StyledLogoBlock>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="#333333" />
      </svg>
      <StyledTitle variant="h1" align="center" >Madu</StyledTitle>
    </StyledLogoBlock>
  );
};

export default Logo;
