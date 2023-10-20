import React from 'react'
import './StepTracker.scss'

const StepTracker = ({ step }) => {
    return (
        <div class='steps-container'>
            <div class={`steps ${step === 1 && "active"}`}>
                <span>Step</span>
            </div>
            <div class={`steps ${step === 2 && "active"}`}>
                <span>Step</span>
            </div>
            <div class={`steps ${step === 3 && "active"}`}>
                <span>Step</span>
            </div>
        </div>
    )
}

export default StepTracker