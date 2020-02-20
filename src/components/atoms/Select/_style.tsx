import styled from "styled-components";
import { Colors, Fonts } from "../../../utils/styles";
import { FormControl, MenuItem, Select } from "@material-ui/core";

export const StyledTitle = styled.p`
  color: ${Colors.grey};
  font-size: 15px;
  letter-spacing: 0.22px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 4px;
`;

export const StyledContainer = styled(FormControl)`
  width: 100%;
`;

export const StyledInput = styled(Select)`
  && {
    height: 48px;
    background: ${Colors.white};
    border: 1px solid ${Colors.lightGrey};
    font-size: 15px;
    font-family: ${Fonts.medium};
    text-align: left;
    padding: 0 1rem;
    div {
      background: transparent;
    }
    &::after, &::before {
      display: none;
    }
  }
`;

export const StyledInputValue = styled(MenuItem)``;