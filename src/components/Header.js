import React from 'react'

import LogoImage from '../assets/logo-image.svg'
import LogoName from '../assets/logo-name.svg'
import SearchBar from './header/SearchBar'

const Header = () => {
    return (
        // Header Container
        <div className='border-b-[1px] border-gray-300 flex items-center justify-between px-3 sm:px-12 py-3 space-x-3'>

            {/* Brand Logo & Navigation Options Container */}
            <div className='flex space-x-6'>
                {/* Brand Logo Container */}
                <div className='flex'>
                    <div>
                        <img src={LogoImage} alt="company logo" />
                    </div>
                    <div className='sm:block hidden'>
                        <img src={LogoName} alt="company name" />
                    </div>
                </div>
                {/* Navigation Options */}
                <div className='sm:flex hidden items-center space-x-6'>
                    <button className='font-medium'>Products</button>
                    <button className='font-medium'>Resources</button>
                    <button className='font-medium'>Leaderboard</button>
                </div>
            </div>

            {/* Search Bar & Hamburger Menu Container */}
            <div className='flex items-center space-x-3'>
                {/* Search Bar */}
                <SearchBar />
                {/* Hamburger Menu */}
                <button className='aspect-square border-2 sm:hidden px-[6px] py-[1px] rounded-full shadow-inner'>
                    <i class="uil uil-bars text-lg"></i>
                </button>
            </div>
        </div>
    )
}

export default Header
