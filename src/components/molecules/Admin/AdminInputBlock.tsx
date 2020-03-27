import React from 'react';
import styled from 'styled-components';
import InputText from 'components/atoms/Inputs/Text/InputText';

interface Props {
  onChange: (key: string, value: string) => void;
}

const InputContainer = styled.div`
  margin: 32px auto;
  div {
    margin-bottom: 24px;
  }
`;

const AdminInputBlock: React.FC<Props> = ({ onChange }) => {
  return (
    <InputContainer>
      <InputText
        title="Email"
        placeholder="Entrez votre email"
        fieldKey="email"
        onChange={onChange}
      />
      <InputText
        title="Mot de passe"
        placeholder="Entrez votre mot de passe"
        fieldKey="password"
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default AdminInputBlock;
