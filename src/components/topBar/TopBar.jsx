import React from 'react'
import './TopBar.scss'
import icbtLogo from '../../assets/logo-white-text.png'

const TopBar = () => {
    return (
        <div className='topbar w-100 d-flex flex-wrap align-items-center justify-content-between px-3 py-1 gap-3'>
            <div className='bank_logo'>
                <img style={{ width: '225px' }} src={icbtLogo} alt="loog" />
            </div>

            {/* <div className='welcome_title'>
                <p className='fw-bold fs-6 text-white m-0'>
                    Welcome to the ICBT E-Commerce Banking Technology Demo page
                </p>
            </div>

            <div className='subscribe_btn'>
                <button className='sub-btn border-0'>
                    Subscribe now
                </button>
            </div> */}
            <div className='profile'>
              
<p>Sky Fashion Limited</p>
            </div>
        </div>

    )
}

export default TopBar