import React, { useEffect, useState } from 'react'
import './Overview.scss'
import { Link } from 'react-router-dom'
import Alert from '../alert/Alert'
import WalletList from '../walletList/WalletList'
import RecevingAccountList from '../recevingAccountList/RecevingAccountList'

const Overview = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        const newDateTime = new Date();
        setDateTime(newDateTime);
      }, 1000);
  
      // Clear the interval when the component unmounts to prevent memory leaks
      return () => clearInterval(intervalId);
    }, []);
  
    // Format the date as "dd MMM, yyyy"
    const formattedDate = dateTime.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  
    const timeString = dateTime.toLocaleTimeString();
  
    return (
        <div className='overview main_content mt-3'>
            <div className='section_heading'>
                <h1>
                    Overview
                </h1>
            </div>
            {/* <Alert /> */}
            <WalletList formattedDate={formattedDate} timeString={timeString} />
            <RecevingAccountList formattedDate={formattedDate} timeString={timeString} />
        </div>
    )
}

export default Overview