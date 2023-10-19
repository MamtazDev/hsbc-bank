import React from 'react'
import { Link } from 'react-router-dom'

const FilterBtn = () => {
    return (
        <div className="filter_btn d-flex flex-wrap justify-content-between">
            <div className="filter_btn_left d-flex flex-wrap mb-3 mb-lg-0 align-items-center gap-3">
                <select name="allCurrency" id="">
                    <option value="1">
                        All Currency
                    </option>
                </select>
                <select name="allCurrency" id="">
                    <option value="1">
                        All Currency
                    </option>
                </select>
                <div className="search_filter">
                    <input type="text" placeholder='Search by Receiving Account name or number' />
                </div>
            </div>

            <div className="filter_btn_right d-flex flex-wrap gap-3">
                <div className="modal_btn">
                    <button>Generate composite statement</button>
                </div>
                <div className="modal_btn2">
                    <button>
                        <Link className='text-decoration-none text-white' to={"/createAccount"}>
                            Create Receiving Account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterBtn