import React, { useEffect, useState } from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Alert from '../alert/Alert';
import './Account.scss';
import { PiClipboardTextBold } from "react-icons/pi";
import guideImage from '../../assets/guideImage.png'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineArrowDown } from 'react-icons/ai';
import AccountRequest from '../accountRequest/AccountRequest';
import { recevingData } from '../../data/RecevingData';

const Account = () => {
  const { id } = useParams();
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    const filteredData = recevingData.find((item) =>
      item.accountData.some((account) => account.id.toString() === id)
    );
    
    if (filteredData) {
      const selectedAccount = filteredData.accountData.find(
        (account) => account.id.toString() === id
      );
      setAccountData(selectedAccount);
    }
  }, [id]);
  
  return (
    <div className='create_account main_content mt-3 '>
      <Link style={{cursor:"pointer",textDecoration:"none"}} to="/" className='section_heading'>
        <h1>
          <MdOutlineArrowBackIosNew /> | {accountData?.accountNickName}
        </h1>
      </Link>

      {/* <Alert /> */}

      <div className="account_card">
        <div className="account_card_left">
          <div className="account_card_head">
            <p className='d-flex align-items-center m-0 gap-2'>
              <span>

              {accountData?.accountNickName}| {accountData?.accountNumber}
              </span>
              <span>
                <svg width={"15px"} className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 iXVZXJ ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-labelledby="title-icon-716 " role="img" data-testid="NewModalIcon" data-id="Icon" fill="#fff"><title id="title-icon-716">copy13252222011039</title><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M11.8 15.8H2.2V6.2h2.6V5H1v12h12v-3.8h-1.2v2.6zm4-5H7.2V2.2H10V1H6v11h11V8h-1.2v2.8zm-4.34-3.412l4.34-4.34v3.808l1.2-1.2V1h-4.657l-1.199 1.199h3.809L10.612 6.54l.848.848z"></path></svg>
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
                  <p className='fw-medium fs_14 text-black'>{accountData?.currency}</p>
                </div>

                <div className="account_card_item mb-4">
                  <p className='fs_14 text_clr_76'>Bank name</p>
                  <p className='fw-medium fs_14 text-black'>CITI Bank, NA, Hong Kong Branch</p>
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
                <p className='fw-medium fs_14 text-black'>{accountData?.currency}</p>
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

        {/* <div className="account_card_right">
          <div className="card">
            <img src={guideImage} className="card-img-top" alt="image" />
            <div className="card-body">
              <h5 className="card-title">
                How do I link my Receiving Account to e-marketplace?
              </h5>
              <p className="card-text">
                Link my account to e-marketplace for collection
              </p>
              <div className='d-flex align-items-center justify-content-end'>
                <Link className='text-decoration-none' href="#">Click here <IoIosArrowForward /></Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div>
        <div className="section_title_wrapper mt-5">
          <div className="section_title d-flex align-items-center justify-content-between">
            <h5 className='fs-5 fw-medium'>
              ICBT Global Wallet Receiving Account list
            </h5>
          </div>
        </div>

        <div className="filter_btn d-flex justify-content-between mb-4">
          <div className="filter_btn_left d-flex flex-wrap align-items-center gap-3">

            <div className="search_filter">
              <input type="text" placeholder='Search by Receiving Account name or number' />
            </div>

            <div className="filter_btn">
              <button>
                <GiSettingsKnobs />
                Filter
                <IoIosArrowDown />

              </button>
            </div>


          </div>
        </div>

        <div className="account_request">
          <div className="account_request_wrapper">
            <div className="account_request_table_box">
              <div className="table_wrapper">
                <div className="table_controller">
                  <table className='main_table'>
                    <caption className='table_caption'></caption>

                    <thead className='table_head'>
                      <tr className='table_row'>
                        <th className='table_head_one ' style={{ width: '120px' }}>
                          <div className='table_head_title'>
                            <button>
                              Bank reference
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '200px' }}>
                          <div className='table_head_title'>
                            <button>
                              Transaction description
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '160px' }}>
                          <div className='table_head_title'>
                            <button>
                              Payer Name
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '200px' }}>
                          <div className='table_head_title'>
                            <button>
                              Transaction type
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '200px' }}>
                          <div className='table_head_title'>
                            <button>
                              Value date
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '120px' }}>
                          <div className='table_head_title'>
                            <button>
                              Amount
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '120px' }}>
                          <div className='table_head_title'>
                            <button>
                              Status
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '120px' }}>
                          <div className='table_head_title'>
                            <button>
                              Value date
                            </button>
                          </div>
                        </th>

                        <th className='table_head_one ' style={{ width: '120px' }}>
                          <div className='table_head_title'>
                            <button>
                              Action
                            </button>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className='table_body'>

                      <tr className='table_row'>
                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              QPSGGGGGGAZV
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              BENM/gcvdshgcd/EREF/086562I01FCF
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              EBAY Commerce Ltd
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Transfer
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                            {accountData?.currency} 80.00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Pending
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022 12:00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              View detail
                            </p>
                          </span>
                        </td>

                      </tr>

                      <tr className='table_row'>
                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              QPSGGGGGGAZV
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              BENM/gcvdshgcd/EREF/086562I01FCF
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              EBAY Commerce Ltd
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Transfer
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                            {accountData?.currency} 80.00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Pending
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022 12:00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              View detail
                            </p>
                          </span>
                        </td>

                      </tr>

                      <tr className='table_row'>
                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              QPSGGGGGGAZV
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              BENM/gcvdshgcd/EREF/086562I01FCF
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              EBAY Commerce Ltd
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Transfer
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                            {accountData?.currency} 80.00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Pending
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022 12:00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              View detail
                            </p>
                          </span>
                        </td>

                      </tr>

                      <tr className='table_row'>
                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              QPSGGGGGGAZV
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              BENM/gcvdshgcd/EREF/086562I01FCF
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              EBAY Commerce Ltd
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Transfer
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                            {accountData?.currency} 80.00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Pending
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022 12:00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              View detail
                            </p>
                          </span>
                        </td>

                      </tr>

                      <tr className='table_row'>
                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              QPSGGGGGGAZV
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              BENM/gcvdshgcd/EREF/086562I01FCF
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              EBAY Commerce Ltd
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Transfer
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                            {accountData?.currency} 80.00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Pending
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022 12:00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              View detail
                            </p>
                          </span>
                        </td>

                      </tr>

                      <tr className='table_row'>
                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              QPSGGGGGGAZV
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              BENM/gcvdshgcd/EREF/086562I01FCF
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              EBAY Commerce Ltd
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Transfer
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                            {accountData?.currency} 80.00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              Pending
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              20/01/2022 12:00
                            </p>
                          </span>
                        </td>

                        <td className='table_data'>
                          <span className='table_text'>
                            <p className='m-0'>
                              View detail
                            </p>
                          </span>
                        </td>

                      </tr>


                    </tbody>

                  </table>
                </div>

              </div>

              <div className='d-flex align-items-center justify-content-between mt-4'>
                <div>
                  <p className='fs_12 fw-normal text_clr_ee m-0'>Total request(s): </p>
                </div>
                <div className='d-flex gap-3  align-items-center'>
                  <span>page</span>
                  <select style={{ width: '90px', height: '50px' }} className='d-flex align-items-center px-2' name="" id="">
                    <option value="1">1</option>
                    <option value="1">2</option>
                  </select>
                  of 1
                  <div className='d-flex'>
                    <div className='d-flex align-items-center justify-content-center border p-3'>
                      <MdOutlineKeyboardArrowLeft />
                    </div>
                    <div className='d-flex align-items-center justify-content-center border p-3'>
                      <MdOutlineKeyboardArrowRight />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Account