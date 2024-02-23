import { useRef, useState } from "react";


const Registration = () => {
    const [step,setStep] = useState(1)
    const frontFileref = useRef()
    const backFileref = useRef()
    return (
        <div className='registration py-5'>
            <div className='container'>
                {
                    step === 1 && 
                <div>

                <h4>Ultimate beneficiaries</h4>
                <p className="mb-5">Please specify all ultimate beneficiaries (natural persons) who directly or indirectly own or control 25% or more of the company shares or voting rights:</p>

                <div className="row g-4">
                    <div className="col-lg-9">
                    <div className="row gy-5 gx-3">
    <div className="col-lg-4">
    <label>First Name</label>
    <input className="form-control"  type="text" />
    </div>
    <div className="col-lg-4">
    <label>Last Name</label>
    <input className="form-control"  type="text" />
    </div>
    <div className="col-lg-4">
    <label>E-mail</label>
    <input className="form-control"  type="email" />
    </div>
    <div className="col-lg-4">
    <label>Date of Birth</label>
    <input className="form-control"  type="date" />
    </div>
    <div className="col-lg-4">
    <label>Personal ID Code </label>
    <input className="form-control"  type="text" />
    </div>
    <div className="col-lg-4">
    <label>Contact Phone Number </label>
    <input className="form-control"  type="tel" placeholder="(555) 123-4567"/>
    </div>
    <div className="col-lg-6">
    <label>Citizenship </label>
   <select className="form-select">
    <option selected>Choose Citizenship</option>
    <option >B</option>
    <option >C</option>
    <option >D</option>
    <option >E</option>
   </select>
    </div>
    <div className="col-lg-6">
    <label>Country of Residence </label>
   <select className="form-select" >
    <option selected>Choose Country</option>
    <option >B</option>
    <option >C</option>
    <option >D</option>
    <option >E</option>
   </select>
    </div>
    <div className="col-lg-6">
    <label>Full address</label>
    <input className="form-control"  type="text" />
    </div>
    <div className="col-lg-6">
    <label>Post Code </label>
    <input className="form-control"  type="text" />
    </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                        <div onClick={()=>frontFileref.current.click()} className="file_card mb-4">
                            <input ref={frontFileref} className="d-none" type="file" />
                            <p>A color photo of passport (information page) or national ID card (front)</p>                    
                            <button  className="btn btn-primary w-100">Select a file</button>

                        </div>
                        <div onClick={()=>backFileref.current.click()} className="file_card">
                        <input ref={backFileref} className="d-none" type="file" />
                            <p>A color photo national ID card (back)</p>                    
                            <button  className="btn btn-primary w-100">Select a file</button>

                        </div>
                    </div>
                </div>
                <div className="text-end">

                    <button onClick={()=>setStep(2)} className="next-button active mt-5">Next</button>
                </div>
                </div>
                }

                {
                    step === 2 && <div>
                        <h4>Enter Company Details</h4>
                        <hr className="mt-4 mb-5" />
                        <div className="mb-4">
                            <label>Are you the head of the company?</label> 
                    <div className="mt-2">

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                        <label className="form-check-label" >Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                        <label className="form-check-label" >No</label>
                        </div>
                        </div>
                        </div>


                        <h4>Company Details</h4>
                        <hr className="mt-4 mb-5" />

                        <div className="row gx-4 gy-5">
                            <div className="col-lg-4">
                            <label>Company Name</label>
                            <input className="form-control"  type="text" />
                            </div>
                            <div className="col-lg-4">
                            <label>Company Code</label>
                            <input className="form-control"  type="text" />
                            </div>
                            <div className="col-lg-4">
                            <label>Tax Code</label>
                            <input className="form-control"  type="text" />
                            </div>
                            <div className="col-lg-4">
                            <label>Company Email</label>
                            <input className="form-control"  type="email" />
                            </div>
                            <div className="col-lg-4">
                            <label>Company Phone Number</label>
                            <input className="form-control"  type="tel" />
                            </div>
                            <div className="col-lg-4">
                            <label>Country of Registration</label>
                            <select className="form-select">
                                <option selected>Choose Country</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
                            </div>
                            <div className="col-lg-4">
                            <label>Date of Registration</label>
                            <input className="form-control"  type="date" />
                            </div>
                            <div className="col-lg-4">
                            <label> Registration Address</label>
                            <input className="form-control"  type="text" />
                            </div>
                            <div className="col-lg-4">
                            <label> Post Code </label>
                            <input className="form-control"  type="text" />
                            </div>
                            <div className="col-lg-4">
                            <label> Correspondence Address </label>
                            <input className="form-control"  type="text" placeholder="(if different from registration address)" />
                            </div>
                            <div className="col-lg-4">
                            <label> Company Website  </label>
                            <input className="form-control"  type="text"  />
                            </div>
                            <div className="text-end">

                            <button  className="next-button active mt-5">Submit</button>
                            </div>
                        </div>

                    </div>
                }

            </div>
            
        </div>
    );
};

export default Registration;