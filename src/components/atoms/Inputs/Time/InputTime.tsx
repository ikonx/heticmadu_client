import React, { useState } from 'react';
import { StyledInputs, StyledTimeClose, StyledTimeOpen, StyledTimeSpan } from "./_style";
import CustomSwitch from "../../CustomSwitch";
import InputTimeElement from "./InputTimeElement";

interface Props {

}

const InputTime: React.FC<Props> = () => {
  const [isOpen, setOpen] = useState(true);
  const changeEvent = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledInputs>
      { isOpen && (
        <>
          <StyledTimeOpen>
            <InputTimeElement name="monday_start_hours"/>
            <span>:</span>
            <InputTimeElement name="monday_start_minutes"/>
          </StyledTimeOpen>
          <StyledTimeSpan>-</StyledTimeSpan>
          <StyledTimeClose>
            <InputTimeElement name="monday_end_hours"/>
            <span>:</span>
            <InputTimeElement name="monday_end_minutes"/>
          </StyledTimeClose>
        </>
      )}
      <CustomSwitch status={isOpen} changeListener={changeEvent} />
    </StyledInputs>
  );
};

export default InputTime;
