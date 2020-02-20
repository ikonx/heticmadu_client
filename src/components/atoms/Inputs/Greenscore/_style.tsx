import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";
import { RadioGroup, FormControlLabel } from "@material-ui/core";

export const RadioContainer = styled.div`
  && {  
    display: flex;
    align-items: center;
    justify-content: start;
    padding: .5rem 0;
    border-radius: 4px;
  }
`;

export const ContainerRowInput = styled.div`
  margin: 24px 0;
`;

export const StyledRadioGreenscore = styled(FormControlLabel)`
  && {
    margin-left: 0;
    margin-right: 0;
    span:first-child {
        color : ${Colors.blue};
        svg {
            width: .8em;
            height: .8em;
        }
    }
    span:last-child {
        font-family : ${Fonts.medium};
    }
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  && {
    position: relative;
    width: max-content;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${Colors.white};
    margin-right: 24px;
    flex-wrap: nowrap;
    text-align: left;
    border-radius: 4px;
    border: 1px solid ${Colors.lightGrey};
    padding-right: 8px;
  }
`;

export const StyledTitle = styled.p`
  color: ${Colors.textGrey};
  font-size: 15px;
  letter-spacing: 0.22px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 4px;
`;