import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../../Pages/Profile';
import MainContent from './MainContent';
import SidebarMaenu from './SidebarMaenu';
import Topnavbar from './Topnavbar';

const Layout = () => {
    const location = useLocation()
    const [pathname, setPathname] = useState(location.pathname);
    
    useState(() => {}, [pathname] )
    return (
        <div>
            <Topnavbar/>
            <SidebarMaenu/>
            {
                pathname === '/' ? <MainContent/> : pathname==='/profile'? <Profile/> : null
            }
            
        </div>
    );
};

export default Layout;