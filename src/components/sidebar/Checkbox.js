import React from 'react'

const Checkbox = ({ category }) => {
    return (
        <>
            {/* Sidebar -> Checkbox and horizontal line separator */}
            <div className='flex items-center mt-5 px-4 space-x-4 text-base'>
                <input type="checkbox" className='accent-black h-5 w-5' />
                <label htmlFor={category}>{category}</label>
            </div>
            <hr className='mt-5 text-gray-300' />
        </>
    )
}

export default Checkbox
