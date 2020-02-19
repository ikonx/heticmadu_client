import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


export const StyledInputContainer = styled.div<{isLarge: string}>`
  position: relative;
  height: ${props => props.isLarge === 'true' ? '100%' : '48px'};
  background: ${Colors.white};
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
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

export const StyledLabel = styled.label<{isLarge: string}>`
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
  justify-content: ${props => props.isLarge === 'true' ? 'center' : 'flex-start'};
  flex-direction: ${props => props.isLarge === 'true' ? 'column' : 'row'};
  pointer-events: none;
  svg {
    margin-right: ${props => props.isLarge === 'true' ? '0' : '.5rem'};
    width: ${props => props.isLarge === 'true' ? '30px' : 'unset'};
    height: ${props => props.isLarge === 'true' ? '30px' : 'unset'};
    margin-bottom: ${props => props.isLarge === 'true' ? '.5rem' : '0'};
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

export const StyledFileItem = styled.div<{ isLarge: string }>`
  width: 100%;
  height: 48px;
  position: relative;
  ${StyledLabel} {
    align-items: ${props => props.isLarge === 'true' ? 'flex-start' : 'center'};
  }
  &::after {
    content: '';
    background: ${Colors.lightGrey};
    width: calc(100% - 16px);
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 1rem;
  }
`;

export const StyledRemainingFiles = styled.div`
  color: ${Colors.purple};
  font-family: ${Fonts.medium};
  font-size: 13px;
  margin-top: 4rem;
  svg {
    width: 30px;
    height: 30px;
  }
  p {
    margin: 0;
  }
`;