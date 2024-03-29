import React, { useContext } from 'react'
import './AccountRequest.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FormContext } from '../../context/FormDataContext';


const AccountRequest = ({formattedDate}) => {
    const { formData, setFormData } = useContext(FormContext);
  
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
                                               
                                                    Currency
                                              </div>
                                        </th>
                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                           
                                                    Receiving Account nickname
                                              
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '160px' }}>
                                            <div className='table_head_title'>
                                           
                                                    Request status
                                          
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                         
                                                    Last update date
                                            
                                            </div>
                                        </th>
                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                              
                                                    Request reference number
                                           
                                            </div>
                                        </th>


                                        <th className='table_head_one ' style={{ width: '120px' }}>
                                            <div className='table_head_title'>
                                                    Action
                                           
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className='table_body'>
                                    {
                                    !( Object.keys(formData).length === 0  )  && 
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
                                                   {formattedDate}
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
                                    }

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
                                                    MBVAC20220617171943143042
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
                                                    MBVAC20220617171943143043
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
                                                    MBVAC20220617171943143044
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
                                                    MBVAC20220617171943143045
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