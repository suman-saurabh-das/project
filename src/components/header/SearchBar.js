import React from 'react'

const SearchBar = () => {
  return (
    // Header -> Searchbar Container
    <div className='bg-gray-200 border-[1px] border-gray-300 flex lg:flex-row flex-row-reverse px-4 py-1 rounded-2xl shadow-inner'>
      
      {/* Search Button */}
      <button className='m-0 lg:hover:scale-125 duration-300'>
        <i className="uil uil-search"></i>
      </button>

      {/* Search Bar */}
      <div>
        <input
          className='bg-gray-200 outline-none sm:pl-3 placeholder:text-gray-500 w-full text-xs sm:text-sm'
          type="text"
          placeholder="Search Projects" />
      </div>
    </div>
  )
}

export default SearchBar
