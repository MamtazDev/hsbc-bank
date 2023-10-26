import React, { useState } from 'react'
import './ExchangeRate.scss'
import Select from 'react-select'
import { HiBellAlert } from "react-icons/hi2";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { convertCurrency } from '../../utils/functionalities';

const options = [
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
  { value: 'AUD', label: 'AUD' }
]

const ExchangeRate = () => {
  const [exChangeCurrencyProperties, setExChangeCurrencyProperties]=useState({
    baseCurrency: "USD",
    baseCurrencyValue: "0",
    currency:"AUD",
    currencyValue:"0"
  })

  const handleBaseCurrencyChange=async(selectedOption)=>{
    setExChangeCurrencyProperties({...exChangeCurrencyProperties,["baseCurrency"]:selectedOption.value})
    const resData = await convertCurrency({...exChangeCurrencyProperties,["baseCurrency"]:selectedOption.value},Number(exChangeCurrencyProperties?.baseCurrencyValue))
  }
  const handleCurrencyChange = (selectedOption)=>{
    setExChangeCurrencyProperties({...exChangeCurrencyProperties,["currency"]:selectedOption.value})
  }

  const handleInputChange = (e)=>{
    setExChangeCurrencyProperties({...exChangeCurrencyProperties,[e.target.name]:e.target.value})
  }

  const handleCurrenceyConvert =async(e)=>{
    const resData = await convertCurrency(exChangeCurrencyProperties, Number(e.target.value))
setExChangeCurrencyProperties(resData)
  }

  console.log(exChangeCurrencyProperties,"gg")
  return (
    <div className='overview main_content mt-3'>
      <div className='section_heading'>
        <h1>
        Exchange Rate
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
            <Select options={options} placeholder={"USD"}  onChange={handleBaseCurrencyChange}
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
            <input className='ca_input' value={exChangeCurrencyProperties?.baseCurrencyValue} type="number" name='baseCurrencyValue' onChange={handleInputChange} onBlur={handleCurrenceyConvert}/>
          </div>
        </div>

        <div className="create_account_box">
          <div className="create_account_input">
            <Select options={options} placeholder={"AUD"}   onChange={handleCurrencyChange}
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
            <input className='ca_input' type="number" value={exChangeCurrencyProperties?.currencyValue} name='currencyValue' onChange={handleInputChange} onBlur={handleCurrenceyConvert} />
          </div>
        </div>

        <div className="rete_alert mt-5">
          <p className='fs-6 d-flex align-items-center gap-2 text_clr_76 mb-1'>
            <HiBellAlert className='text_clr_76' />
            Set up a Rate Alert
          </p>

          <p className='fs-6 d-flex align-items-center gap-2 text_clr_76'>
            <BiTrendingUp className="text_clr_76" />
            View trends
          </p>
        </div>
      </div>

      <div className="rete_alert mt-5 border-bottom pb-5">
        <h3>
          My favourites
        </h3>
        <p className='fs-6 d-flex align-items-center gap-2 text_clr_76 mb-1'>
          <MdOutlineEdit className='text_clr_76' />
          Edit
        </p>

        <p>
          You have not added any currency pairs
        </p>
      </div>

      <div className="rete_alert mt-5 border-bottom pb-5">
        <div className='d-flex align-items-center justify-content-between'>
          <h3>
            Active rate alerts
          </h3>
          <Link className='text_clr_76 text-decoration-none'>
            See All
          </Link>
        </div>
        <p className='fs-6 d-flex align-items-center gap-2 text_clr_76 mb-1'>
          Next five active rate alerts due to expire
        </p>

        <p>
          No record found.
        </p>
      </div>




    </div>
  )
}

export default ExchangeRate