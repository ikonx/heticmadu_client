import React from 'react'
import {AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

interface Props {}

const Header: React.FC<Props> = () => {
    const StyledAppBar = styled(AppBar)`
    && {
        background-color: white;
        color: #333333;
        box-shadow: none;
        border-bottom: 1px solid #BDBDBD;
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

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <StyledBlock>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <AccountBalanceIcon />
                    </IconButton>
                    <Typography variant="h5" align="center">
                        Entreprise
                    </Typography>
                </StyledBlock>
                <StyledBlock>
                    <IconButton edge="start" color="inherit" aria-label="search">
                        <SearchIcon fontSize="large" />
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="add">
                        <AddIcon fontSize="large" />
                    </IconButton>
                </StyledBlock>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header
