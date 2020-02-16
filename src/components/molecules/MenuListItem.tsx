import React, {ReactElement, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuItem, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

interface Props {
    title: string;
    link: string;
}

const StyledTypoTitle = styled(Typography)<{ linkActive: boolean }>`
    && {
        font-size: 1rem;
        color: ${props => props.linkActive ? '#2C7BE5' : '#A4A6B3' };
        font-family: ${props => props.linkActive ? 'Montserrat-Bold': 'Montserrat-Regular'}, sans-serif;
    }
`;

const StyledLink = styled(Link)<{ linkActive: boolean }>`
    && {
        text-decoration: none;
        padding: 9px 12px;
        background: ${props => (props.linkActive ? 'rgba(44, 123, 229, 0.16)' : 'unset' )};
        border-radius: 4px;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    && {
        padding: 0;
        overflow: unset;
        width:  100%;
        border-radius: 4px;
        transition: .5s;
        &:not(:nth-last-child(2)) {
            margin-right: 35px;
        }
    }
`;

const MenuListItem: React.FC<Props> = ({link, title }) => {
    const location = useLocation();
    let [isActive, setActive] = useState(false);

    useEffect(() => {
        setActive(location.pathname === link);
    }, [location]);

    return (
        <StyledMenuItem>
            <StyledLink to={link} linkActive={isActive}>
                <StyledTypoTitle variant="h4" linkActive={isActive}>{title}</StyledTypoTitle>
            </StyledLink>
        </StyledMenuItem>
    )
}

export default MenuListItem