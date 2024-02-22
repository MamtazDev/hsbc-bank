import React, { useState } from 'react'
import './TopBar.scss'
import icbtLogo from '../../assets/logo-white-text.png'
import { IoIosArrowDown } from "react-icons/io";

const TopBar = () => {
    const [show,setShow] = useState(false)
    return (
        <div className='topbar w-100 d-flex flex-wrap align-items-center justify-content-between px-3 py-1 gap-3'>
            <div className='bank_logo'>
                <img style={{ width: '225px' }} src={icbtLogo} alt="logo" />
            </div>

            {/* <div className='welcome_title'>
                <p className='fw-bold fs-6 text-white m-0'>
                    Welcome to the ICBT E-Commerce Banking Technology Demo page
                </p>
            </div>

            <div className='subscribe_btn'>
                <button className='sub-btn border-0'>
                    Subscribe now
                </button>
            </div> */}
            <div className='logout'>

            <div onClick={()=>setShow(!show)} className='profile '>           
                    <p className='mb-0'>Sky Fashion Limited</p>
                        <IoIosArrowDown/>
            </div>
            {
                show && 
            <button>Log Out</button>
            }
            </div>









        </div>

    )
}

export default TopBar