import React from 'react'
import Dropdown from './Dropdown'
import SlidingMenu from './SlidingMenu'

const selectChainOptions = ["Ethereum", "Polygon", "Binance"]
const sortByOptions = ["Likes", "Votes"]

const LargeFilterMenu = () => {
    return (
        // Large Devices Category Filter Menu
        <div className='sm:flex hidden justify-between mt-6 space-x-10'>
            {/* Sliding Category Filter Container */}
            <div className='w-8/12'>
                <SlidingMenu />
            </div>
            {/* Dropdown Menu Container */}
            <div className='flex w-4/12 space-x-3'>
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
