import React, { useContext } from 'react'
import Checkbox from './sidebar/Checkbox'
import { SideBarContext } from '../App'

const categoryList = ["Defi", "Metaverse", "NFT", "Games & Collectiable", "AR/VR", "Defi", "Metaverse", "NFT", "Games & Collectiable", "AR/VR",]

const Sidebar = () => {

    const [handleSideBarVisibility, isSidebarVisible] = useContext(SideBarContext)

    return (
        // Sidebar Container
        <div className={`fixed sm:hidden top-0 bottom-0 lg:left-0 bg-[#01010180] w-full z-50 ${isSidebarVisible}`}>
            <div className="bg-white duration-500 overflow-y-auto p-4 fixed top-0 bottom-0 lg:left-0 w-[300px] z-50">
                <div className='text-xs'>

                    {/* Sidebar - Heading and Close button Container */}
                    <div className='flex items-center justify-between p-2'>
                        <h3 className='font-extrabold text-2xl'>Categories</h3>
                        <button onClick={() => handleSideBarVisibility(false)} className='bg-gray-200 sm:hidden px-2 py-1 rounded-full text-2xl'>
                            <i className="uil uil-times"></i>
                        </button>
                    </div>
                    <hr className='mt-3 text-gray-300' />

                    {/* Sidebar - Checkbox Container */}
                    {
                        categoryList.map((category, index) => {
                            return <Checkbox key={index} category={category} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
