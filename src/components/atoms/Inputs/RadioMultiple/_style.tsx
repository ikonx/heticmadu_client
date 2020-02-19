import styled, { css } from 'styled-components';
import { Colors, Fonts } from '../../../../utils/styles';
import { RadioGroup } from '@material-ui/core';

export const RadioContainer = styled.div`
  && {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
`;

export const StyledRadio = styled.div<any>`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  && ~ label {
    background: ${Colors.white};
  }
  ${props =>
    props.checked &&
    css`
      && ~ label {
        color: ${Colors.blue};
        background: ${Colors.lightBlue};
      }
    `}
`;

export const StyledRadioGroup = styled(RadioGroup)`
  && {
    position: relative;
    flex: 1;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const StyledLabel = styled.label`
  font-family: ${Fonts.medium};
  color: ${Colors.black};
  padding: 4px;
  background: transparent;
  font-size: 15px;
  border-radius: 4px;
  letter-spacing: 0.22px;
  pointer-events: none;
  transition: 0.3s;
`;

export const StyledTitle = styled.p`
  color: ${Colors.textGrey};
  font-size: 15px;
  letter-spacing: 0.22px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 4px;
`;
