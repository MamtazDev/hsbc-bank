import React, { useState, useRef, useEffect } from 'react';
import './TopBar.scss';
import icbtLogo from '../../assets/logo-white-text.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TopBar = () => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setShow(!show);

    const handleItemClick = () => {
        setShow(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='topbar w-100 d-flex flex-wrap align-items-center justify-content-between px-3 py-1 gap-3'>
            <div className='bank_logo'>
                <img style={{ width: '225px' }} src={icbtLogo} alt='logo' />
            </div>

            <div className='dropdown_parent' ref={dropdownRef}>
                <div onClick={toggleDropdown} className='profile '>
                    <p className='mb-0'>Sky Fashion Limited</p>
                    <IoIosArrowDown />
                </div>
                {show && (
                    <div className='dropdown_result' onClick={handleItemClick}>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                        <Link to='/reset-password'>Reset Password</Link>
                        <button>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopBar;
