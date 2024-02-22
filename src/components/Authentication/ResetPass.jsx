import React from 'react';

const ResetPass = () => {
    return (
        <div className="reset text-center">
        <h5 className="mb-3">Reset password</h5>
        <p className='text-secondary mb-5'>Please enter the email you used for a ICBT and we'll help you create a new password</p>
        <form className="w-100">
            <input className="form-control mb-3"  type="email" placeholder="Email" />
     <button className="btn btn-primary rounded-pill w-100 mb-3">SEND</button>
         
        </form>
        
    </div>
    );
};

export default ResetPass;