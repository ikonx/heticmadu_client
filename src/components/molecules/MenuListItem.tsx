import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuItem, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { Fonts, Colors } from "../../utils/styles";

interface Props {
    title: string;
    link: string;
}

const StyledTypoTitle = styled(Typography)<{ linkactive: string | undefined }>`
    && {
        font-size: 1rem;
        color: ${props => props.linkactive === 'true' ? Colors.blue : Colors.grey };
        font-family: ${props => props.linkactive === 'true' ? Fonts.bold : Fonts.regular };
    }
`;

const StyledLink = styled(Link)<{ linkactive: string | undefined }>`
    && {
        text-decoration: none;
        padding: 9px 12px;
        border-radius: 4px;
        position: relative;
        &::after {
            content: '';
            width: 20%;
            height: 4px;
            background: ${props => props.linkactive === 'true' ? Colors.blue : 'unset' };
            position: absolute;
            bottom: 2px;
        }
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
    }, [location, link]);

    return (
        <StyledMenuItem>
            <StyledLink to={link} linkactive={isActive.toString()}>
                <StyledTypoTitle variant="h4" linkactive={isActive.toString()}>{title}</StyledTypoTitle>
            </StyledLink>
        </StyledMenuItem>
    )
}

export default MenuListItem
