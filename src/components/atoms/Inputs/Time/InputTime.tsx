import React from 'react';
import {
  StyledInputs,
  StyledItem,
  StyledList, StyledTimeClose,
  StyledTimeContainer,
  StyledTimeInput,
  StyledTimeOpen, StyledTimeSpan,
  StyledTitle
} from "./_style";
import { Switch } from "@material-ui/core";

interface Props {
  title: string;
}

const InputTime: React.FC<Props> = ({ title }) => {
  return (
    <StyledTimeContainer>
      <StyledTitle>{ title }</StyledTitle>
      <StyledList>
        <StyledItem>
          <p>Lundi</p>
          <StyledInputs>
            <StyledTimeOpen>
              <StyledTimeInput type="number" min="0" max="24" />
              <span>:</span>
              <StyledTimeInput type="number" min="0" max="59" />
            </StyledTimeOpen>
            <StyledTimeSpan>-</StyledTimeSpan>
            <StyledTimeClose>
              <StyledTimeInput type="number" min="0" max="24" />
              <span>:</span>
              <StyledTimeInput type="number" min="0" max="59" />
            </StyledTimeClose>
            <Switch
              value="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </StyledInputs>
        </StyledItem>
      </StyledList>
    </StyledTimeContainer>
  );
};

export default InputTime;
