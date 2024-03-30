import React from 'react';
import TopNavBar from '../TopNav/TopNav';
import SideNavBar from '../SideNav/SideNav';
import './Layout.css'
const Layout = ({ children }) => {
    return (
        <>
            <TopNavBar />
            <div className='mainContent'>
                <SideNavBar />
                <main>{children}</main>
            </div>

        </>
    )
}

export default Layout;