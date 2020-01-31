import React from 'react'
import {AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddIcon from '@material-ui/icons/Add';
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
                    <Typography variant="h5" align="center">
                        Entreprise
                    </Typography>
                </StyledBlock>
                <StyledBlock>
                    <Searchbar />
                    <IconButton edge="start" color="inherit" aria-label="add">
                        <AddIcon fontSize="large" />
                    </IconButton>
                </StyledBlock>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header
