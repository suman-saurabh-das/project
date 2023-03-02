import React from 'react'
import ToggleButton from './ToggleButon'

const buttonList = ["Metaverse", "Defi", "Game", "Media", "Price Tracker", "Gambling", "Marketplace", "Dao", "Others", "Metaverse", "Defi", "Game", "Media", "Price Tracker", "Gambling", "Marketplace", "Dao", "Others"]

const SlidingMenu = () => {
    // Logic to slide left on button click
    const leftSlider = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 200
    }
    // Logic to slide right on button click
    const rightSlider = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 200
    }

    return (
        // Slider Container
        <div className='relative flex items-center justify-center'>

            {/* Slide left button */}
            <button onClick={leftSlider}
                className='border-2 border-gray-200 bg-white hover:scale-105 px-2 py-1 rounded-full shadow-inner text-3xl'>
                <i className="uil uil-angle-left"></i>
            </button>

            {/* Slider button container */}
            <div id='slider' className='flex items-center h-full overflow-x-scroll scroll scroll-smooth scrollbar-hide whitespace-nowrap w-full'>
                <div className='space-x-3'>
                    {
                        buttonList.map((button, index) => {
                            return <ToggleButton className="inline-block" key={index} categoryName={button} />
                        })
                    }
                </div>
            </div>

            {/* Slide right button */}
            <button onClick={rightSlider}
                className='border-2 border-gray-200 bg-white hover:scale-105 px-2 py-1 rounded-full shadow-inner text-3xl'>
                <i className="uil uil-angle-right"></i>
            </button>
        </div>
    )
}

export default SlidingMenu
