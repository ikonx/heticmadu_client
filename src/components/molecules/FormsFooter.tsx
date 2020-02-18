import React from 'react';
import styled from "styled-components";
import BtnBlue from "../atoms/Buttons/BtnBlue";
import BtnBorderBlue from "../atoms/Buttons/BtnBorderBlue";
import { Colors } from "../../utils/styles";
import StepsBlock from "../atoms/StepsBlock";

interface Props {
  activeSteps?: {
    title: string;
    current: string;
    final: string;
  };
}

const StyledFooter = styled.section<{ hasSteps: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${Colors.white};
  padding: 20px 2rem;
  display: flex;
  align-items: center;
  justify-content: ${props => props.hasSteps === 'true' ? 'space-between' : 'flex-end'};
  button:first-child {
    margin-right: 1rem;
  }
`;

const FormsFooter: React.FC<Props> = ({ activeSteps }) => {
  return (
    <StyledFooter hasSteps={activeSteps ? 'true' : 'false'}>
      { activeSteps && (
        <StepsBlock title={activeSteps.title} currentStep={activeSteps.current} finalStep={activeSteps.final}/>
      )}
      <div>
        <BtnBorderBlue text="Retour" onClick={() => console.log('OK')}/>
        <BtnBlue text="Confirmer" onClick={() => console.log('KO')}/>
      </div>
    </StyledFooter>
  );
};

export default FormsFooter;
