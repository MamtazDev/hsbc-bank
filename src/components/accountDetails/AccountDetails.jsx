import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";


const AccountDetails = ({ accountData }) => {
    return (
        <div className="account_details">
            <div className="account_details_wrapper_box">
                <div className="account_details_table_box">
                    <div className="table_wrapper">
                        <div className="table_controller">
                            <table className='main_table'>
                                <caption className='table_caption'></caption>

                                <thead className='table_head'>
                                    <tr className='table_row'>
                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                          
                                                    Receiving Account nickname
                                           
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                         
                                                    Receiving Account Number
                                            
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '120px' }}>
                                            <div className='table_head_title'>
                                           
                                                    Currency
                                             
                                            </div>
                                        </th>

                                        <th className='table_head_one ' style={{ width: '160px' }}>
                                            <div className='table_head_title'>
                                           
                                                    Status
                                          
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
                                        accountData.map((accountDataInfo, index) => (
                                            <tr className='table_row' key={index}>
                                                <td className='table_data'>
                                                    <span className='table_text'>
                                                        <p className='m-0'>
                                                            {accountDataInfo.accountNickName}
                                                        </p>
                                                    </span>
                                                </td>

                                                <td className='table_data'>
                                                    <span className='table_text'>
                                                        <p className='m-0'>
                                                            {accountDataInfo.accountNumber}
                                                        </p>
                                                    </span>
                                                </td>

                                                <td className='table_data'>
                                                    <span className='table_text'>
                                                        <p className='m-0'>
                                                            {accountDataInfo.currency}
                                                        </p>
                                                    </span>
                                                </td>

                                                <td className='table_data'>
                                                    <span className='table_text'>
                                                        <p className='m-0'>
                                                            {accountDataInfo.accountStatus}
                                                        </p>
                                                    </span>
                                                </td>

                                                <td className='table_data'>
                                                    <span className='table_text'>
                                                        <Link to={`/account/${accountDataInfo.id}`} className='text-decoration-none text-black m-0'>
                                                            {accountDataInfo.accountAction}
                                                        </Link>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                

                    <div className='text-end mt-3'>

<button className='bg-transparent border-0'>Show all <IoIosArrowDown/></button>
</div>

                </div>
            </div>
        </div>
    )
}

export default AccountDetails