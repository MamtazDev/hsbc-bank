import React from 'react'
import { Link } from 'react-router-dom'


const Alert = () => {
    return (
        <div className='alert_box d-flex align-items-center gap-2'>
            <span>
                <svg width="20px" focusable="false" viewBox="0 0 18 18" aria-labelledby="title-icon-83 " role="img" data-testid="StatusWarningLightIcon" data-id="Icon" fill="currentColor"><title id="title-icon-83">warning</title><path fill="none" d="M0 0h18v18H0z"></path><circle cx="9" cy="9" r="9" fill="#fb3"></circle><circle cx="9" cy="13" r="1.2"></circle><path d="M8.1 3.8h1.8v6H8.1z"></path></svg>
            </span>

            <p className='m-0'>
                You have 7 pending inward payment(s). Please supplement payer details to complete the payment(s).
                <Link>
                    Click here
                </Link>
            </p>

        </div>
    )
}

export default Alert