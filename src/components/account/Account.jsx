import React from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Alert from '../alert/Alert';
import './Account.scss'
import { PiClipboardTextBold } from "react-icons/pi";

const Account = () => {
  return (
    <div className='create_account main_content mt-3'>
      <div className='section_heading'>
        <h1>
          <MdOutlineArrowBackIosNew /> | Band-Aid branch Store
        </h1>
      </div>

      <Alert />

      <div className="account_card">
        <div className="account_card_left">
          <div className="account_card_head">
            <p className='d-flex align-items-center m-0 gap-2'>
              <span>
                Band-Aid branch Store | 13252222011039
              </span>
              <span>
                <svg width={"15px"} class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 iXVZXJ ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-labelledby="title-icon-716 " role="img" data-testid="NewModalIcon" data-id="Icon" fill="#fff"><title id="title-icon-716">copy13252222011039</title><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M11.8 15.8H2.2V6.2h2.6V5H1v12h12v-3.8h-1.2v2.6zm4-5H7.2V2.2H10V1H6v11h11V8h-1.2v2.8zm-4.34-3.412l4.34-4.34v3.808l1.2-1.2V1h-4.657l-1.199 1.199h3.809L10.612 6.54l.848.848z"></path></svg>
              </span>
            </p>
            <p className='m-0 fs_12'>
              Create Date:-
            </p>
          </div>

          <div className="account_card_content_wrapper">

            <div className="account_card_content_top">
              <div className="account_card_item_left">
                <div className="account_card_item mb-4">
                  <p className='fs_14 text_clr_76'>Receiving Account currency</p>
                  <p className='fw-medium fs_14 text-black'>USD</p>
                </div>

                <div className="account_card_item mb-4">
                  <p className='fs_14 text_clr_76'>Bank name</p>
                  <p className='fw-medium fs_14 text-black'>CITI Bank, Hong Kong</p>
                </div>
              </div>

              <div className="account_card_item_right">
                <div className="account_card_item mb-4">
                  <p className='fs_14 text_clr_76'>Receiving Account status</p>
                  <p className='fw-medium fs_14 text-black'>Active</p>
                </div>

                <div className="account_card_item mb-4">
                  <p className='fs_14 text_clr_76'>Routing ABA number</p>
                  <p className='fw-medium fs_14 text-black'>-</p>
                </div>
              </div>
            </div>

            <div className="account_card_content_middle">
              <div className="account_card_item mb-4">
                <p className='fs_14 text_clr_76'>Seller name</p>
                <p className='fw-medium fs_14 text-black'>USD</p>
              </div>

              <div className="account_card_item mb-4">
                <p className='fs_14 text_clr_76'>Seller address</p>
                <p className='fw-medium fs_14 text-black'>,</p>
              </div>

              <div className="account_card_item mb-4">
                <p className='fs_14 text_clr_76'>Seller email</p>
                <p className='fw-medium fs_14 text-black'></p>
              </div>

            </div>

            <div className="account_card_content_bottom">
              <div className="account_card_content_left">
                <div className="account_card_icon">
                  <PiClipboardTextBold className='fs-5' />
                </div>
                <div className='account_card_content'>
                  <h4 className='fs_18'>
                    Bank reference letter
                  </h4>
                  <p className='fs_14 m-0'>
                    Generate your bank reference letter.
                  </p>
                </div>
              </div>

              <div className="account_card_content_right">
                <button>Generate</button>
              </div>
            </div>

          </div>

        </div>

        <div className="account_card_right"></div>
      </div>
    </div>
  )
}

export default Account