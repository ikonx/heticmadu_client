import React from 'react';
import styled from "styled-components";
import {Typography} from "@material-ui/core";
import { Colors, Fonts } from "../../../utils/styles";

interface Props {
  title: string;
}

export const StyledTitle = styled(Typography)`
  color: ${Colors.black} !important;
  font-size: 14px !important;
  font-family: ${Fonts.semiBold} !important;
  text-align: left;
`;

const TitleModal: React.FC<Props> = ({title}) => {
  return (
    <StyledTitle variant="body1">
        {title}
    </StyledTitle>
  );
};

export default TitleModal;
