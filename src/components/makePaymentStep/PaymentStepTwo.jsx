import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select'

const PaymentStepTwo = ({step,handleSelectFieldInputChange,handlePrevious,handleNext,handleInputChange,paymentFormData}) => {
  const [open,setOpen] = useState(false)
  const paymentCurrency = [
    { value: 'AUD', label: 'AUD' },
    { value: 'CAD', label: 'CAD' },
    { value: 'CNY', label: 'CNY' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'JPY', label: 'JPY' },
    { value: 'KRW', label: 'KRW' },
    { value: 'RUB', label: 'RUB' },
    { value: 'SGD', label: 'SGD' },
    { value: 'USD', label: 'USD' },
    { value: 'HKD', label: 'HKD' },
  ]
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
                BeneficiaryAccountNumber
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                ICBT BANK USA, N.A.
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
                  001-7-600123
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
              <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                Beneficiary bank location
              </label>
              <Select name='from' onChange={(selectedOption)=>handleSelectFieldInputChange(selectedOption.value, 'from')} id='bbl' options={paymentCurrency} placeholder={"United State"}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'white',
                    borderRadius: '0px'
                  }),
                }}
              />

            </div>
            <div className='parent'>

            <div onClick={()=>setOpen(!open)} className='from_dropdown p-2 d-flex  align-items-center justify-content-between'>
              <div className='from_left'>
                <p className='m-0'>
                  USD CombiNations Savings
                </p>

                <p className="d-flex align-items-center justify-content-between m-0">
                  <span>
                    001-7-600123
                  </span>

                  <span>
                    USD 45,265.83
                  </span>
                </p>
              </div>

              <div className="from_right">
                <IoIosArrowDown />
              </div>

            </div>
            <div className=' child'>

            {
              open && 
              [1,2,3,4,5].map((data,index)=>  <div key={index} className="border-0  from_dropdown p-2 d-flex  align-items-center justify-content-between">
              <div style={{width:"90%"}}>
                <p className='m-0'>
                  USD CombiNations Savings
                </p>

                <p className="d-flex align-items-center justify-content-between m-0">
                  <span>
                    001-7-600123
                  </span>

                  <span>
                    USD 45,265.83
                  </span>
                </p>
              </div>


            </div>)
            }
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
                    USD CombiNations Savings
                  </p>

                  <p className="d-flex align-items-center justify-content-between m-0">
                    <span>
                      001-7-600123
                    </span>

                    <span>
                      USD 45,265.83
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