import React from 'react';
import {
  StyledItem, StyledItemContent,
  StyledList,
  StyledTimeContainer,
  StyledTitle
} from "../atoms/Inputs/Time/_style";
import InputTime from "../atoms/Inputs/Time/InputTime";

interface Props {
  title: string;
}

const scheduleDates = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const ScheduleBlock: React.FC<Props> = ({ title }) => {
  return (
    <StyledTimeContainer>
      <StyledTitle>{ title }</StyledTitle>
      <StyledList>
        { scheduleDates.map((item, i) => (
          <StyledItem key={i}>
            <StyledItemContent>
              <p>{ item }</p>
              <InputTime/>
            </StyledItemContent>
          </StyledItem>
        ))}
      </StyledList>
    </StyledTimeContainer>
  );
};

export default ScheduleBlock;
