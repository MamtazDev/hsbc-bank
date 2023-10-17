import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row header-row align-items-center">
                    <div className="col-6 col-sm-5">
                        <div className="header-left d-flex align-items-center gap-3">
                            <h6 className="page-title fw-semi-bold text-dark me-5 mb-0">Dashboard</h6>
                            <form method="POST" action="#" className="flex-grow-1 d-none d-lg-block">
                                <input type="text" className="form-control border-0 form-search" placeholder="Search" />
                            </form>
                        </div>
                    </div>
                    <div className="col-6 col-sm-7">
                        <div className="header-right">
                            <ul className="list-unstyled d-flex align-items-center justify-content-end mb-0">
                                <li>
                                    <button type="button" className="btn btn-sm">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.93343 18.3334C14.5168 18.3334 18.2668 14.5834 18.2668 10C18.2668 5.41669 14.5168 1.66669 9.93343 1.66669C5.3501 1.66669 1.6001 5.41669 1.6001 10C1.6001 14.5834 5.3501 18.3334 9.93343 18.3334Z" stroke="#3F4464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.5 8.12507C7.5 6.79622 8.69664 5.83331 10.0271 5.83331C11.3576 5.83331 12.5 6.79622 12.5 8.12507C12.5 9.1482 11.5801 9.47555 10.7344 10.335C10.2529 10.8244 10.0271 11.5901 10.0271 11.9311M10.0271 13.8195V14.1666" stroke="#3F4464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-sm">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.249939C10.4142 0.249939 10.75 0.585725 10.75 0.999939V2.28549C12.4267 2.4449 14.0098 3.13565 15.2244 4.26349C16.6207 5.56006 17.4167 7.331 17.4167 9.19042C17.4167 12.0469 17.7449 13.661 18.043 14.5336C18.1914 14.9677 18.3301 15.2117 18.4121 15.3324C18.45 15.3881 18.4759 15.4179 18.4855 15.4283C18.7174 15.625 18.8086 15.9444 18.7119 16.236C18.6101 16.5428 18.3232 16.7499 18 16.7499H13.7072C13.7607 16.9011 13.7664 17.0706 13.7123 17.2347C13.4658 17.9826 12.9597 18.622 12.2898 19.0686C11.6208 19.5146 10.8175 19.7499 10 19.7499C9.18254 19.7499 8.37925 19.5146 7.71021 19.0686C7.04027 18.622 6.53425 17.9826 6.28771 17.2347C6.23361 17.0706 6.23929 16.9011 6.29287 16.7499H2.00001C1.70822 16.7499 1.44291 16.5807 1.31991 16.3161C1.19878 16.0556 1.23729 15.7491 1.41808 15.5268C1.42052 15.5236 1.42724 15.5145 1.4377 15.4992C1.45981 15.4667 1.49879 15.4061 1.54941 15.313C1.65055 15.1269 1.79892 14.8099 1.9519 14.3285C2.25799 13.3654 2.58334 11.7414 2.58334 9.19042C2.58334 7.331 3.37932 5.56006 4.77563 4.26349C5.99023 3.13565 7.57333 2.4449 9.25001 2.28549V0.999939C9.25001 0.585725 9.5858 0.249939 10 0.249939ZM7.70712 16.7499C7.7089 16.755 7.71063 16.76 7.71231 16.7651C7.84634 17.1717 8.13058 17.5461 8.54226 17.8205C8.95483 18.0956 9.46634 18.2499 10 18.2499C10.5337 18.2499 11.0452 18.0956 11.4578 17.8205C11.8694 17.5461 12.1537 17.1717 12.2877 16.7651C12.2894 16.76 12.2911 16.755 12.2929 16.7499H7.70712ZM10 3.74994C8.41362 3.74994 6.90236 4.33563 5.7963 5.36268C4.69212 6.38799 4.08334 7.7662 4.08334 9.19042C4.08334 11.8675 3.74203 13.6483 3.38145 14.7829C3.32743 14.9528 3.273 15.1083 3.21924 15.2499H16.7071C16.6792 15.1766 16.6513 15.0995 16.6236 15.0186C16.2551 13.9403 15.9167 12.1497 15.9167 9.19042C15.9167 7.7662 15.3079 6.38799 14.2037 5.36268C13.0977 4.33563 11.5864 3.74994 10 3.74994Z" fill="#3F4464" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="header-right-catalog">
                                    <div className="dropdown authInfo-dropdown">
                                        <a className="btn btn-authInfo is-dropdown-toggle dropdown-toggle d-flex align-items-center text-start gap-2 gap-xxl-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <h6 className="user-name text-dark fw-semi-bold d-none d-lg-block mb-0">
                                                JECO JEON</h6>
                                            <div className="user-img flex-shrink-0">
                                                <img src="assets/img/user-1.png" alt="" className="img-fluid" />
                                            </div>
                                        </a>
                                        <div className="dropdown-menu px-0 py-0">
                                            <div className="current-user bg-primary d-flex align-items-center py-3 px-4">
                                                <div className="authInfo-profile">
                                                    <h6 className="user-name fs-6 text-light fw-normal mb-0">
                                                        Admin</h6>
                                                    <p className="user-email text-light fw-normal mb-0">
                                                        <small>admin@email.com</small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="authInfo-actions px-2 py-3">
                                                <ul className="authInfo-dropdown-menu-list list-unstyled px-0 my-0">
                                                    <li>
                                                        <a className="dropdown-item d-flex align-items-center py-1" href="#">
                                                            View Profile </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item d-flex align-items-center py-1" href="settings.html"> Settings </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item d-flex align-items-center py-1" href="#">
                                                            Log Out </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header