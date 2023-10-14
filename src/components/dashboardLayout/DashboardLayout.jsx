import React from 'react'
import './DashboardLayout.scss'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../topBar/TopBar'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <>
            <TopBar />
            <div className='row'>
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-9">
                    <Outlet />
                </div>

            </div>

        </>
    )
}

export default DashboardLayout