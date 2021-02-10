import React from 'react';
import * as s from './styles';
import Sidebar from './Sidebar';
import MainView from './MainView';
import menuItems from './Sidebar/menuItems';

function App() {
    const backgroundImage = 'images/sidebar-background.jpg';
    const header = {
        fullname: 'Sidebar Header',
        shortName: 'Head',
    };
    const fonts = {
        header: 'Lato',
        menu: 'Poppins',
    };

    return (
        <s.App>
            <Sidebar backgroundImage={backgroundImage} header={header} menuItems={menuItems} fonts={fonts} />
            <MainView />
        </s.App>
    );
}

export default App;
