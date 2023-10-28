
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const PaymentStepThree = ({step,setStep,setpaymentFormData,paymentFormData,handleNext,handlePrevious}) => {
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
    const handleAnotherPayment = ()=>{
        setpaymentFormData({})
        setStep(1)
    }
    return (
        <div className='payment_three'>
            {
                step === 3 && <>
                <div className='section_heading'>

<h2>Acknowledgement</h2>
<div className='acknowledgement mb-4'>

<div className='d-flex align-items-start gap-3 '>
<span>
<svg width={20} class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 fXlhuh ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-labelledby="title-icon-954 " role="img" data-testid="StatusConfirmationLightIcon" data-id="Icon" fill="currentColor"><title id="title-icon-954">success</title><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><circle cx="9" cy="9" r="9" fill="#00847f"></circle><path fill="#fff" d="M7.216 13.553l-3.63-3.629L4.859 8.65l2.357 2.358 5.925-5.925 1.273 1.273z"></path></svg>
</span>
<div>

<p>Your instruction has been received at {formattedDate} 12:03HKT. Please note the reference number below for your records.</p>
<p>If this payment is made to a normal beneficiary, you will receive a notification via SMS. To get notified when your payee receives your payment via RTGS / Telegraphic Transfer, go to "My ICBT > Notification Centre" and subscribe </p>
<p>'Outgoing Payment Notifications'.</p>
<p>[NEW] Primary Users can go to 'Payment Tracker' to submit cancellation request for payments executed via RTGS or Telegraphic Transfer. Payment cancellation involves handling charges and it may take a few weeks.</p>
</div>
</div>
</div>
</div>

<div>
<h3>Reference</h3>
<p className='mb-0'>Transaction reference number</p>
<p className='mb-0'>33332012</p>
<hr />
</div>
                </>
            }




            <div className='section_heading'>
                <h1 className='fw-medium'>
                    Payment preview
                </h1>
            </div>

            <div className="pay_to paymentstep_two_border">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Pay to
                </h3>

                <div className="section_wrapper">
                    <div className="left">
                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary bank location
                            </p>
                            <span className='fw-bold '>
                         {paymentFormData?.bankLocation}
                            </span>
                        </div>

                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Payment currency
                            </p>
                            <span className='fw-bold '>
                                {paymentFormData.from}
                            </span>
                        </div>

                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary bank name
                            </p>
                            <span className='fw-bold '>
                            {paymentFormData?.beneficiaryName}
                            </span>
                        </div>

                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary bank address
                            </p>
                            <span className='fw-bold '>
                             {paymentFormData?.beneficiaryAddressLink1}
                            </span>
                            <br />
                            <span className='fw-bold '>
                            {paymentFormData?.beneficiaryAddressLink2}
                            </span>
                            <br />
                            <span className='fw-bold '>
                            {paymentFormData?.beneficiaryAddressLink3}
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary account number / IBAN
                            </p>
                            <span className='fw-bold '>
                                {paymentFormData?.iban}
                            </span>
                        </div>

                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary name
                            </p>
                            <span className='fw-bold '>
                                {paymentFormData?.beneficiaryName}
                            </span>
                        </div>

                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary bank code / SWIFT address
                            </p>
                            <span className='fw-bold '>
                                {paymentFormData.bankName}
                            </span>
                        </div>

                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Beneficiary address
                            </p>
                            <span className='fw-bold '>
                            {paymentFormData?.beneficiaryAddressLink1}
                            </span>
                            <br />
                            <span className='fw-bold '>
                            {paymentFormData?.beneficiaryAddressLink2}
                            </span>
                            <br />
                            <span className='fw-bold '>
                            {paymentFormData?.beneficiaryAddressLink3}
                            </span>
                        </div>




                    </div>
                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    From
                </h3>

                <div className="section_wrapper">
                    <div className="left">
                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                {paymentFormData.from} Current Account
                            </p>
                            <span className=''>
                               {paymentFormData.accountNumber}
                            </span>
                        </div>

                    </div>

                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Amount: {paymentFormData.amountAUD}
                </h3>

                {/* <div className="section_wrapper">
                    <div className="left">
                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Debit amount
                            </p>
                            <span className='d-flex align-items-center gap-2'>
                                AUD
                                <span className='fw-bold fs-5'>
                                {paymentFormData?.amountAUD}
                                </span>
                            </span>
                        </div>

                    </div>

                    <div className="right">
                        <div className="section_item mb-3">
                            <p className='fs-12 m-0'>
                                Payment amount
                            </p>
                            <span className='d-flex align-items-center gap-2'>
                                USD
                                <span className='fw-bold fs-5'>
                                    100.00
                                </span>
                                (indicative only)
                            </span>
                        </div>
                    </div>
                </div> */}

                {/* <div className="section_item mb-3">
                    <p className='fs-12 m-0'>
                        Exchange rate
                    </p>
                    <span className='d-flex align-items-center gap-2'>
                        <span className='fw-bold fs-6'>
                            AUD 1 = USD
                            0.719424460
                        </span>
                        (indicative only)
                    </span>
                </div> */}

                {/* <div className="section_item mb-3">
                    <p className='fs-12 m-0'>
                        Rate last update at: 27/12/2021 18:00HKT
                    </p>
                    <span className='d-flex gap-2'>
                        <span>
                            <svg width={"20px"} className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 fXlhuh ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-labelledby="title-icon-3049 " role="img" data-testid="StatusWarningLightIcon" data-id="Icon" fill="currentColor"><title id="title-icon-3049">StatusWarningLight</title><path fill="none" d="M0 0h18v18H0z"></path><circle cx="9" cy="9" r="9" fill="#fb3"></circle><circle cx="9" cy="13" r="1.2"></circle><path d="M8.1 3.8h1.8v6H8.1z"></path></svg>
                        </span>
                        Other fees and charges may apply. For details, please refer to the Bank's Commercial Tariff section open in new window available on the ICBT Hong Kong Commercial Banking website. Please go to 'Transaction History' under 'Accounts' on or after the 'Payment Date' to check the transaction details.
                    </span>
                </div> */}


            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{fontSize: '20px'}} className='mb-3'>
                    Payment date
                </h3>
                <div className="section_item mb-3">
                    <p style={{fontSize: '14px'}} className='fs-12'>
                      {formattedDate}
                    </p>
                    <span className='d-flex align-items-center gap-2'>
                        Transaction requests submitted during business hours open in new window on a Hong Kong working day will be processed on the same day. Requests submitted at other times (e.g. on a public holiday) will be processed on the next working day.
                    </span>
                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Settlement option
                </h3>
                <div className="section_item mb-3">
                    <p style={{ fontSize: '14px' }} className='fs-12 fw-medium'>
                        Telegraphic transfer
                    </p>
                    <span className='d-flex align-items-center gap-2'>
                        If we are unable to process this payment via RTGS, we will process it as a telegraphic transfer and the corresponding charges will apply. However, the related advice will still show 'Bank Fund Transfer' and not 'Outward Remittance'.
                    </span>
                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Who pays local / overseas charges
                </h3>
                <div className="section_item mb-3">
                    <span className='d-flex align-items-center gap-2'>
                        We pay local bank charges, the beneficiary pays overseas bank charges.
                    </span>
                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Deduct charges from
                </h3>
                <div className="section_item mb-3">
                    <span className='d-flex align-items-center gap-2 fw-bold'>
                        Same as debit account
                    </span>
                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Ordering party
                </h3>
                <div className="section_item mb-3">
                    <span className='d-flex align-items-center gap-2'>
                        Is this payment being made on behalf of a third party (ordering party)?
                    </span>
                    <span className='fw-bold'>
                        Yes
                    </span>
                </div>
            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Messages
                </h3>
                <div className="section_wrappper">
                    <div className="right">
                        <div className="section_item mb-3">
                            <span className='d-flex align-items-center gap-2'>
                                Message to beneficiary
                            </span>
                            <span className='fw-bold'>
                                {paymentFormData.messageBeneficiary}
                            </span>
                        </div>
                    </div>
                    <div className="left">
                        <div className="section_item mb-3">
                            <span className='d-flex align-items-center gap-2'>
                                Message to beneficiary bank
                            </span>
                            <span className='fw-bold'>
                                {paymentFormData.messageBenificiaryBank}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    e-Advice
                </h3>
                <p>
                    You may request us to send an email to the above beneficiary and/or other related business partners notifying them you have sent funds to the beneficiary. A charge of HKD1 per email will be debited from the account you specified above. If 'Business Integrated Account' is selected, the charge will be debited from your HKD savings account. You can request a maximum of four emails.
                </p>
                <div className="section_wrappper">
                    <div className="right">
                        <div className="section_item mb-3">
                            <span className='d-flex align-items-center gap-2'>
                                Email address
                            </span>
                            <span className='fw-bold'>
                            {paymentFormData?.messageEmail}
                            </span>
                        </div>
                        <div className="section_item mb-3">
                            <span className='d-flex align-items-center gap-2'>
                                Return email address if e-Advice fails to send
                            </span>
                            <span className='fw-bold'>
                            {paymentFormData?.messageEmailAgain}
                            </span>
                        </div>
                    </div>
                    <div className="left">
                        <div className="section_item mb-3">
                            <span className='d-flex align-items-center gap-2'>
                                Reference
                            </span>
                            <span className='fw-bold'>
                                {paymentFormData?.reference}
                            </span>
                        </div>
                        <div className="section_item mb-3">
                            <span className='d-flex align-items-center gap-2'>
                                Message to recipient
                            </span>
                            <span className='fw-bold'>
                             {paymentFormData?.recipient}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="pay_to paymentstep_two_border pt-5">
                <h3 style={{ fontSize: '20px' }} className='mb-3'>
                    Important Notes
                </h3>
                <p>
                    With effect from 1 January 2021, any outward telegraphic transfer into mainland China will require the input of a SWIFT BIC code as bank beneficiary identifier. RMB payments with CNAPS code input would be rejected.
                </p>
                <p>
                    ICBT is unable to verify beneficiary account information, and accepts no responsibility for any loss or damage suffered by any person arising out of the rejection, return and/or delay. Please verify all the information of the above transaction details is accurate.
                </p>
                <p>
                    For HKD/CNY/EUR/USD payments to other local banks via RTGS / Telegraphic Transfer, ICBT charges would be deducted from the debit account of this payment while beneficiary should pay other local bank charges, if any.
                </p>
                <p>
                    For HKD/CNY/EUR/USD payments to other local banks via RTGS / Telegraphic Transfer, ICBT charges would be deducted from the debit account of this payment while beneficiary should pay other local bank charges, if any.
                </p>
                <p>
                    <Link className="text-decoration-none me-2">
                        Click here
                    </Link>
                    to learn about the solutions for the most common issues you may face when making payments in Business Internet Banking.
                </p>

            </div> */}
            <div className="button-container">
            {step === 3 && (
                <button onClick={handleAnotherPayment} className="previous-button">
                    Make another payment
                </button>
            )}
             
            {(step > 1 && step !== 3) && (
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

export default PaymentStepThree