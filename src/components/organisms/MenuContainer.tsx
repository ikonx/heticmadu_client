import React from 'react'
import { MenuList } from '@material-ui/core';
import MenuListItem from 'components/molecules/MenuListItem';
import { AccountBalance, ShoppingBasket } from '@material-ui/icons';

interface Props {}


const MenuContainer: React.FC<Props> = () => {
    const arrayData = [
        {
            "icon": <AccountBalance />,
            "title": "Entreprises",
            "link": "/companies"
        },
        {
            "icon": <ShoppingBasket />,
            "title": "POI",
            "link": "/pois"
        },
        {
            "icon": <ShoppingBasket />,
            "title": "Tags",
            "link": "/tags"
        },
        {
            "icon": <ShoppingBasket />,
            "title": "Formulaire",
            "link": "/form"
        }
    ];

    return (
        <MenuList>
            {
                arrayData.map((item, index) => <MenuListItem key={index} icon={item.icon} title={item.title} link={item.link} />)
            }
        </MenuList>
    )
}

export default MenuContainer
