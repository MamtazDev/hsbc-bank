import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
    const [isCollectionDropdownOpen, setIsCollectionDropdownOpen] = useState(false);
    const [isInventoryDropdownOpen, setIsInventoryDropdownOpen] = useState(false);

    const toggleCollectionDropdown = () => {
        setIsCollectionDropdownOpen(!isCollectionDropdownOpen);
    }

    const toggleInventoryDropdown = () => {
        setIsInventoryDropdownOpen(!isInventoryDropdownOpen);
    }

    return (
        <aside id="navigation-sidebar">
            <div className="navigation-widget pt-2">
                <nav className="navbar-light px-2 py-3">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item mb-2">
                            <a className="nav-link active" href="#" onClick={toggleCollectionDropdown}>
                                <span className="nav-text text-nowrap">Collection</span>
                            </a>
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
                            <a className="nav-link" href="#" onClick={toggleInventoryDropdown}>
                                <span className="nav-text text-nowrap">Inventory</span>
                            </a>
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
                            <a className="nav-link" href="#">
                                <span className="nav-text text-nowrap">Customers</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;
