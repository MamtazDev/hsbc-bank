import React from 'react'
import './AccountRequest.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useFormData } from '../../context/FormDataContext';

const AccountRequest = () => {
    const { formData, setFormData } = useFormData();
    return (
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
                                                    Currency
                                                </button>
                                            </div>
                                        </th>
                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Receiving Account nickname
                                                </button>
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '160px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Request status
                                                </button>
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Last update date
                                                </button>
                                            </div>
                                        </th>
                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Request reference number
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
                                                    USD
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    TCL head Store1
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
                                                    17 Jun 2022
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    MBVAC20220617171943143041
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
                                                    USD
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    TCL head Store1
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
                                                    17 Jun 2022
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    MBVAC20220617171943143041
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
                                                    USD
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    TCL head Store1
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
                                                    17 Jun 2022
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    MBVAC20220617171943143041
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
                                                    USD
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    TCL head Store1
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
                                                    17 Jun 2022
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    MBVAC20220617171943143041
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
                                                    {formData.currency}
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                           {formData.receivingAccountNickname}
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
                                                    17 Jun 2022
                                                </p>
                                            </span>
                                        </td>

                                        <td className='table_data'>
                                            <span className='table_text'>
                                                <p className='m-0'>
                                                    MBVAC20220617171943143041
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
                            <select style={{ width: '90px', height: '50px'}} className='d-flex align-items-center px-2' name="" id="">
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
    )
}

export default AccountRequest