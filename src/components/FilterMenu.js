import React from 'react'

import LargeFilterMenu from './filtermenu/LargeFilterMenu'
import SmallFilterMenu from './filtermenu/SmallFilterMenu'

const FilterMenu = () => {
  return (
    <div className='px-3 sm:px-12 sm:py-6'>
      {/* Heading */}
      <h1 className='text-3xl hidden sm:block'>
        Search results for <span className='font-extrabold'>Projects</span>
      </h1>

      {/* Large Screen Filter Menu */}
      <LargeFilterMenu />

      {/* Small Screen Filter Menu */}
      <SmallFilterMenu />
    </div>
  )
}

export default FilterMenu
