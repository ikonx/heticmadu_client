import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { Colors, Fonts } from "../../../../utils/styles";


export const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    z-index: 1;
    .ap-with-places {
      text-align: left;
    }
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

export const StyledInput = styled.input`
  && {
    background: ${Colors.white};
    border: 1px solid ${Colors.lightGrey};
    border-radius: 4px;
    height: 48px;
    padding: 0 1rem;
    font-family: ${Fonts.medium};
    font-size: 15px;
  }
`;