import React from 'react';

const CustomOption = (props) => {
    const {
        children,
        innerProps,
        isFocused,
        isSelected,
        data,
      } = props;
    return (
        <div  {...innerProps} className='cursor-pointer w-100 p-2 d-flex  align-items-center justify-content-between border border-bottom'>
        <div className='w-100'>
          <p className='m-0'>
            {data.label} CombiNations Savings
          </p>

          <p className="d-flex align-items-center justify-content-between m-0">
            <span>
              001-7-600123
            </span>

            <span>
              {data.label} 45,265.83
            </span>
          </p>
        </div>

       

      </div>
    );
};

export default CustomOption;