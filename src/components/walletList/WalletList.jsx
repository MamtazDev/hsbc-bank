import React from 'react'
import './WalletList.scss'
import { AiFillDollarCircle, AiFillEuroCircle } from "react-icons/ai";
import { PiCurrencyGbpFill } from "react-icons/pi";

const walletInfo = [
    {
        walletName: 'USD Account',
        availableBalance: '326,678.00',
        walletTypeIcon: <AiFillDollarCircle />
    },

    {
        walletName: 'GBP Account',
        availableBalance: '326,678.00',
        walletTypeIcon: <PiCurrencyGbpFill />
    },

    {
        walletName: 'EUR Account',
        availableBalance: '326,678.00',
        walletTypeIcon: <AiFillEuroCircle />
    },

    {
        walletName: 'AUD Account',
        availableBalance: '326,678.00',
        walletTypeIcon: <AiFillDollarCircle />
    }
]

const WalletList = () => {
    return (
        <div className='walletlist'>
            <div className='section_title_wrapper d-flex flex-wrap mb-3 align-items-center justify-content-between'>
                <div className="section_title">
                    <h5 className='text_clr_black_33 fs-5 fw-medium'>
                        HSBC Global Wallet list
                        <span className='fs_12 fw-normal ms-1'>
                            (As of 22 Jun 2022 12:13)
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
                                                USD
                                            </span>
                                            {walletData.availableBalance}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WalletList