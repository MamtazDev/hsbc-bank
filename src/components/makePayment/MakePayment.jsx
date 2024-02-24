import React, { useEffect, useState } from 'react';
import PaymentStepOne from '../makePaymentStep/PaymentStepOne';
import PaymentStepTwo from '../makePaymentStep/PaymentStepTwo';
import PaymentStepThree from '../makePaymentStep/PaymentStepThree';
import PaymentStepBtn from '../makePaymentStep/PaymentStepBtn';
import StepTracker from '../stepTracker/StepTracker';
import { useLocation } from 'react-router-dom';

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
      
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

 
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PaymentStepOne setpaymentFormData={setpaymentFormData} paymentFormData={paymentFormData} handlePrevious={handlePrevious} handleInputChange={handleInputChange} handleSelectFieldInputChange={handleSelectFieldInputChange} handleFormSubmit={handleFormSubmit} step={step} handleNext={handleNext} />
      case 2:
        return  <PaymentStepThree handleNext={handleNext} step={step}  handlePrevious={handlePrevious} paymentFormData={paymentFormData} />;
      case 3:
        return <PaymentStepThree step={step} setStep={setStep} setpaymentFormData={setpaymentFormData}  handlePrevious={handlePrevious} paymentFormData={paymentFormData} />;
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
