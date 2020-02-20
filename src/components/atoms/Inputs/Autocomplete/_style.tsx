import styled from "styled-components";
import { FormControl, TextField } from "@material-ui/core";
import { Colors, Fonts } from "../../../../utils/styles";


export const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  && {
    color: ${Colors.grey};
    font-size: 15px;
    letter-spacing: 0.22px;
    text-align: left;
    margin-bottom: 4px;
  }
`;

export const StyledInput = styled(TextField)`
  && {
    background: ${Colors.white};
    border: 1px solid ${Colors.lightGrey};
    border-radius: 4px;
    height: 48px;
    padding: 0 1rem;
    .MuiInputBase-adornedEnd {
      height: 100%;
      padding: 0;
    }
    fieldset {
      border: none;
    }
    input {
      padding: 0 !important;
      font-family: ${Fonts.medium};
      font-size: 15px;
    }
  }
`;