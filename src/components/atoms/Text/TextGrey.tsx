import React from 'react';
import styled from "styled-components";
import {Typography} from "@material-ui/core";

interface Props {}

export const TextGreyContainer = styled(Typography)`
  color: #BDBDBD;
  font-size: 18px;
  font-weight: 600;
`;

const TextGrey: React.FC<Props> = ({children}) => {
  return (
    <TextGreyContainer>
        {children}
    </TextGreyContainer>
  );
};

export default TextGrey;
