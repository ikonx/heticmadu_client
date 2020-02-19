import React, { useState } from 'react';
import { Switch, withStyles } from "@material-ui/core";
import styled from "styled-components";
import { Colors, Fonts } from "../../utils/styles";

interface Props {
  status: boolean;
  changeListener: () => void;
}

const SwitchState = styled.p`
  && {
    font-family: ${Fonts.medium};
    color: ${Colors.black};
    font-size: 12px;
    margin-right: .5rem;
  }
`;

const SwitchContainer = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
`;


const StyledSwitch = withStyles({
  root: {
    width: 30,
    height: 18,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      color: Colors.white,
      transform: 'translate(11px)',
      '& + $track': {
        backgroundColor: Colors.purple,
        opacity: 1,
        border: 'none',
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
  },
  track: {
    borderRadius: 36,
    backgroundColor: Colors.lightGrey,
    opacity: 1,
  },
  checked: {},
})(Switch);

const CustomSwitch: React.FC<Props> = ({ status, changeListener }) => {
  return (
    <SwitchContainer>
      <SwitchState>{ status ? 'Ouvert' : 'Fermé' }</SwitchState>
      <StyledSwitch
        checked={status}
        value={status}
        onChange={changeListener}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </SwitchContainer>
  );
};

export default CustomSwitch;
