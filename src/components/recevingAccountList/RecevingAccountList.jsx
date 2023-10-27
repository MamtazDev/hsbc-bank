import React from 'react'
import './RecevingAccountList.scss'
import AccountDetails from '../accountDetails/AccountDetails';
import AccountInfo from '../accountInfo/AccountInfo';
import { recevingData } from '../../data/RecevingData';

import FilterBtn from '../filterBtn/FilterBtn';
import AccountRequest from '../accountRequest/AccountRequest';
import SectionTitle from '../sectionTitle/SectionTitle';

const RecevingAccountList = ({timeString,formattedDate}) => {
    return (
        <div className='receving_account_list'>
            <SectionTitle formattedDate={formattedDate} timeString={timeString}/>
            <FilterBtn />
            {
                recevingData.map((accountDataInfo, index) => (
                    <div className='account_details_wrapper' key={index}>
                        {accountDataInfo.accountDetails && <AccountInfo accountInfo={accountDataInfo.accountDetails} />}
                        {accountDataInfo.accountData && <AccountDetails accountData={accountDataInfo.accountData} />}
                    </div>
                ))
            }
           
            <div className="section_title_wrapper mt-5">
                <div className="section_title d-flex align-items-center justify-content-between">
                    <h5 className='fs-5 fw-medium'>
                        ICBT Global Wallet Receiving Account list
                    </h5>
                </div>
            </div>

            <div className="filter_btn d-flex justify-content-between mb-4">
                <div className="filter_btn_left d-flex flex-wrap align-items-center gap-3">
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
            </div>
            <AccountRequest formattedDate={formattedDate} />
        </div>
    )
}

export default RecevingAccountList;
