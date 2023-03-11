import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainContent from './MainContent';
import SidebarMaenu from './SidebarMaenu';
import Topnavbar from './Topnavbar';

const Layout = () => {
    return (
        <div>
            <Topnavbar/>
            <SidebarMaenu/>
            {
                useLocation().pathname === '/' ? <MainContent/> : null
            }
            <Outlet/>   
        </div>
    );
};

export default Layout;