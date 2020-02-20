import React from 'react'
import { MenuList } from '@material-ui/core';
import MenuListItem from 'components/molecules/MenuListItem';
import styled from "styled-components";

interface Props {}


const MenuContainer: React.FC<Props> = () => {
    const arrayData = [
        {
            "title": "Map",
            "link": "/map"
        },
        {
            "title": "Entreprise",
            "link": "/companies"
        },
        {
            "title": "POI",
            "link": "/pois"
        },
        {
            "title": "Tags",
            "link": "/tags"
        }
    ];

    const MenuNav = styled(MenuList)`
        display: flex;
        align-items: center;
    `;

    const MenuListSeparator = styled.li`
        min-width: 1px;
        width: auto;
        height: 24px;
        background: #C4C4C4;
        margin: 0 2rem;
    `;

    return (
        <MenuNav>
            {
                arrayData.map((item, index) => <MenuListItem key={index} title={item.title} link={item.link} />)
            }
            <MenuListSeparator />
        </MenuNav>
    )
}

export default MenuContainer
