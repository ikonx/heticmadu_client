import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuItem, Typography } from '@material-ui/core';

interface Props {
    title: string;
    link: string;
    icon: ReactElement;
}

const StyledImagesBlock = styled.div`
    margin-right: 24px;
    color: #333333;
`;

const StyledTypoTitle = styled(Typography)`
    && {
        font-size: 24px;
        color: #333333;
    }
`;

const StyledLink = styled(Link)`
    && {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    && {
        width:  100%;
    }
`;

const MenuListItem: React.FC<Props> = ({link, icon, title }) => {
    return (
        <StyledLink to={link}>
            <StyledMenuItem>
                <StyledImagesBlock>
                    {icon}
                </StyledImagesBlock>
                <StyledTypoTitle variant="h4">{title}</StyledTypoTitle>
            </StyledMenuItem>
        </StyledLink>
    )
}

export default MenuListItem