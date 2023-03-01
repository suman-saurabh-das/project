import React from 'react'

const CustomButton = ({ buttonTitle }) => {
  return (
    <button className='border-2 border-gray-200 flex items-center justify-center font-semibold px-3 py-1 rounded-lg space-x-2 text-sm w-full'>
      <span>{buttonTitle}</span>
      <i className="uil uil-angle-right text-xl"></i>
    </button>
  )
}

export default CustomButton
