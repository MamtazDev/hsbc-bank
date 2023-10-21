import React, { useRef, useState } from 'react'
import './CreateAccount.scss'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import './Account.css';
import { Link } from 'react-router-dom';
import RequestSucess from '../requestSucess/RequestSucess';
const options = [
    { value: 'ERU', label: 'ERU' },
    { value: 'HKD', label: 'HKD' },
]

const options2 = [
    { value: 'UK', label: 'United Kingdom' },
    { value: 'USA', label: 'United Sates of America' },
    { value: 'CA', label: 'China' },
    { value: 'HK', label: 'Hong Kong' }
]

const options3 = [
    { value: 'Marketplace', label: 'Marketplace' },
    { value: 'AffiliatedCompany', label: 'Affiliated Company' },
    { value: 'AgencyRelationship', label: 'Agency Relationship' },

]

const CreateAccount = () => {


    const [formData, setFormData] = useState({})
const fileRef = useRef()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    console.log(formData)

const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})     
    };

    const handleSelectFieldInputChange =(selectedOption,key)=>{
setFormData({...formData, [key]:selectedOption})
    }

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
           [e.target.name]: e.target.files[0], // Store the selected file
        });
    };

    const handleFormSubmit = () => {
        event.preventDefault()
        console.log(formData); 
        handleShow()
    };
    

    return (
        <div className='create_account main_content mt-3'>
            <div className='section_heading'>
                <h1>
                    <MdOutlineArrowBackIosNew /> | Create Account
                </h1>
            </div>

            <div className="create_account_title mb-5">
                <p className='fs-18 m-0' style={{ color: '#333', }}>
                    HSBC Global Wallet Receiving Account details
                </p>
                <h6>
                    Note: Please ensure that the seller's name and registered address satisfies the e-marketplace validation process.
                </h6>
            </div>
            <form onSubmit={handleFormSubmit}>

            <div className="create_account_form border-bottom pb-3">
                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Currency
                        </span>
                    </div>

                    <div className="create_account_input">
                        <Select name='currency' onChange={(selectedOption)=>handleSelectFieldInputChange(selectedOption.value, 'currency')} options={options} placeholder={"EUR"}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    width: '400px',
                                    backgroundColor: 'transparent',
                                    borderRadius: '0px'
                                }),
                            }}
                        />
                    </div>
                </div>

                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Receiving Account nickname
                        </span>
                    </div>

                    <div className="create_account_input">
                        <input onChange={handleInputChange}  name='receivingAccountNickname' type="text" placeholder='Please enter name of the shop' />
                    </div>
                </div>

                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Seller name
                        </span>
                    </div>

                    <div className="create_account_input">
                        <input  onChange={handleInputChange} name='sellerName' type="text" placeholder="Please enter the full legal name of the shop's registered company" />
                    </div>
                </div>

                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Seller e-mail(Optional)
                        </span>
                    </div>

                    <div className="create_account_input">
                        <input onChange={handleInputChange} name='sellerEmail' type="email" placeholder="Please enter shop e-mail address" />
                    </div>
                </div>


                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Seller address
                        </span>
                        <br />
                        <span>
                            Please use English or Pinyin only
                        </span>
                    </div>

                    <div className="create_account_input">
                        <Select   onChange={(selectedOption)=>handleSelectFieldInputChange(selectedOption.value, 'country')}  name='country'  options={options2} placeholder={"United Kingdom"}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    width: '400px',
                                    backgroundColor: 'transparant',
                                    borderRadius: '0px',
                                    marginBottom: '15px'
                                }),
                            }}
                        />
                        <div className="create_account_input mb-3">
                            <input onChange={handleInputChange} name='region' type="text" placeholder="Region/State/Province/City" />
                        </div>
                        <div className="create_account_input mb-3">
                            <input onChange={handleInputChange} name='addressLine1' type="text" placeholder="Address line 1" />
                        </div>
                        <div className="create_account_input mb-3">
                            <input onChange={handleInputChange} name='addressLine2' type="text" placeholder="Address line 2 (Optional)" />
                        </div>
                    </div>
                </div>


                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Postal code/Zip code
                        </span>
                    </div>

                    <div className="create_account_input">
                        <input onChange={handleInputChange} name='postalCode' type="number" placeholder="Please input your postal code/zip code" />
                    </div>
                </div>
            </div>

            <div className="create_account_title my-5">
                <p className='fs-18 m-0' style={{ color: '#333', }}>
                    Supporting document details
                </p>
                <h6>
                    Please briefly explain the business relationship between the HSBC Global Wallet customer and the Seller. If the Seller is not the HSBC Global Wallet customer, please supplement with business documentary proof and Confirmation Letter signed by the Seller, and provide 1) Additional HSBC Global Wallet Receiving Accounts Service Schedule, 2) HSBC Global Wallet Terms and Conditions, and 3) General Terms and Conditions to the Seller.Supported file types: pdf, jpeg, jpg, png, doc(x), xls(x), csv, ppt(x).Per file size no larger than 10MB.
                </h6>
            </div>

            <div className="create_account_form border_bottom_black pb-3 mb-3">
                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Business relationship
                        </span>
                    </div>

                    <div className="create_account_input">
                        <Select options={options3} name='businessRelationship' onChange={(selectedOption)=>handleSelectFieldInputChange(selectedOption.value, 'businessRelationship')}  placeholder={"Select business relationship"}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    width: '400px',
                                    backgroundColor: 'transparent',
                                    borderRadius: '0px'
                                }),
                            }}
                        />
                    </div>
                </div>

                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Upload document(s)
                        </span>
                    </div>

                    <div className="create_account_input">
                        <input  ref={fileRef} onChange={handleFileChange} name='uploadDocument' type="file" className='d-none'    accept=".pdf, .png, .jpg, .jpeg"/>
                        <button type='button' onClick={()=>fileRef.current.click()} className='mb-2'>
                            <span>
                                <svg className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 ntXYA ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation" data-testid="UploadIcon" data-id="Icon" fill="currentColor"><path fill="none" d="M0 0h18v18H0z"></path><path d="M15.8 12v3.8H2.2V12H1v5h16v-5h-1.2zm-7.4 1.849h1.2V3.297l4.4 4.4V6.001L9 1 4 6.001v1.697l4.4-4.4v10.551z"></path></svg>
                            </span>
                            Upload
                        </button>
                        <p className='fs_12 mb-4'>
                            Supported file format: pdf, png, jpg.  Per file size: 10MB
                        </p>

                        <p style={{ height: '60px', backgroundColor: '#e9e6e6' }} className='d-flex align-items-center justify-content-between m-0 gap-5 px-2'>
                            <div className='d-flex gap-2'>
                                <span>
                                    <svg width="20px" className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 dyuXRB ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation" data-testid="DocumentPdfIcon" data-id="Icon" fill="#767676"><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M3.901 9.378h-.317v.798h.267c.547 0 .621-.209.621-.413 0-.274-.166-.385-.571-.385zM13.2 0H3v5.8h1.2V1.2H12V5h3.8v11.8H4.2v-1.6H3V18h14V3.8L13.2 0zm0 3.8V1.697L15.303 3.8H13.2zM13 13.99V7.01c0-.006-.004-.01-.01-.01H1.01c-.006 0-.01.004-.01.01v6.98c0 .005.004.01.01.01h11.98a.01.01 0 00.01-.01zm-8.24-3.22l-.001.001c-.171.069-.405.106-.658.106h-.517v1.273h-.912V8.676h1.315c.322 0 .66.016.944.207.302.205.461.521.461.912.001.444-.236.809-.632.975zm2.053 1.381H5.685V8.676h1.238c1.275 0 1.922.579 1.922 1.722-.001 1.554-1.086 1.753-2.032 1.753zm4.767-2.768h-1.463v.675h1.377v.702h-1.377v1.392h-.899V8.676h2.362v.707zm-4.721-.005h-.263v2.071h.235c.759 0 1.083-.312 1.083-1.043s-.305-1.028-1.055-1.028z"></path></svg>
                                </span>

                                {formData?.uploadDocument?.name}
                            </div>

                            <span>
                                <svg width="20px" className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 fXlhuh ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation" data-testid="DeleteIcon" data-id="Icon" fill="#767676"><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M15.5 2H12v-.5c0-.825-.675-1.5-1.5-1.5h-3C6.675 0 6 .675 6 1.5V2H2.5C1.672 2 1 2.672 1 3.5V6h1v12h14V6h1V3.5c0-.828-.672-1.5-1.5-1.5zm-8.3-.5c0-.163.137-.3.3-.3h3c.163 0 .3.137.3.3V2H7.2v-.5zm7.6 15.3H3.2V6h11.6v10.8zm1-12H2.2V3.5c0-.165.135-.3.3-.3h13c.166 0 .3.135.3.3v1.3zM7.2 8H6v7h1.2V8zM12 8h-1.2v7H12V8z"></path></svg>
                            </span>
                        </p>
                    </div>
                </div>

                <div className="create_account_box">
                    <div className="create_account_type">
                        <span>
                            Comments
                        </span>
                    </div>

                    <div className="create_account_input">

                        <textarea onChange={handleInputChange} style={{ width: '400px', height: '100px', padding: '10px' }} name="comments"placeholder='Please provide further details on the business relationship'>

                        </textarea>
                    </div>
                </div>

            </div>

            <div className="back_submit_btn d-flex align-items-center justify-content-between">
                <button  className='px-3'>
                    Back
                </button>


                <Button onClick={handleFormSubmit} disabled={!formData.comments || !formData.currency || !formData.receivingAccountNickname || !formData.sellerName || !formData.sellerEmail || !formData.addressLine1 || !formData.addressLine2 || !formData.region || !formData.postalCode || !formData.businessRelationship || !formData.uploadDocument || !formData.country } className={`${(formData.comments && formData.currency && formData.receivingAccountNickname && formData.sellerName && formData.sellerEmail && formData.addressLine1 && formData.addressLine2 && formData.region && formData.postalCode && formData.businessRelationship && formData.uploadDocument && formData.country) && "active"} px-3`} variant="primary">
                    Submit
                </Button>
            </div>
            </form>



            <Modal show={show} onHide={handleClose} animation={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <div className='section_heading'>
                    <h1>
                        Please Confirm Your Details
                    </h1>
                </div>

                <div className="create_account_title">
                    <p className='fs-18 m-0' style={{ color: '#333', }}>
                        HSBC Global Wallet Receiving Account details
                    </p>
                    <h6>
                        Note: Please ensure that the seller's name and registered address satisfies the e-marketplace validation process.
                    </h6>
                </div>

                <div className="create_account_form border-bottom">
                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Currency
                            </span>
                        </div>

                        <div className="create_account_input">
                           {formData?.currency}
                        </div>
                    </div>

                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Receiving Account nickname
                            </span>
                        </div>

                        <div className="create_account_input">
                        {formData?.receivingAccountNickname}
                        </div>
                    </div>

                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Seller name
                            </span>
                        </div>

                        <div className="create_account_input">
                        {formData?.sellerName}
                        </div>
                    </div>

                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Seller e-mail(Optional)
                            </span>
                        </div>

                        <div className="create_account_input">
                        {formData?.sellerEmail}
                        </div>
                    </div>


                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Seller address
                            </span>
                            <br />
                            <span>
                                Please use English or Pinyin only
                            </span>
                        </div>

                        <div className="create_account_input">
                        {formData?.country}
                        {formData?.region}
                        {formData?.addressLine1}
                        {formData?.addressLine2}
                          
                            Address Line 2
                        </div>
                    </div>


                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Postal code/Zip code
                            </span>
                        </div>

                        <div className="create_account_input">
                        {formData?.postalCode}
                        </div>
                    </div>
                </div>

                <div className="create_account_title">
                    <p className='fs-18 m-0' style={{ color: '#333', }}>
                        Supporting document details
                    </p>
                    <h6>
                        Please briefly explain the business relationship between the HSBC Global Wallet customer and the Seller. If the Seller is not the HSBC Global Wallet customer, please supplement with business documentary proof and Confirmation Letter signed by the Seller, and provide 1) Additional HSBC Global Wallet Receiving Accounts Service Schedule, 2) HSBC Global Wallet Terms and Conditions, and 3) General Terms and Conditions to the Seller.Supported file types: pdf, jpeg, jpg, png, doc(x), xls(x), csv, ppt(x).Per file size no larger than 10MB.
                    </h6>
                </div>

                <div className="create_account_form border_bottom_black">
                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Business relationship
                            </span>
                        </div>

                        <div className="create_account_input">
                        {formData?.businessRelationship}
                        </div>
                    </div>

                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Upload document(s)
                            </span>
                        </div>

                        <div className="create_account_input">




                            <p style={{ height: '60px', backgroundColor: '#e9e6e6' }} className='d-flex align-items-center justify-content-between m-0 gap-5 px-2'>
                                <div className='d-flex gap-2'>
                                    <span>
                                        <svg width="20px" className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 dyuXRB ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation" data-testid="DocumentPdfIcon" data-id="Icon" fill="#767676"><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M3.901 9.378h-.317v.798h.267c.547 0 .621-.209.621-.413 0-.274-.166-.385-.571-.385zM13.2 0H3v5.8h1.2V1.2H12V5h3.8v11.8H4.2v-1.6H3V18h14V3.8L13.2 0zm0 3.8V1.697L15.303 3.8H13.2zM13 13.99V7.01c0-.006-.004-.01-.01-.01H1.01c-.006 0-.01.004-.01.01v6.98c0 .005.004.01.01.01h11.98a.01.01 0 00.01-.01zm-8.24-3.22l-.001.001c-.171.069-.405.106-.658.106h-.517v1.273h-.912V8.676h1.315c.322 0 .66.016.944.207.302.205.461.521.461.912.001.444-.236.809-.632.975zm2.053 1.381H5.685V8.676h1.238c1.275 0 1.922.579 1.922 1.722-.001 1.554-1.086 1.753-2.032 1.753zm4.767-2.768h-1.463v.675h1.377v.702h-1.377v1.392h-.899V8.676h2.362v.707zm-4.721-.005h-.263v2.071h.235c.759 0 1.083-.312 1.083-1.043s-.305-1.028-1.055-1.028z"></path></svg>
                                    </span>
                                    {formData?.uploadDocument?.name}
                                </div>

                                <span>
                                    <svg width="20px" className="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 fXlhuh ibHSOP SvgIcon" focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation" data-testid="DeleteIcon" data-id="Icon" fill="#767676"><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M15.5 2H12v-.5c0-.825-.675-1.5-1.5-1.5h-3C6.675 0 6 .675 6 1.5V2H2.5C1.672 2 1 2.672 1 3.5V6h1v12h14V6h1V3.5c0-.828-.672-1.5-1.5-1.5zm-8.3-.5c0-.163.137-.3.3-.3h3c.163 0 .3.137.3.3V2H7.2v-.5zm7.6 15.3H3.2V6h11.6v10.8zm1-12H2.2V3.5c0-.165.135-.3.3-.3h13c.166 0 .3.135.3.3v1.3zM7.2 8H6v7h1.2V8zM12 8h-1.2v7H12V8z"></path></svg>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="create_account_box">
                        <div className="create_account_type">
                            <span>
                                Comments
                            </span>
                        </div>

                        <div className="create_account_input">

                        {formData?.comments}
                        </div>
                    </div>

                </div>

                <div className="back_submit_btn d-flex align-items-center justify-content-end mt-4">
                    <Link to={'/requestSucess'}>
                        <Button className='px-3' variant="primary">
                            Submit
                        </Button>
                    </Link>
                    {/* <Button className='px-3' variant="primary">
                        Submit
                    </Button> */}
                </div>
            </Modal>

        </div>
    )
}

export default CreateAccount