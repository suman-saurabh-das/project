import React, { useState } from 'react'

const Dropdown = ({ dropdownTitle, dropdownOptions }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  // Toggle dropdown when clicked
  const handleDropdown = () => {
    setToggleDropdown(!toggleDropdown)
  }
  // Close dropdown on selecting option
  const closeDropDown = () => {
    setToggleDropdown(false)
  }

  return (
    // Dropdown Container
    <div className='relative'>

      {/* Dropdown Button */}
      <button onClick={handleDropdown} className='border-2 border-gray-200 flex items-center justify-center font-semibold px-3 py-1 rounded-lg space-x-2 text-sm w-full'>
        <span>{dropdownTitle}</span>
        <span><i className="uil uil-angle-down text-xl"></i></span>
      </button>

      {/* Dropdown Items */}
      {
        toggleDropdown && <div id='submenu' className='absolute border-2 border-gray-200 bg-white flex flex-col mt-2 py-1 rounded-lg w-full'>
          {
            dropdownOptions.map((dropdownOption, index) => {
              return <button
                key={index}
                onClick={closeDropDown}
                className='hover:bg-gray-200 cursor-pointer py-2 px-4 text-left'>
                {dropdownOption}
              </button>
            })
          }
        </div>
      }
    </div>
  )
}

export default Dropdown
