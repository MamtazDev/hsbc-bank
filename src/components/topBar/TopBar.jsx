import React from 'react'
import './TopBar.scss'

const TopBar = () => {
    return (
        <div className='topbar w-100 d-flex align-items-center gap-3'>
            <div className='bank_logo'>
                <img src="https://merchantbox.business.hsbc.com.hk/static/logo_dark_EN.d02599ab.svg" alt="loog" />
            </div>

            <div className='welcome_title'>
                <p className='fw-bold fs-6 text-white m-0'>
                    Welcome to the HSBC Merchant Box Demo page
                </p>
            </div>

            <div className='subscribe_btn'>
                <button className='sub-btn border-0'>
                    Subscribe now
                </button>
            </div>
        </div>

    )
}

export default TopBar