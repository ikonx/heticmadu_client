import React from 'react'
import { IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from "styled-components";

interface Props {
    isClicked: boolean;
}

const StyledButton = styled(IconButton)`
  && {
      &:hover {
        background: unset;
      }
  }
`;

const Arrow: React.FC<Props> = ({ isClicked }) => {
    return (
        <StyledButton>
            {isClicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledButton>
    )
}

export default Arrow
