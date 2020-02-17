import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import { Fonts } from 'utils/styles';

interface Props {
  fields: any[];
  title: string;
}

const StyledContainer = styled(Grid)`
  background: white;
  grid-auto-flow: row;
  justify-content: space-between;
  grid-template-columns: 1fr;
  border: 1px solid #eaedf3;
  box-shadow: inset 0px -1px 0px #f4f4f5, inset 0px 1px 0px #f4f4f5;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledHeader = styled(Grid)`
  padding: 18px 16px;
  background: white;
  grid-auto-flow: column;
  justify-content: space-between;
  border-bottom: 1px solid #eaedf3;
  font-family: ${Fonts.medium};
`;

const StyledTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const StyledLabel = styled.label`
  font-family: Prompt;
  font-family: ${Fonts.regular};
  font-size: 12px;
  text-align: left;
  color: #a4a6b3;
`;

const StyledFieldsContainer = styled(Grid)`
  // padding: 0 16px 11px 16px;
  input {
    height: 32px;
    font-family: ${Fonts.medium};
    font-size: 14px;
    text-align: right;
  }
`;

const StyledChangeButton = styled(Button)``;

const EntityFields: React.FC<Props> = ({ title, fields }) => {
  const [state, setState] = useState('view');

  const toogleState = () => {
    setState(state === 'view' ? 'editing' : 'view');
  };

  const saveHandler = () => {
    setState('view');
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <Grid flow={FlowEnum.COLUMN} gap={8}>
          {state === 'editing' && (
            <StyledChangeButton color="primary" onClick={saveHandler}>valider</StyledChangeButton>
          )}
          <StyledChangeButton color="primary" onClick={toogleState}>
            {state === 'view' ? 'modifier' : 'annuler'}
          </StyledChangeButton>
        </Grid>
      </StyledHeader>
      <StyledFieldsContainer>
        {fields.map(field => (
          <Grid
            flow={FlowEnum.COLUMN}
            align="center"
            style={{
              gridTemplateColumns: 'auto 330px',
              borderBottom: '1px solid #EAEDF3',
              padding: '9px 16px',
            }}
          >
            <StyledLabel htmlFor={'field_' + field.key}>
              {field.label}
            </StyledLabel>
            <input
              id={'field_' + field.key}
              disabled={state !== 'editing'}
              type={field.type}
              style={{
                border: state === 'editing' ? "1px solid #eee" : "none"
              }}
            />
          </Grid>
        ))}
      </StyledFieldsContainer>
    </StyledContainer>
  );
};

export default EntityFields;
