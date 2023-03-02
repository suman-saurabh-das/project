import React, { useState } from 'react'

const ToggleButton = ({categoryName}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <button onClick={() => setIsActive(!isActive)} 
            className={`${isActive ? "bg-black text-white" : ""} px-4 py-2 rounded-full`}>
            {categoryName}
        </button>
    )
}

export default ToggleButton
