import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="login text-center">
            <div className="container">

            <p className="mb-5">Welcome back!</p>
            <form className="w-100">
                <input className="form-control mb-3"  type="email" placeholder="Email" />
                <input className="form-control mb-2"  type="passwprd" placeholder="Password" />
                <div className="d-flex justify-content-between gap-2 align-items-center mb-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">
                    Remember me
                    </label>
                </div>
                    <Link to="/reset-password" className="text-secondary ">Forget your password?</Link>
                </div>


                <button className="btn btn-primary rounded-pill w-100 mb-3">SIGN IN</button>
                <div className="d-flex justify-content-center align-items-center gap-1">
                    <p className="text-secondary mb-0">

                    Don't have an account? 
                    </p>
                    <Link to="">Sign up</Link>
                </div>
            </form>
            </div>
            
        </div>
    )
};

export default Login;