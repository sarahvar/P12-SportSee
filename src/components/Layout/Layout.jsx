import React from 'react';
import TopNavBar from '../TopNav/TopNav';
import SideNavBar from '../SideNav/SideNav';
const Layout =({children}) =>{
    return(
        <>
        <div>
            <TopNavBar/>
            <SideNavBar/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;