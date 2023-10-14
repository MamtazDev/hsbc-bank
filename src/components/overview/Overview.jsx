import React from 'react'
import './Overview.scss'
import { Link } from 'react-router-dom'
import Alert from '../alert/Alert'
import WalletList from '../walletList/WalletList'

const Overview = () => {
    return (
        <div className='overview mt-3'>
            <div className='section_heading'>
                <h1>
                    Overview
                </h1>
            </div>

            <Alert />

            <WalletList />


        </div>
    )
}

export default Overview