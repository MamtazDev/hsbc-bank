import React, { useState } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { Button, Offcanvas } from 'react-bootstrap';
import { AiOutlineAlignRight } from 'react-icons/ai';


const Sidebar = () => {
    const [isCollectionDropdownOpen, setIsCollectionDropdownOpen] = useState(false);
    const [isInventoryDropdownOpen, setIsInventoryDropdownOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleCollectionDropdown = () => {
        setIsCollectionDropdownOpen(!isCollectionDropdownOpen);
    }

    const toggleInventoryDropdown = () => {
        setIsInventoryDropdownOpen(!isInventoryDropdownOpen);
    }


    return (
        <>
            <div className='res_btn'>
                <Button onClick={handleShow} style={{ backgroundColor: '#253038', border:'0px' }}>
                    <AiOutlineAlignRight />
                </Button>

                <Offcanvas show={show} onHide={handleClose} style={{ width: '200px', backgroundColor: '#253038', color: 'white' }} >
                    <div className="navigation-widget pt-2">
                        <nav className="navbar-light px-2 py-3">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link to={'/'} className="nav-link active" onClick={toggleCollectionDropdown}>
                                        <span className="nav-text text-nowrap">Collection</span>
                                    </Link>

                                    {isCollectionDropdownOpen && (
                                        <ul className="dropdown-menu bg-transparent border-0 mt-0">
                                            <li>
                                                <a className="dropdown-item py-2 rounded" href="#">
                                                    New Campaign
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item py-2 rounded" href="#">
                                                    My Campaign
                                                </a>
                                            </li>
                                        </ul>
                                    )
                                    }
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to={'/collection/createAccount'} className="nav-link" onClick={toggleInventoryDropdown}>
                                        <span className="nav-text text-nowrap">Create Account</span>
                                    </Link>
                                    {isInventoryDropdownOpen && (
                                        <ul className="dropdown-menu bg-transparent border-0 mt-0">
                                            <li>
                                                <a className="dropdown-item py-2 rounded" href="#">
                                                    New Campaign
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item py-2 rounded" href="#">
                                                    My Campaign
                                                </a>
                                            </li>
                                        </ul>
                                    )
                                    }
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to={'/collection/exchangeRate'} className="nav-link">
                                        Exchange Rate
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to={'/collection/makepayment'} className="nav-link">
                                        Make Payment
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Offcanvas>
            </div>

            <aside id="navigation-sidebar">
                <div className='top_widget'>
                    <TbWorld className='fs-4 text-white' />
                    <p className='m-0 text-white fs_14'>
                        HSBC Merchant Box
                    </p>
                </div>
                <div className="navigation-widget pt-2">
                    <nav className="navbar-light px-2 py-3">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to={'/'} className="nav-link active" onClick={toggleCollectionDropdown}>
                                    <span className="nav-text text-nowrap">Collection</span>
                                </Link>

                                {isCollectionDropdownOpen && (
                                    <ul className="dropdown-menu bg-transparent border-0 mt-0">
                                        <li>
                                            <a className="dropdown-item py-2 rounded" href="#">
                                                New Campaign
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item py-2 rounded" href="#">
                                                My Campaign
                                            </a>
                                        </li>
                                    </ul>
                                )
                                }
                            </li>
                            <li className="nav-item mb-2">
                                <Link to={'/collection/createAccount'} className="nav-link" onClick={toggleInventoryDropdown}>
                                    <span className="nav-text text-nowrap">Create Account</span>
                                </Link>
                                {isInventoryDropdownOpen && (
                                    <ul className="dropdown-menu bg-transparent border-0 mt-0">
                                        <li>
                                            <a className="dropdown-item py-2 rounded" href="#">
                                                New Campaign
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item py-2 rounded" href="#">
                                                My Campaign
                                            </a>
                                        </li>
                                    </ul>
                                )
                                }
                            </li>
                            <li className="nav-item mb-2">
                                <Link to={'/collection/exchangeRate'} className="nav-link">
                                    Exchange Rate
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to={'/collection/makepayment'} className="nav-link">
                                    Make Payment
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;
