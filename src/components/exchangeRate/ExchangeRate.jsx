import React from 'react'
import './ExchangeRate.scss'
import Select from 'react-select'


const options = [
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
  { value: 'AUD', label: 'AUD' }
]

const ExchangeRate = () => {
  return (
    <div className='overview main_content mt-3'>
      <div className='section_heading'>
        <h1>
          Overview
        </h1>
      </div>

      <div className="create_account_title mb-5">
        <p className='fs-5 fw-medium m-0' style={{ color: '#333', }}>
          Quick quote
        </p>
        <h6 className='fs-12  fw-300'>
          The rates shown are indicative only and may fluctuate in accordance with market conditions.
        </h6>
      </div>

      <div className="create_account_form border-bottom pb-3">
        <div className="create_account_box">
          <div className="create_account_input">
            <Select options={options} placeholder={"USD"}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: '200px',
                  backgroundColor: 'transparant',
                  borderRadius: '0px',
                  borderColor: '#767676;',
                  borderRight: '0'
                }),
              }}
            />
          </div>
          <div className="create_account_input">
            <input className='ca_input' type="number"  />
          </div>
        </div>

        <div className="create_account_box">
          <div className="create_account_input">
            <Select options={options} placeholder={"USD"}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: '200px',
                  backgroundColor: 'transparant',
                  borderRadius: '0px',
                  borderColor: '#767676;',
                  borderRight: '0'
                }),
              }}
            />
          </div>
          <div className="create_account_input">
            <input className='ca_input' type="number" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default ExchangeRate