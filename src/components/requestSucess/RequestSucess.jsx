import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Alert from '../alert/Alert'
import { Link } from 'react-router-dom'
import './RequestSucess.scss'

const RequestSucess = () => {
    return (
        <div className='create_account main_content mt-3'>
            <div className='section_heading'>
                <h1>
                  Create additional ICBT Global Wallet Receiving Account
                </h1>
            </div>
            {/* <Alert /> */}
            <div className='sucess_message'>
                <span>
                    <svg width='100px' className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 gNhxuh ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation" data-testid="StatusConfirmationLightIcon" data-id="Icon" fill="currentColor">
                        <path fill="none" d="M0 0h18v18H0z" opacity=".25"></path>
                        <circle cx="9" cy="9" r="9" fill="#00847f"></circle>
                        <path fill="#fff" d="M7.216 13.553l-3.63-3.629L4.859 8.65l2.357 2.358 5.925-5.925 1.273 1.273z"></path>
                    </svg>
                </span>

                <h3>
                    Request submitted successfully
                </h3>

                <p>
                    We have received your request for additional ICBT Global Wallet Receiving Account(s) and will notify you the progress. <br /> ICBT Global Wallet Receiving Account Number will be available after approval.
                </p>

                <div className="sucess_btn d-flex align-items-center justify-content-center gap-2">
                    <Link to={'/'}>
                        <button>
                            Back to overview
                        </button>
                    </Link>

                    <Link to={'/createAccount'}>
                        <button>
                            Create another Receiving Account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RequestSucess