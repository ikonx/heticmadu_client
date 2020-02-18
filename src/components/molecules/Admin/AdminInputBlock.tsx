import React from 'react';
import styled from 'styled-components';
import InputText from 'components/atoms/Inputs/Text/InputText';

interface Props {}

const InputContainer = styled.div `
    margin: 32px auto;
`;

// const StyledInputText = styled(InputText) `
//     && {
//         margin-bottom: 24px;
//     }
// `;

const AdminInputBlock: React.FC<Props> = () => {
    return (
        <InputContainer>
            <InputText name="Email" placeholder="Entrez votre email"/>
            <InputText name="Mot de passe" placeholder="Entrez votre mot de passe"/>
        </InputContainer>
    )
}

export default AdminInputBlock;
