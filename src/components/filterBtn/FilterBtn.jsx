import React from 'react'

const FilterBtn = () => {
    return (
        <div className="filter_btn d-flex justify-content-between">
            <div className="filter_btn_left d-flex align-items-center gap-3">
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
            <div className="filter_btn_right d-flex gap-3">
                <div className="modal_btn">
                    <button>Generate composite statement</button>
                </div>
                <div className="modal_btn2">
                    <button>Create Receiving Account</button>
                </div>
            </div>
        </div>
    )
}

export default FilterBtn