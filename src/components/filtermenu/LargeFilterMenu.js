import React from 'react'
import SlidingMenu from './SlidingMenu'
import Dropdown from './Dropdown'

const selectChainOptions = ["Ethereum", "Polygon", "Binance"]
const sortByOptions = ["Likes", "Votes"]

const LargeFilterMenu = () => {
    return (
        // Filtermenu container -> for large devices
        <div className='sm:flex hidden justify-between mt-6 space-x-10'>

            {/* Sliding-Category container */}
            <div className='md:w-6/12 xl:w-8/12'>
                <SlidingMenu />
            </div>

            {/* Dropdown-Menu container */}
            <div className='flex md:w-6/12 xl:w-4/12 space-x-3'>
                <div className='w-full'>
                    <Dropdown dropdownTitle={"Select Chain"} dropdownOptions={selectChainOptions} />
                </div>
                <div className='w-full'>
                    <Dropdown dropdownTitle={"Sort By"} dropdownOptions={sortByOptions} />
                </div>
            </div>
        </div>
    )
}

export default LargeFilterMenu
