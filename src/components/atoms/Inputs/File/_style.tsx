import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


export const StyledContainer = styled.div`
  position: relative;
  height: 48px;
  background: ${Colors.white};
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
`;

export const StyledTitle = styled.p`
  color: ${Colors.textGrey};
  font-size: 15px;
  letter-spacing: 0.22px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  height: 100%;
  width: 100%;
  font-size: 15px;
  letter-spacing: 0.22px;
  color: ${Colors.purple};
  font-family: ${Fonts.medium};
  text-align: left;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  svg {
    margin-right: .5rem;
  }
`;

export const StyledClose = styled(HighlightOffIcon)`
  && {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    color: ${Colors.purple};
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;