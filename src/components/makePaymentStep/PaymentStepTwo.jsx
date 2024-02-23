import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select'
import CustomOption from './CustomOption';

const PaymentStepTwo = ({step,handleSelectFieldInputChange, setpaymentFormData, handlePrevious,handleNext,handleInputChange,paymentFormData}) => {
  const [show,setShow] = useState(false)
  const paymentCurrency = [
    { value: 'EUR', label: 'EUR' ,an:"001-7-600123",amount:"11,057.00"},
    { value: 'GBP', label: 'GBP' ,an:"001-7-600124",amount:"230,721.00"},
    { value: 'USD', label: 'USD',an:"001-7-600125",amount:"326,678.00" },
    { value: 'HKD', label: 'HKD',an:"001-7-600126" ,amount:"167,990.00"},
  ]
  const handleChange = (selectedOption) => {
    if (selectedOption) {
      handleSelectFieldInputChange(selectedOption.value, 'from');
    }
  };

  const [dropDownState, setDropDownState] =useState({
    title:"Select an  account",
    date:"",
    amount:""
  })

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDateTime = new Date();
      setCurrentDate(newDateTime);
    }, 1000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  // Format the date as "DD/MM/YY"
  const formattedDate = currentDate.toLocaleDateString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit' });
  return (
    <div className='paymentstep_two'>
      <div className="paymentstep_two_wrapper">
        <div className="paymentstep_two_details pe-5">

          <div className="">
            <h3 className='fw-medium fs_18'>
              Pay new individual or company
            </h3>

            <div className="payment_info">
              <p className='fw-normal fs_14 text_clr_black_33'>
                {paymentFormData.selectedBeneficiary}
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                {paymentFormData.beneficiaryName}
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                {paymentFormData.beneficiaryAddressLink1}
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                {paymentFormData.beneficiaryAddressLine2}
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                {paymentFormData.beneficiaryAddressLine3}
              </p>
           
              <p className='fw-normal fs_14 text_clr_black_33'>
              {paymentFormData.bankName}
              </p>
            </div>

            <div className="payment_info_list d-flex align-items-center justify-content-between">
              <div className="left">
                <p className='fw-normal fs_14 text_clr_black_33'>
                  From
                </p>
              </div>

              <div className="right">
                <p className='fw-normal fs_14 text_clr_black_33'>
                  001-7-600120
                </p>
              </div>
            </div>

            <div className="payment_info_list d-flex align-items-center justify-content-between">
              <div className="left">
                <p className='fw-normal fs_14 text_clr_black_33'>
                  Amount
                </p>
              </div>

              <div className="right">
                <p className='fw-normal fs_14 text_clr_black_33'>
                {paymentFormData.from} {paymentFormData.amountAUD}
                </p>
              </div>
            </div>

            <div className="payment_info_list d-flex align-items-center justify-content-between">
              <div className="left">
                <p className='fw-normal fs_14 text_clr_black_33'>
                  Payment date
                </p>
              </div>

              <div className="right">
                <p className='fw-normal fs_14 text_clr_black_33'>
                {formattedDate}
                </p>
              </div>
            </div>
          </div>

          <button className='edit_btn'>Edit</button>
        </div>

        <div className="paymentstep_two_information ps-5">
          <div className="from_info">
            <h3 className='fw-bold fs-5 mb-3'>
              From
            </h3>
            <div className="left mb-4 mb-lg-0" style={{ width: '400px' }}>
             
              {/* <Select name='from' onChange={handleChange} options={paymentCurrency}  
              components={{ Option: CustomOption }}    placeholder={<CustomOption/>}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'white',
                    borderRadius: '0px'
                  }),
                
                }}
              /> */}
              <div className='parent'>

              {/* ---------------------**********************_____________ */}


<div onClick={()=>setShow(!show)} className='from_dropdown p-2 d-flex  align-items-center justify-content-between'>

<div className='from_left'>
  <p className='m-0'>
    {dropDownState.title}
  </p>

  <p className="d-flex align-items-center justify-content-between m-0">
    <span>
     {dropDownState.accountNumber}
    </span>

    <span>
     {dropDownState.amount}
    </span>
  </p>
</div>

<div className="from_right">
  <IoIosArrowDown />
</div>

</div>
<div className='child'>

{
  show && paymentCurrency.map((data,index)=><CustomOption paymentFormData={paymentFormData} setpaymentFormData={setpaymentFormData} show={show} setShow={setShow} setDropDownState={setDropDownState} key={index} data={data}></CustomOption>) 
}
</div>

{/* ---------------------**********************_____________ */}

              </div>




            </div>
            

          
          </div>

          <div className="amount_info paymentstep_two_border">
            <h3 className='fw-bold fs-5 mt-5 mb-3'>
              Amount
            </h3>

            <div className="amount_info_input">
              <span>
                {paymentFormData?.from}
              </span>
              <input onChange={handleInputChange} name='amountAUD' type="text" placeholder='0.00' />
            </div>
          </div>

          <div className="pament_date paymentstep_two_border">
            <div className='paymentstep_heading mt-5 mb-3 '>
              <h3 className='fw-bold fs-5 '>
                Payment date
              </h3>
            
            </div>

            <div className='from_dropdown p-2 d-flex  align-items-center justify-content-between cursor_disable'>

              <div className='from_left'>
                <p className='m-0'>
            
                  {formattedDate}
                </p>
              </div>

              <div className="from_right">
                <CiCalendarDate />
              </div>

            </div>
          </div>

          <div className="who_pays paymentstep_two_border">
            <div className='paymentstep_heading mt-5 mb-3 d-flex align-items-center justify-content-between'>
              <h3 className='fw-bold fs-5 '>
                Who pays local / overseas charges
              </h3>
              <Link className='text-decoration-none text_clr_black_33 cursor_disable'>
                View charges <IoIosArrowForward />
              </Link>
            </div>

            <div className="amount_info_input">
              <div className="radio_btn_group">
                <form action="#" className=''>
                  <p>
                    <input onChange={handleInputChange} type="radio" id="radio_btn" name="payCharge" defaultChecked />
                    <label htmlFor="radio_btn">
                      We pay local bank charges, the beneficiary pays overseas bank charges.
                    </label>
                  </p>

                  <p>
                    <input onChange={handleInputChange} type="radio" id="radio_btn2" name="payCharge" />
                    <label htmlFor="radio_btn2">
                      We pay all bank charges.
                    </label>
                  </p>

                  <p>
                    <input onChange={handleInputChange} type="radio" id="radio_btn3" name="payCharge" />
                    <label htmlFor="radio_btn3">
                      The beneficiary pays all bank charges.
                    </label>
                  </p>

                </form>
              </div>


              <h3 className='fw-normal fs_14 fs-5'>
                Deduct charges from
              </h3>

              <div className='from_dropdown p-2 d-flex  align-items-center justify-content-between'>

                <div className='from_left'>
                  <p className='m-0'>
                    {paymentFormData.from} Current account
                  </p>

                  <p className="d-flex align-items-center justify-content-between m-0">
                    <span>
                      {paymentFormData.accountNumber}
                    </span>

                    <span>
                    {paymentFormData.from}{paymentFormData.amount}
                    </span>
                  </p>
                </div>

                <div className="from_right">
                  <IoIosArrowDown />
                </div>

              </div>

            </div>
          </div>

          <div className="ordering_perty paymentstep_two_border">
            <div className='paymentstep_heading mt-5 mb-3 d-flex align-items-center justify-content-between'>
              <h3 className='fw-bold fs-5 '>
                Ordering party
              </h3>
            </div>

            <div className="radio_btn_group">
              <h3 className='fw-normal fs_14 fs-5'>
                Is this payment being made on behalf of a third party (ordering party)?
              </h3>
              <form action="#" className=''>
                <p>
                  <input onChange={handleInputChange} type="radio" id="radio_btn1" name="thirdParty" defaultChecked />
                  <label htmlFor="radio_btn1">
                    Yes
                  </label>
                </p>

                <p>
                  <input onChange={handleInputChange}  type="radio" id="radio_btn22" name="thirdParty" />
                  <label htmlFor="radio_btn22">
                    No
                  </label>
                </p>

              </form>
            </div>

          </div>

          <div className="accordion_payment">
            <Accordion className='mt-4'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Message (Optional)</Accordion.Header>
                <Accordion.Body>
                  <h3 className='fw-normal fs_14 fs-5'>
                    Message to beneficiary
                  </h3>
                  <textarea onChange={handleInputChange} name="messageBeneficiary" cols="30" rows="5"></textarea>
                  <h3 className='fw-normal fs_14 fs-5'>
                    Message to beneficiary Bank
                  </h3>
                  <textarea onChange={handleInputChange} name="messageBenificiaryBank" cols="30" rows="5"></textarea>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Send e-Advice to beneficiary (Optional)
                </Accordion.Header>
                <Accordion.Body>

                  <h3 className='fw-normal fs_14 fs-5 mb-3'>
                    You may request us to send an email to the above beneficiary and/or other related business partners notifying them you have sent funds to the beneficiary. A charge of HKD1 per email will be debited from the account you specified above. If 'Business Integrated Account' is selected, the charge will be debited from your HKD savings account. You can request a maximum of four emails.
                  </h3>

                  <div className="email_address mb-3">
                    <h3 className='fw-normal fs_14 fs-5'>
                      Email address
                    </h3>
                    <input type="email" onChange={handleInputChange} name="messageEmail"/>
                  </div>


                  <div className="refarance mb-3">
                    <h3 className='fw-normal fs_14 fs-5'>
                      Reference
                    </h3>
                    <textarea onChange={handleInputChange} name="reference" cols="30" rows="5"></textarea>
                  </div>

                  <div className="return_email mb-3">
                    <h3 className='fw-normal fs_14 fs-5'>
                      Return email address if e-Advice fails to send
                    </h3>
                    <input type="email" onChange={handleInputChange} name='messageEmailAgain'/>
                  </div>

                  <div className="message_recipet mb-3">
                    <h3 className='fw-normal fs_14 fs-5'>
                      Message to recipient
                    </h3>
                    <textarea onChange={handleInputChange} name="recipient"  cols="30" rows="5"></textarea>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>

        </div>
      </div>
      <div className="button-container">
            {step > 1 && (
                <button onClick={handlePrevious} className="previous-button">
                    Previous
                </button>
            )}
            {step < 3 && (
                <button disabled={!paymentFormData.amountAUD } onClick={handleNext} 
                className={`${ paymentFormData.amountAUD && "active"} next-button`} >
                    Next
                </button>
            )}
        </div>
    </div>
  )
}

export default PaymentStepTwo