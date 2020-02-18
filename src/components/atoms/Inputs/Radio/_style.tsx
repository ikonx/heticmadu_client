import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";
import { RadioGroup } from "@material-ui/core";

export const RadioContainer = styled.div`
  && {  
    background: ${Colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    border-radius: 4px;
    border: 1px solid ${Colors.lightGrey};
  }
`;

export const StyledRadio = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  &:checked ~ label {
    color: ${Colors.blue};
    background: ${Colors.lightBlue};
  } 
`;

export const StyledRadioGroup = styled(RadioGroup)`
  && {
    position: relative;
    width: 50%;
  }
`;

export const StyledLabel = styled.label`
  font-family: ${Fonts.medium};
  color: ${Colors.black};
  padding: 4px 0;
  background: transparent;
  font-size: 15px;
  border-radius: 4px;
  letter-spacing: .22px;
  pointer-events: none;
  transition: .3s;
`;

export const StyledTitle = styled.p`
  color: ${Colors.textGrey};
  font-size: 15px;
  letter-spacing: 0.22px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 4px;
`;