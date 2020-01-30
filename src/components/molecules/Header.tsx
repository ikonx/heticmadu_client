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
        display: flex;
        color: red;
    }
    `;

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <AccountBalanceIcon />
                </IconButton>
                <Typography variant="h4" align="center">
                    Entreprise
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="add">
                    <AddIcon />
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header
