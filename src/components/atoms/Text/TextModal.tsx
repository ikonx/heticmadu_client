import React from 'react';
import styled from "styled-components";
import {Typography} from "@material-ui/core";
import { Colors, Fonts } from "../../../utils/styles";

interface Props {
    textContent: string;
}

export const StyledTextContent = styled(Typography)`
  padding: 24px 0;
  color: ${Colors.grey} !important;
  font-size: 14px !important;
  font-family: ${Fonts.regular} !important;
  border-top: solid 1px ${Colors.lightGrey};
  border-bottom: solid 1px ${Colors.lightGrey};
  text-align: left;
`;

const TextModal: React.FC<Props> = ({textContent}) => {
    return (
        <StyledTextContent variant="body2">
            {textContent}
        </StyledTextContent>
    )
};

export default TextModal;
