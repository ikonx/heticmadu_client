import React from 'react'
import {AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import {
    AccountBalance,
    Add
} from '@material-ui/icons';
import styled from 'styled-components';
import Searchbar from 'components/atoms/Searchbar';
interface Props {}

const StyledAppBar = styled(AppBar)`
    && {
        background-color: white;
        color: #333333;
        box-shadow: none;
        border-bottom: 1px solid #BDBDBD;
        height: min-content;
    }
`;

const StyledBlock = styled.div`
    display: inherit;
    align-items: center;
`;

const StyledToolbar = styled(Toolbar)`
    && {
        justify-content: space-between;
    }
`;

const StyledIconLogo = styled(AccountBalanceIcon)`
    && {
        margin-right: 24px;
    }
`;

const Header: React.FC<Props> = () => {

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <StyledBlock>
                    <StyledIconLogo />
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <AccountBalance />
                    </IconButton>
                    <Typography variant="h5" align="center">
                        Entreprise
                    </Typography>
                </StyledBlock>
                <StyledBlock>
                    <Searchbar />
                    <IconButton edge="start" color="inherit" aria-label="add">
                        <Add fontSize="large" />
                    </IconButton>
                </StyledBlock>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header
