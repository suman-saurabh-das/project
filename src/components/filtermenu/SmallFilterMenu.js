import React from 'react'
import CustomButton from './CustomButton'
import Dropdown from './Dropdown'

const dropdownOptions = ["Ethereum", "Polygon", "Binance"]

const SmallFilterMenu = () => {
  return (
    // Filtermenu container -> for small devices
    <div className='pt-6 px-3 sm:px-12 py-3 sm:hidden'>
      <div className='flex items-center justify-between space-x-3'>

        {/* Select Chain category button container */}
        <div className='w-1/2'>
          <CustomButton buttonTitle={"Catergories"} />
        </div>
        
        {/* Sortby dropdown button container */}
        <div className='w-1/2'>
          <Dropdown dropdownTitle={"Chains"} dropdownOptions={dropdownOptions} />
        </div>
      </div>
    </div>
  )
}

export default SmallFilterMenu
