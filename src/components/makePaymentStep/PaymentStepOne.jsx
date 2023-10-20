import React, { useState } from 'react'
import './MakePaymentStep.scss'
import Select from 'react-select'
const options = [
  { value: 'USD', label: 'United State' },
  { value: 'AUD', label: 'Australia' },
  { value: 'CUD', label: 'Canada' }
]

const PaymentStepOne = () => {
  const [beneficiaryData, setBeneficiaryData] = useState([]);
  const handleForm = () => {

  }

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setBeneficiaryData((prevData) => {
      const newData = [...prevData];
      const index = newData.findIndex((item) => item.field === field);

      if (index !== -1) {
        newData[index] = { field, value };
      } else {
        newData.push({ field, value });
      }

      return newData;
    });

    // Store the updated data in localStorage
    localStorage.setItem('beneficiaryData', JSON.stringify(beneficiaryData));
  };
  return (
    <div className='paymentstep_one'>
      <div className='section_heading'>
        <h1 className='fw-medium'>
          Pay new individual or company
          <span className='fs_14 ps-2'>
            (Demo version)
          </span>
        </h1>
      </div>

      <div className="radio_btn_group">
        <form action="#" className='d-flex align-items-center gap-5'>
          <p>
            <input type="radio" id="radio_btn" name="radio-group" defaultChecked />
            <label htmlFor="radio_btn">Account number</label>
          </p>

          <p className='cursor_disable'>
            <input type="radio" id="radio_btn2" name="radio-group" />
            <label htmlFor="radio_btn2">Email address</label>
          </p>

          <p className='cursor_disable'>
            <input type="radio" id="radio_btn3" name="radio-group" />
            <label htmlFor="radio_btn3">Phone number</label>
          </p>

          <p className='cursor_disable'>
            <input type="radio" id="radio_btn4" name="radio-group" />
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
              <Select id='bbl' options={options} placeholder={"United State"}
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
              <Select id='bbl' options={options} placeholder={"United State"}
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
                <input type="radio" id="radio_btn5" name="radio-group" />
                <label htmlFor="radio_btn5">Search by keywords</label>
              </p>

              <p className='cursor_disable'>
                <input type="radio" id="radio_btn6" name="radio-group" />
                <label htmlFor="radio_btn6">Search by full bank code/SWIFT address</label>
              </p>
            </form>
          </div>

          <div className="tab_content_box tcb_grid tcb_white mb-4">
            <div className="left" style={{ width: '400px' }}>
              <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                City
              </label>
              <Select id='bbl' options={options} placeholder={"United State"}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'white',
                    borderRadius: '0px'
                  }),
                }}
              />
            </div>
            <div className="right" style={{ width: '400px', height: '170px' }}>
              <label htmlFor='bbl' className='fs_14 text_clr_black_33'>
                Bank name/SWIFT address
              </label>
              <Select id='bbl' options={options} placeholder={"United State"}
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
                <input type="radio" id="radio_btn8" name="radio-group" />
                <label htmlFor="radio_btn8">Pay-as-locals</label>
              </p>

              <p className='cursor_disable'>
                <input type="radio" id="radio_btn7" name="radio-group" />
                <label htmlFor="radio_btn7">Telegraphic transfer</label>
              </p>
            </form>

            <p className='cursor_disable'>
              <input className="checkbox"
                type="checkbox"
                disabled={true}
                id="checkbox-3"
                name="checkbox" />
              <label htmlFor="checkbox-3">
                Through intermediary bank
              </label>
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleForm} className="create_account_title mb-5">
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
            <input className='input_box_iban' type="text" id='iban' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban0" className='mb-2 fs_14'>
            Beneficiary name
          </label>

          <div>
            <input className='input_box_iban' type="text" id='iban0' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban1" className='mb-2 fs_14'>
            Beneficiary address line 1
          </label>

          <div>
            <input className='input_box_iban' type="text" id='iban1' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban2" className='mb-2 fs_14'>
            Beneficiary address line 2
          </label>

          <div>
            <input className='input_box_iban' type="text" id='iban2' />
          </div>

        </div>

        <div className="input_box mb-3">
          <label htmlFor="iban3" className='mb-2 fs_14'>
            Beneficiary address line 3
          </label>

          <div>
            <input className='input_box_iban' type="text" id='iban3' />
          </div>

        </div>
      </form>

      <div className="note">
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
      </div>

    </div>
  )
}

export default PaymentStepOne