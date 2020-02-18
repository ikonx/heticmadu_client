import React from 'react'
import styled from 'styled-components'
import AdminText from 'components/atoms/Text/Admin/AdminText';
import AdminInputBlock from 'components/molecules/Admin/AdminInputBlock';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';

interface Props {}

const ContainerAdminBlock = styled.div `
    button {
        width: 100%;
    }
`;

const AdminBlock: React.FC<Props> = () => {
    return (
        <ContainerAdminBlock>
            <AdminText />
            <AdminInputBlock />
            <BtnBlue text="Se connecter" onClick={() => null} />
        </ContainerAdminBlock>
    )
}

export default AdminBlock
