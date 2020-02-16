import React from 'react'
import {AppBar, InputBase, Toolbar, Typography} from '@material-ui/core';
import styled from 'styled-components';
import Searchbar from 'components/atoms/Searchbar';
import AdminBlock from "./AdminBlock";
import MenuContainer from "../organisms/MenuContainer";

interface Props {}

const StyledAppBar = styled(AppBar)`
    width: 100%;
    && {
        background-color: white;
        color: #333333;
        box-shadow: none;
        height: min-content;
    }
`;

const StyledBlock = styled.div`
    display: inherit;
    align-items: center;
`;

const StyledToolbar = styled(Toolbar)`
    padding: 0 2rem !important;
    && {
        justify-content: space-between;
    }
`;

const StyledIconLogo = styled.div`
    && {
        margin-right: 24px;
    }
`;

const HeaderLogo = styled(Typography)`
    font-size: 24px;
    font-weight: 800;
    font-family: 'Montserrat-ExtraBold', sans-serif !important;
`;

const HeaderSearch = styled(StyledBlock)`
    margin-left: 6rem;
    svg {
      font-size: 20px;
      color: #A4A6B3;
    }
`;

const Header: React.FC<Props> = () => {

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <StyledBlock>
                    <HeaderLogo variant="h5" align="center">
                        Madu
                    </HeaderLogo>
                    <HeaderSearch>
                        <Searchbar />
                        <InputBase
                          placeholder="Search"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                    </HeaderSearch>
                </StyledBlock>
                <StyledBlock>
                    <MenuContainer />
                    <AdminBlock />
                </StyledBlock>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header
