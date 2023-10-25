import React from 'react'
import { AiOutlineReload } from "react-icons/ai";

const SectionTitle = ({timeString,formattedDate}) => {
    return (
        <div className="section_title_wrapper">
            <div className="section_title d-flex align-items-center justify-content-between">

                <h5 className='fs-5 fw-medium'>
                    ICBT Global Wallet Receiving Account list
                </h5>

                <span className='fs_12'>
                    Last updated at {formattedDate} {timeString}
                    <button className='reload_btn ms-2'>
                        < AiOutlineReload />
                    </button>
                </span>

            </div>
        </div>
    )
}

export default SectionTitle