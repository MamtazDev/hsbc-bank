import React from 'react'
import './StepTracker.scss'

const StepTracker = ({ step }) => {
    return (
        <div className='steps-container'>
        
            <div className={`steps ${step === 1 && "active"}`}>
                <span>Payment details</span>
            </div>
            <div className={`steps ${step === 2 && "active"}`}>
                <span>Preview</span>
            </div>
            <div className={`steps ${step === 3 && "active"}`}>
                <span>Acknowledgement</span>
            </div>
        </div>
    )
}

export default StepTracker