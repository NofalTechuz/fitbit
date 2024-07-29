import React from 'react'
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>

    <div className="sidebar">
        <NavLink to="#" >
        <span className='logo'>
            <i className='bx bx-code-alt'></i>
            <div className="logo-name"><span>Asmr</span>Prog</div>
        </span>
        </NavLink>
        <ul className="side-menu">
            <li><NavLink to="#"><i className='bx bxs-dashboard'></i>Dashboard</NavLink></li>
            <li><NavLink to="#"><i className='bx bx-store-alt'></i>Shop</NavLink></li>
            <li className="active"><NavLink to="#"><i className='bx bx-analyse'></i>Analytics</NavLink></li>
            <li><NavLink to="#"><i className='bx bx-message-square-dots'></i>Tickets</NavLink></li>
            <li><NavLink to="#"><i className='bx bx-group'></i>Users</NavLink></li>
            <li><NavLink to="#"><i className='bx bx-cog'></i>Settings</NavLink></li>
        </ul>
        <ul className="side-menu">
            <li>
                <NavLink to="#" className="logout">
                    <i className='bx bx-log-out-circle'></i>
                    Logout
                </NavLink>
            </li>
        </ul>
    </div>

    <div className="content">
        <nav>
            <i className='bx bx-menu'></i>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden />
            <label for="theme-toggle" className="theme-toggle"></label>
            <NavLink to="#" className="notif">
                <i className='bx bx-bell'></i>
                <span className="count">12</span>
            </NavLink>
            <span className="profile">

            <NavLink to="#" >
                <img alt='img' src="/assets/img/logo.png" />
            </NavLink>
            </span>
        </nav>


        <main>

            <div className="header">
                <div className="left">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li><NavLink to="#">
                                Analytics
                            </NavLink></li>
                        /
                        <li><NavLink to="#" className="active">Shop</NavLink></li>
                    </ul>
                </div>
                <NavLink to="#" className="report">
                    <i className='bx bx-cloud-download'></i>
                    <span>Download CSV</span>
                </NavLink>
            </div>

            <ul className="insights">
                <li>
                    <i className='bx bx-calendar-check'></i>
                    <span className="info">
                        <h3>
                            1,074
                        </h3>
                        <p>Paid Order</p>
                    </span>
                </li>

                <li><i className='bx bx-show-alt'></i>
                    <span className="info">
                        <h3>
                            3,944
                        </h3>
                        <p>Site Visit</p>
                    </span>
                </li>

                <li><i className='bx bx-line-chart'></i>
                    <span className="info">
                        <h3>
                            14,721
                        </h3>
                        <p>Searches</p>
                    </span>
                </li>

                <li><i className='bx bx-dollar-circle'></i>
                    <span className="info">
                        <h3>
                            $6,742
                        </h3>
                        <p>Total Sales</p>
                    </span>
                </li>
            </ul>


            <div className="bottom-data">
                <div className="orders">
                    <div className="header">
                        <i className='bx bx-receipt'></i>
                        <h3>Recent Orders</h3>
                        <i className='bx bx-filter'></i>
                        <i className='bx bx-search'></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                    <img alt='img' src="/assets/img//profile-1.jpg" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img alt='img' src="/assets/img//profile-1.jpg" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img alt='img' src="/assets/img//profile-1.jpg" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status process">Processing</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="reminders">
                    <div className="header">
                        <i className='bx bx-note'></i>
                        <h3>Remiders</h3>
                        <i className='bx bx-filter'></i>
                        <i className='bx bx-plus'></i>
                    </div>
                    <ul className="task-list">
                        <li className="completed">
                            <div className="task-title">
                                <i className='bx bx-check-circle'></i>
                                <p>Start Our Meeting</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li className="completed">
                            <div className="task-title">
                                <i className='bx bx-check-circle'></i>
                                <p>Analyse Our Site</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li className="not-completed">
                            <div className="task-title">
                                <i className='bx bx-x-circle'></i>
                                <p>Play Footbal</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                    </ul>
                </div>


            </div>

        </main>

    </div>
</>
  )
}

export default Dashboard