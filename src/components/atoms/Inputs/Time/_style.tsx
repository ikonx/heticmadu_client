import styled from "styled-components";
import { Colors, Fonts } from "../../../../utils/styles";

export const StyledTimeContainer = styled.div`
    text-align: left;
    height: 100%;
`;

export const StyledTitle = styled.label`
    color: ${Colors.textGrey};
    font-size: 15px;
    letter-spacing: 0.22px;
    margin-bottom: 4px;
`;

export const StyledList = styled.ul`
   list-style: none;
   height: 100%;
   margin: 0;
   padding: 4px 0 4px 1rem;
   background: ${Colors.white};
   border: 1px solid ${Colors.lightGrey};
   border-radius: 4px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   li:last-child::after {
      display: none;
   }
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  p {
    color: ${Colors.textGrey};
    font-size: 12px;
  }
  &::after {
    content: '';
    background: ${Colors.lightGrey};
    display: block;
    width: 100%;
    height: 1px;
    margin: 4px 0;
  }
`;

export const StyledItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 1rem;
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