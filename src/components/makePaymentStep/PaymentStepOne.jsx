import React, { useEffect, useState } from 'react'
import './MakePaymentStep.scss'
import Select from 'react-select'
import PaymentStepTwo from './PaymentStepTwo'
const options = [
  { value: 'AUD', label: 'Australia' },
  { value: 'CUD', label: 'Canada' },
  { value: 'CHI', label: 'China' },
  { value: 'FR', label: 'France' },
  { value: 'GER', label: 'Germany' },
  { value: 'JP', label: 'Japan' },
  { value: 'KR', label: 'Korea,Republic Of' },
  { value: 'SG', label: 'Singapore' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'USD', label: 'United States' },
  { value: 'HK', label: 'Hong Kong' },
]
const paymentCurrency = [
  { value: 'AUD', label: 'AUD' },
  { value: 'CAD', label: 'CAD' },
  { value: 'CNY', label: 'CNY' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'JPY', label: 'JPY' },
  { value: 'KRW', label: 'KRW' },
  { value: 'SGD', label: 'SGD' },
  { value: 'USD', label: 'USD' },
  { value: 'HKD', label: 'HKD' },
]

const PaymentStepOne = ({paymentFormData, setpaymentFormData,handlePrevious,step,handleNext,handleInputChange,handleFormSubmit,handleSelectFieldInputChange}) => {
 const [detailsStep,setDetailsStep] = useState(0)
 useEffect(() => {
  window.scrollTo(0, 0);
}, [detailsStep]);
 
  return (
    <>
    {
      detailsStep === 0 &&  <div className='paymentstep_one'>
      <div className='section_heading'>
        <h1 className='fw-medium'>
          Pay new individual or company
        
        </h1>
      </div>

      <div className="radio_btn_group">
        <form onSubmit={handleFormSubmit} className='d-flex align-items-center gap-5'>
          <p>
            <input onChange={handleInputChange} type="radio" id="radio_btn" name="individualOrCompany" defaultChecked />
            <label htmlFor="radio_btn">Account number</label>
          </p>

          <p className='cursor_disable'>
            <input onChange={handleInputChange} type="radio" id="radio_btn2" name="individualOrCompany" />
            <label htmlFor="radio_btn2">Email address</label>
          </p>

          <p className='cursor_disable'>
            <input onChange={handleInputChange} type="radio" id="radio_btn3" name="individualOrCompany" />
            <label htmlFor="radio_btn3">Phone number</label>
          </p>

          <p className='cursor_disable'>
            <input onChange={handleInputChange} type="radio" id="radio_btn4" name="individualOrCompany" />
            <label htmlFor="radio_btn4">FPS ID</label>
          </p>

        </form>
      </div>

      <div className="toggle_content_wrapper mb-5">
        <div className="tab_toggle_content">
          <div className="tab_content_box tcb_grid mb-4">
            <div className="left mb-4 mb-lg-0" style={{ width: '400px' }}>
              <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                Beneficiary bank location
              </label>
              <Select name='bankLocation' onChange={(selectedOption)=>handleSelectFieldInputChange(selectedOption.value, 'bankLocation')} id='bbl' options={options} placeholder={"United States"}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'white',
                    borderRadius: '0px'
                  }),
                }}
              />
            </div>
            <div className="right" style={{ width: '400px' }}>
              <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                Payment currency
              </label>
              <Select name='currency' onChange={(selectedOption)=>handleSelectFieldInputChange(selectedOption.value, 'currency')} id='bbl' options={paymentCurrency} placeholder={"USD"}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,

                    backgroundColor: 'white',
                    borderRadius: '0px'
                  }),
                }}
              />
            </div>
          </div>

          <div className="radio_btn_group">
            <form action="#" className='d-flex align-items-center gap-5'>
              <p>
                <input onChange={handleInputChange}  type="radio" id="radio_btn5" name="search" />
                <label htmlFor="radio_btn5">Search by keywords</label>
              </p>

              <p className='cursor_disable'>
                <input onChange={handleInputChange} type="radio" id="radio_btn6" name="search" />
                <label htmlFor="radio_btn6">Search by full bank code/SWIFT address</label>
              </p>
            </form>
          </div>

          <div className="tab_content_box tcb_grid tcb_white mb-4">
            <div className="left" style={{ width: '400px' }}>
             
              <div className="input_box mb-3">
                <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                  City
                </label>
              <div>
            <input onChange={handleInputChange} name='city' className='input_box_iban' type="text" id='beneficiaryIban' />
          </div>

        </div>
            </div>
            <div className="right" style={{ width: '400px', height: '170px' }}>
              <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                Bank name/SWIFT address
              </label>
      
              <input onChange={handleInputChange} name='bankName' className='input_box_iban' type="text" id='beneficiaryIban' />
            </div>
          </div>

          <div className="radio_btn_group">
            <form action="#" className='d-flex align-items-center gap-5'>
              <p>
                <input onChange={handleInputChange} type="radio" id="radio_btn8" name="localOrTelegraphic" />
                <label htmlFor="radio_btn8">Pay-as-locals</label>
              </p>

              <p className='cursor_disable'>
                <input onChange={handleInputChange} type="radio" id="radio_btn7" name="localOrTelegraphic" />
                <label htmlFor="radio_btn7">Telegraphic transfer</label>
              </p>
            </form>

            <p className='cursor_disable'>
              <input className="checkbox"
                type="checkbox"
                onChange={handleInputChange}
                disabled={true}
                id="checkbox-3"
                name="intermediary" />
              <label htmlFor="checkbox-3">
                Through intermediary bank
              </label>
            </p>
          </div>
        </div>
      </div>

      <form  className="create_account_title mb-5">
        <div className='mb-4'>
          <p className='fs-5 fw-medium' style={{ color: '#333' }}>
            Beneficiary details
          </p>
        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban" className='mb-2 fs_14'>
            Beneficiary account number / IBAN
          </label>

          <div>
            <input onChange={handleInputChange} name='iban' className='input_box_iban' type="text" id='beneficiaryIban' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban0" className='mb-2 fs_14'>
            Beneficiary name
          </label>

          <div>
            <input onChange={handleInputChange} name='beneficiaryName' className='input_box_iban' type="text" id='iban0' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban1" className='mb-2 fs_14'>
            Beneficiary address line 1
          </label>

          <div>
            <input onChange={handleInputChange} name='beneficiaryAddressLink1' className='input_box_iban' type="text" id='iban1' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban2" className='mb-2 fs_14'>
            Beneficiary address line 2
          </label>

          <div>
            <input onChange={handleInputChange} name='beneficiaryAddressLine2' className='input_box_iban' type="text" id='iban2' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban3" className='mb-2 fs_14'>
            Beneficiary address line 3
          </label>

          <div>
            <input onChange={handleInputChange} name='beneficiaryAddressLine3' className='input_box_iban' type="text" id='iban3' />
          </div>

        </div>
      </form>

      {/* <div className="note">
        <p className='fs_14'>
          Note
        </p>
        <ul>
          <li className='fs_14 mb-2'>
            With effect from 1 January 2021, any outward telegraphic transfer into mainland China will require the input of a SWIFT BIC code (also known as SWIFT code or SWIFT address) as bank beneficiary identifier. CNY payments with CNAPS code input will be rejected.
          </li>
          <li className='fs_14'>
            With effect from 1 January 2021, any outward telegraphic transfer into mainland China will require the input of a SWIFT BIC code (also known as SWIFT code or SWIFT address) as bank beneficiary identifier. CNY payments with CNAPS code input will be rejected.
          </li>
        </ul>
      </div> */}
      <div className='text-end'>

      {step < 3 && (
                <button 
                disabled={!paymentFormData.bankLocation || !paymentFormData.currency || !paymentFormData.city || !paymentFormData.bankName || !paymentFormData.iban || !paymentFormData.beneficiaryName || !paymentFormData.beneficiaryAddressLink1 || !paymentFormData.beneficiaryAddressLine2 || !paymentFormData.beneficiaryAddressLine3 } 
                onClick={()=>setDetailsStep(1)} className={`${(paymentFormData.bankLocation && paymentFormData.currency && paymentFormData.city &&paymentFormData.bankName && paymentFormData.iban && paymentFormData.beneficiaryName && paymentFormData.beneficiaryAddressLink1 && paymentFormData.beneficiaryAddressLine2 && paymentFormData.beneficiaryAddressLine3) && "active"} next-button mt-5 `} >
                    Next
                </button>
            )}
      </div>
    </div>
    }
    {
      detailsStep === 1 && <PaymentStepTwo setpaymentFormData={setpaymentFormData} handleSelectFieldInputChange={handleSelectFieldInputChange} step={step} handleNext={handleNext} handlePrevious={handlePrevious} paymentFormData={paymentFormData} handleInputChange={handleInputChange} />
    }
    </>
   
  )
}

export default PaymentStepOne