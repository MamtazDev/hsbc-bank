import React from 'react'
import './Overview.scss'
import { Link } from 'react-router-dom'
import Alert from '../alert/Alert'
import WalletList from '../walletList/WalletList'
import RecevingAccountList from '../recevingAccountList/RecevingAccountList'

const Overview = () => {
    return (
        <div className='overview main_content mt-3'>
            <div className='section_heading'>
                <h1>
                    Overview
                </h1>
            </div>
            <Alert />
            <WalletList />
            <RecevingAccountList />
        </div>
    )
}

export default Overview