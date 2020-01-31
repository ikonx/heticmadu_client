import React from 'react';
import styled from 'styled-components';
import Admin from 'components/atoms/Admin/Admin';
import Arrow from 'components/atoms/Arrow';

interface Props {}

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;  

const AdminBlock: React.FC<Props> = () => {
    return (
        <StyledContainer>
            <Admin />
            <Arrow />
        </StyledContainer>
    )
}

export default AdminBlock
