import React from 'react';
import {
  StyledInputs,
  StyledItem,
  StyledList, StyledTimeClose,
  StyledTimeContainer,
  StyledTimeOpen, StyledTimeSpan,
  StyledTitle
} from "../atoms/Inputs/Time/_style";
import InputTime from "../atoms/Inputs/Time/InputTime";

interface Props {
  title: string;
}

const ScheduleBlock: React.FC<Props> = ({ title }) => {
  return (
    <StyledTimeContainer>
      <StyledTitle>{ title }</StyledTitle>
      <StyledList>
        <StyledItem>
          <p>Lundi</p>
          <StyledInputs>
            <StyledTimeOpen>
              <InputTime name="monday_start_hours"/>
              <span>:</span>
              <InputTime name="monday_start_minutes"/>
            </StyledTimeOpen>
            <StyledTimeSpan>-</StyledTimeSpan>
            <StyledTimeClose>
              <InputTime name="monday_end_hours"/>
              <span>:</span>
              <InputTime name="monday_end_minutes"/>
            </StyledTimeClose>
          </StyledInputs>
        </StyledItem>
      </StyledList>
    </StyledTimeContainer>
  );
};

export default ScheduleBlock;
