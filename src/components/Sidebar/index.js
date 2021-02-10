import React, { useEffect, useState } from 'react';
import * as s from './styles';
import { IconContext } from 'react-icons';

const Sidebar = (props) => {
    const {
        backgroundImage = '',
        header = {
            fullname: '',
            shortName: '',
        },
        menuItems = [],
        fonts = {
            header: '',
            menu: '',
        },
    } = props;

    const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [headerLogo, setHeaderLogo] = useState(header.fullname);

    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeaderLogo(header.fullname), 200) : setHeaderLogo(header.shortName);
    }, [isSidebarOpen, header]);

    useEffect(() => {
        const updateWindowWidth = () => {
            window.innerWidth < 1200 && isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
        };

        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [isSidebarOpen]);

    const handleMenuItemClick = (name) => {
        setSelectedMenuItem(name);
    };

    const menuItemsJSX = menuItems.map((item, key) => {
        const isItemSelected = selectedMenuItem === item.name;
        const hasSubmenus = !!item.subMenuItems.length;

        return (
            <s.MenuItemBox key={key} onClick={() => handleMenuItemClick(item.name)}>
                <s.MenuItem font={fonts.menu} selected={isItemSelected} isSidebarOpen={isSidebarOpen}>
                    {item.icon}
                    <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                    {hasSubmenus && <s.DropdownIcon selected={isItemSelected} />}
                </s.MenuItem>
            </s.MenuItemBox>
        );
    });

    return (
        <IconContext.Provider value={{ color: 'white', size: '2.2rem' }}>
            <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
                <s.SidebarHeader font={fonts.header}>{headerLogo}</s.SidebarHeader>
                <s.MenuItemsContainer>{menuItemsJSX}</s.MenuItemsContainer>
                <s.TogglerContainer onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <s.Toggler />
                </s.TogglerContainer>
            </s.SidebarContainer>
        </IconContext.Provider>
    );
};

export default Sidebar;
