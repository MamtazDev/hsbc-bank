import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { recevingData } from '../../data/RecevingData';
import moment from 'moment';

const AccountInfo = ({ accountInfo }) => {
    const currentData = new Date();
    const formatDate = moment(currentData).format('DD MMM YYYY, h:mm')
   
    return (

        <div className="account_info">

            <div className="account_info_head mb-3">
                <h3>
                    {accountInfo.accountType}
                </h3>
                <p className='m-0'>
                    {accountInfo.accountNumber}
                </p>
            </div>
            <div className="account_current">
                <p className='m-0'>
                    Current ledger
                </p>
                <div className="account_ammount">

                    <span>
                        {accountInfo.currentLedgerType}
                    </span>
                    {accountInfo.currentLedgerAmmount}
                </div>
            </div>
            <div className="account_current">
                <p className='m-0'>
                    Available balance
                </p>
                <div className="account_ammount">
                    <span>
                        {accountInfo.availableBalaceType}
                    </span>
                    {accountInfo.availableBalance}
                </div>
            </div>
            <div className="account_date">
                <p>
                   As of  {formatDate  }
                </p>
            </div>
            <div className="account_withdraw">
                <a href="#">
                    Top-up / Withdraw <IoIosArrowForward style={{ color: 'red' }} />
                </a>
            </div>

        </div>
    )
}

export default AccountInfo