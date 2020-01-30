import React from 'react';
import styled from 'styled-components';

const StyledLogoText = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
`;

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="#333333" />
      </svg>
      <StyledLogoText>Madu</StyledLogoText>
    </div>
  );
};

export default Logo;
