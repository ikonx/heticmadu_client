import React from 'react';
import styled from "styled-components";
import { Colors } from "../../utils/styles";

interface Props {
  title: string;
  currentStep: string;
  finalStep: string;
}

const StepsContainer = styled.div`
  width: 80%;
`;

const StepsBar = styled.div<{ status: string }>`
  width: 100%;
  height: 4px;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 5px;
  margin-top: .5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${Colors.blue};
    border: 1px solid ${Colors.blue};
    width: ${props => props.status};
    border-radius: 5px;
    height: 100%;
  }
`;

const StepsInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StepsLocation = styled.p`
  font-size: 15px;
  color: ${Colors.textGrey};
  margin: 0;
`;

const StepsTitle = styled.p`
  font-size: 15px;
  color: ${Colors.black};
  margin: 0 0 0 .5rem;
`;

const StepsBlock: React.FC<Props> = ({ title, currentStep, finalStep }) => {
  const statusBar = parseInt(currentStep) / parseInt(finalStep) * 100 + '%';

  return (
    <StepsContainer>
      <StepsInfo>
        <StepsLocation>Step { currentStep } sur { finalStep } :</StepsLocation>
        <StepsTitle>{ title }</StepsTitle>
      </StepsInfo>
      <StepsBar status={ statusBar }/>
    </StepsContainer>
  );
};

export default StepsBlock;
