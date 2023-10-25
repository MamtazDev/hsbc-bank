import React from 'react'
import './WalletList.scss'
import { AiFillDollarCircle, AiFillEuroCircle } from "react-icons/ai";
import { PiCurrencyGbpFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const walletInfo = [
    {
        walletName: 'USD Account',
        availableBalance: '326,678.00',
        walletTypeIcon: <AiFillDollarCircle />,
        balanceType:"USD"

    },

    {
        walletName: 'GBP Account',
        availableBalance: '230,721.00 ',
        walletTypeIcon: <PiCurrencyGbpFill />,
        balanceType:"GBP"
    },

    {
        walletName: 'EUR Account',
        availableBalance: '11,057.00 ',
        walletTypeIcon: <AiFillEuroCircle />,
        balanceType:"EUR"
    },

    {
        walletName: 'HKD Account',
        availableBalance: '167,990.00',
        walletTypeIcon: <AiFillDollarCircle />,
        balanceType:"HKD"
    }
]

const WalletList = ({formattedDate,timeString}) => {
  
  

    return (
        <div className='walletlist'>
            <div className='section_title_wrapper d-flex flex-wrap mb-3 align-items-center justify-content-between'>
                <div className="section_title">
                    <h5 className='text_clr_black_33 fs-5 fw-medium'>
                        ICBT Global Wallet list
                        <span className='fs_12 fw-normal ms-1'>
                            (As of {formattedDate} {timeString})
                          
                        </span>
                    </h5>
                </div>

                <div className="section_btn">
                    <button className='btn_not_allowed'>
                        Top-up / Withdraw
                    </button>
                </div>
            </div>

            <div className="wallet_card_wrapper">
                <div className="row">
                    {
                        walletInfo.map((walletData, index) => (
                            <div className="col-lg-3" key={index}>
                                <div className="wallet_card_item mb-4 mb-lg-0">
                                    <div className="wallet_card_head d-flex white-spance-nowrap align-items-center justify-content-between">
                                        <div className="wallet_card_title">
                                            <h6 className='m-0'>
                                                {walletData.walletName}
                                            </h6>
                                        </div>

                                        <div className="wallet_type_icon">
                                            <span className='fs-1 text_clr_93'>{walletData.walletTypeIcon}</span>
                                        </div>
                                    </div>

                                    <div className="wallet_available_balance text-end">
                                        <p className='fs_12 text_clr_black_33'>
                                            Available balance
                                        </p>

                                        <p className='m-0 text_clr_black_33 fs-5'>
                                            <span className='fs_14 me-1'>
                                                {walletData.balanceType}
                                            </span>
                                            {walletData.availableBalance}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-end mt-3'>

                <button className='bg-transparent border-0'>Show all <IoIosArrowDown/></button>
                </div>
            </div>
        </div>
    )
}

export default WalletList