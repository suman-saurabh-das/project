import React, { useContext } from 'react'
import { SideBarContext } from '../../App'

const CustomButton = ({ buttonTitle }) => {
  const [handleSideBarVisibility] = useContext(SideBarContext)

  return (
    <div
      onClick={() => handleSideBarVisibility(true)}
      className='border-2 border-gray-200 flex items-center justify-center font-semibold px-3 py-1 rounded-lg space-x-2 text-sm w-full'>
      <span>{buttonTitle}</span>
      <i className="uil uil-angle-right text-xl"></i>
    </div>
  )
}

export default CustomButton
