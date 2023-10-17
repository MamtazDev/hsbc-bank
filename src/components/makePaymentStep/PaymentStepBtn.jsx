import React from 'react'
// import './PaymentStepBtn.scss' 

const PaymentStepBtn = ({ handleNext, handlePrevious, step }) => {

    return (
        <div className="button-container">
            {step > 1 && (
                <button onClick={handlePrevious} className="previous-button">
                    Previous
                </button>
            )}
            {step < 3 && (
                <button onClick={handleNext} className="next-button">
                    Next
                </button>
            )}
        </div>
    )
}

export default PaymentStepBtn