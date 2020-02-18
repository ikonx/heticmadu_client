import React from 'react';
import styled from "styled-components";
import BtnBlue from "../atoms/Buttons/BtnBlue";
import BtnBorderBlue from "../atoms/Buttons/BtnBorderBlue";
import { Colors } from "../../utils/styles";

interface Props {
}

const StyledFooter = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${Colors.white};
  padding: 20px 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button:first-child {
    margin-right: 1rem;
  }
`;

const FormsFooter: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <BtnBorderBlue text="Retour" onClick={() => console.log('OK')}/>
      <BtnBlue text="Confirmer" onClick={() => console.log('KO')}/>
    </StyledFooter>
  );
};

export default FormsFooter;
