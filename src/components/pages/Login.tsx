import React from 'react';
import Grid from 'components/atoms/Grid/Grid';
import AdminBlock from 'components/organisms/Admin/AdminBlock';
import styled from 'styled-components';
import ImgLogin from 'assets/img/login_img.jpg';

interface Props {}

const StyledGridAdmin = styled(Grid) `
    grid-template-columns: repeat(2, 1fr);
    width: 100vw;
    height: 100vh;
`;

const StyledAdminBlock = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledBlockImg = styled.div `
    background-image: url(${ImgLogin});
    background-size: cover;
    background-position: top center;
`;

const Login: React.FC<Props> = () => {
    return (
        <StyledGridAdmin>
            <StyledAdminBlock>
                <AdminBlock />
            </StyledAdminBlock>
            <StyledBlockImg/>
        </StyledGridAdmin>
    )
}

export default Login
