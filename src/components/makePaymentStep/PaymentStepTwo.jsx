import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'USD', label: 'United State' },
  { value: 'AUD', label: 'Australia' },
  { value: 'CUD', label: 'Canada' }
]


const PaymentStepTwo = () => {
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
                BeneficiaryName
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                BeneficiaryAddress1
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                BeneficiaryAddress2
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                BeneficiaryAddress3
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                BeneficiaryAccountNumber
              </p>
              <p className='fw-normal fs_14 text_clr_black_33'>
                HSBC BANK USA, N.A.
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
                  USD 0.00
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
                  17/10/2023
                </p>
              </div>
            </div>
          </div>

          <button className='edit_btn'>Edit</button>
        </div>

        <div className="paymentstep_two_information ps-5">
          <h3 className='fw-bold fs-5'>
            From
          </h3>

          <div className='from_dropdown p-3'>
            <div className='from_left'>
              <p>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentStepTwo