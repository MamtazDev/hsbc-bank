
import './DashboardLayout.scss'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../topBar/TopBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <>
            <TopBar />
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-lg-2 p-0">
                        <Sidebar />
                    </div>

                    <div className="col-lg-10">
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* <div className="row mt-5">
                <div className="col-md-2 bg-danger">
                    <h1>Hello</h1>
                </div>
                <div className="col-md-10 bg-success">
                    <Outlet />
                    <h1>Hello</h1>
                </div>
            </div> */}
        </>
    )
}

export default DashboardLayout