import React from 'react'


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
                                        <th className='table_head_one active' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Receiving Account nickname
                                                </button>
                                            </div>
                                        </th>

                                        <th className='table_head_one active' style={{ width: '200px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Receiving Account Number
                                                </button>
                                            </div>
                                        </th>

                                        <th className='table_head_one active' style={{ width: '120px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Currency
                                                </button>
                                            </div>
                                        </th>

                                        <th className='table_head_one active' style={{ width: '160px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Status
                                                </button>
                                            </div>
                                        </th>

                                        <th className='table_head_one active' style={{ width: '120px' }}>
                                            <div className='table_head_title'>
                                                <button>
                                                    Action
                                                </button>
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
                                                        <p className='m-0'>
                                                            {accountDataInfo.accountAction}
                                                        </p>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails