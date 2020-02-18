import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";

export const StyledTimeContainer = styled.div`
    text-align: left;
`;

export const StyledTitle = styled.label`
    color: ${Colors.textGrey};
    font-size: 15px;
    letter-spacing: 0.22px;
    margin-bottom: 4px;
`;

export const StyledList = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0 1rem;
   background: ${Colors.white};
   border: 1px solid ${Colors.lightGrey};
   border-radius: 4px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${Colors.textGrey};
    font-size: 12px;
  }
`;

export const StyledInputs = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTimeOpen = styled.div`
  span {
    margin: 0 3px;
  }
`;

export const StyledTimeClose = styled.div`
  span {
    margin: 0 3px;
  }
`;

export const StyledTimeInput = styled.input`
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
  color: ${Colors.black};
  font-size: 12px;
  font-family: ${Fonts.medium};
  text-align: center;
  padding: .25rem;
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
    appearance: none;
  }
`;

export const StyledTimeSpan = styled.span`
  margin: 0 8px;
`;