import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";

export const StyledAreaContainer = styled.div`
  text-align: left;
  height: 100%;
`;

export const StyledLabel = styled.label`
  && {
    color: ${Colors.textGrey};
    font-size: 15px;
    letter-spacing: 0.22px;
    text-align: left;
    margin-bottom: 4px;
  }
`;

export const StyledArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
  padding: 1rem;
  font-size: 15px;
  font-family: ${Fonts.medium};
  line-height: 23px;
  letter-spacing: 0.22px;
`;