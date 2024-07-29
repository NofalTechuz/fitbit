import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';


function Sidebar() {
    return (
        <div>
            <div style={{ position: "", display: 'flex', height: '100vh', overflow: 'scroll initial' }} className='border border-end-1'>
                <CDBSidebar textColor="black" backgroundColor="white">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large icon-blue"></i>}>
                        {/* <h1 className="m-0 fs-6 text-dark text-uppercase">Fitbit</h1> */}
                        <Logo />
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <Link to="" activeclassname="activeClicked">
                                <CDBSidebarMenuItem iconClassName="custom-icon-color" icon="columns icon-blue">Dashboard</CDBSidebarMenuItem>
                            </Link>
                            <Link to="tables" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="table icon-blue">Tables</CDBSidebarMenuItem>
                            </Link>
                            <Link to="profile" activeclassname="activeClicked" >
                                <CDBSidebarMenuItem icon="user icon-blue">Profile page</CDBSidebarMenuItem>
                            </Link>
                            <Link exact to="/analytics" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line icon-blue">Analytics</CDBSidebarMenuItem>
                            </Link>

                            <Link exact to="/hero404" target="_blank" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle icon-blue">404 page</CDBSidebarMenuItem>
                            </Link>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter> */}
                </CDBSidebar>
            </div>
        </div>
    )
}

export default Sidebar
