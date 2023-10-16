import React from 'react'
import './RecevingAccountList.scss'
import { AiOutlineReload } from 'react-icons/ai'
import { IoIosArrowForward } from "react-icons/io";
import AccountDetails from '../accountDetails/AccountDetails';
import AccountInfo from '../accountInfo/AccountInfo';
import { recevingData } from '../../data/RecevingData';

const RecevingAccountList = () => {
    return (
        <div className='receving_account_list'>
            <div className="section_title_wrapper">
                <div className="section_title d-flex align-items-center justify-content-between">
                    <h5 className='fs-5 fw-medium'>
                        HSBC Global Wallet Receiving Account list
                    </h5>

                    <span className='fs_12'>
                        Last updated at 22 Jun 2022 12:13
                        <button className='reload_btn ms-2'>
                            < AiOutlineReload />
                        </button>
                    </span>
                </div>
            </div>

            <div className="filter_btn d-flex justify-content-between">
                <div className="filter_btn_left d-flex align-items-center gap-3">
                    <select name="allCurrency" id="">
                        <option value="1">
                            All Currency
                        </option>
                    </select>
                    <select name="allCurrency" id="">
                        <option value="1">
                            All Currency
                        </option>
                    </select>
                    <div className="search_filter">
                        <input type="text" placeholder='Search by Receiving Account name or number' />
                    </div>
                </div>
                <div className="filter_btn_right d-flex gap-3">
                    <div className="modal_btn">
                        <button>Generate composite statement</button>
                    </div>
                    <div className="modal_btn2">
                        <button>Create Receiving Account</button>
                    </div>
                </div>
            </div>

            {
                recevingData.map((accountDataInfo, index) => (
                    <div className='account_details_wrapper'>
                        {accountDataInfo.accountDetails && <AccountInfo accountInfo={accountDataInfo.accountDetails} />}
                        {accountDataInfo.accountData && <AccountDetails accountData={accountDataInfo.accountData} />}
                    </div>

                ))
            }



        </div>
    )
}

export default RecevingAccountList;
