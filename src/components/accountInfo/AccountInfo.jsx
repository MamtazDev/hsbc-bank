import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const AccountInfo = ({ accountInfo }) => {

    return (
        <div className="account_info">
            <div className="account_info_head mb-3">
                <h3>
                    USD Account
                </h3>
                <p className='m-0'>
                    WA5456789000USD
                </p>
            </div>
            <div className="account_current">
                <p className='m-0'>
                    Current ledger
                </p>
                <div className="account_ammount">

                    <span>
                        USD
                    </span>
                    326,678.00
                </div>
            </div>
            <div className="account_current">
                <p className='m-0'>
                    Available balance
                </p>
                <div className="account_ammount">

                    <span>
                        GBP
                    </span>
                    31,526,633.00
                </div>
            </div>
            <div className="account_date">
                <p>
                    As of 22 Jun 2022 12:13
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