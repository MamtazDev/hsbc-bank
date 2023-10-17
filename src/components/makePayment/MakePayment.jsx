import React, { useState } from 'react';
import PaymentStepOne from '../makePaymentStep/PaymentStepOne';
import PaymentStepTwo from '../makePaymentStep/PaymentStepTwo';
import PaymentStepThree from '../makePaymentStep/PaymentStepThree';
import PaymentStepBtn from '../makePaymentStep/PaymentStepBtn';

const MakePayment = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PaymentStepOne />
      case 2:
        return <PaymentStepTwo />
      case 3:
        return <PaymentStepThree />;
      default:
        return null;
    }
  };

  // const calculateProgressBarWidth = () => {
  //   // Calculate the width of the progress bar based on the current step
  //   return ((step - 1) / 2) * 100 + '%';
  // };

  return (

    <div className='overview main_content mt-3'>
      {/* <div className="progress">
        <div className="progress-bar" style={{ width: calculateProgressBarWidth() }}></div>
      </div> */}
      {renderStepContent()}
      <PaymentStepBtn handleNext={handleNext} handlePrevious={handlePrevious} step={step} />
    </div>

  );
};

export default MakePayment;
