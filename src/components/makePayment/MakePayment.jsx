import React, { useState } from 'react';
import PaymentStepOne from '../makePaymentStep/PaymentStepOne';
import PaymentStepTwo from '../makePaymentStep/PaymentStepTwo';
import PaymentStepThree from '../makePaymentStep/PaymentStepThree';
import PaymentStepBtn from '../makePaymentStep/PaymentStepBtn';
import StepTracker from '../stepTracker/StepTracker';

const MakePayment = () => {
  const [paymentFormData, setpaymentFormData] = useState({})
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleInputChange = (e) => {
    setpaymentFormData({...paymentFormData,[e.target.name]:e.target.value})     
    };
    const handleSelectFieldInputChange =(selectedOption,key)=>{
      setpaymentFormData({...paymentFormData, [key]:selectedOption})
          }
    const handleFormSubmit = () => {
      event.preventDefault()
      console.log(paymentFormData); 
      
  };
  console.log(paymentFormData);
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PaymentStepOne paymentFormData={paymentFormData} handleInputChange={handleInputChange} handleSelectFieldInputChange={handleSelectFieldInputChange} handleFormSubmit={handleFormSubmit} step={step} handleNext={handleNext} />
      case 2:
        return <PaymentStepTwo step={step} handleNext={handleNext} handlePrevious={handlePrevious} paymentFormData={paymentFormData} handleInputChange={handleInputChange}  />
      case 3:
        return <PaymentStepThree step={step}  handlePrevious={handlePrevious} paymentFormData={paymentFormData} />;
      default:
        return null;
    }
  };

  return (

    <div className='overview main_content mt-3'>
      <StepTracker step={step} />
      {renderStepContent()}
      {/* <PaymentStepBtn handleNext={handleNext} handlePrevious={handlePrevious} step={step} /> */}
    </div>

  );
};

export default MakePayment;
