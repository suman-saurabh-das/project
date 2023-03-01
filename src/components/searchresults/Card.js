import React from 'react'
import ProjectImage from '../../assets/project-image.svg'
import ChainIndicatior from './ChainIndicatior'

const Card = ({ title, body, viewCount, likeCount }) => {
  return (
    <div className='rounded-2xl w-full'>

      {/* Top Car Container */}
      <div className='border-2 border-gray-200 pt-6 px-6 rounded-t-2xl'>
        {/* Project image and buton container */}
        <div className='flex items-start justify-between pb-4'>
          <div className=''>
            <img className='rounded-full' src={ProjectImage} alt="project logo" />
          </div>
          <button className='border-[1px] border-gray-300 hover:scale-110 px-2 py-1 rounded-full text-xl'>
            <i className="uil uil-arrow-up-right"></i>
          </button>
        </div>

        {/* Project Details container */}
        <div>
          <h3 className='font-extrabold text-2xl py-1'>{title}</h3>
          <p className='py-1'>{body}</p>
        </div>
        {/* Project Chain container */}
        <div className='flex py-3 space-x-3'>
          <ChainIndicatior title={"Ethereum"} color={"purple"}/>
          <ChainIndicatior title={"Polygon"} color={"gray"}/>  
          <ChainIndicatior title={"Binance"} color={"yellow"}/>
        </div>
      </div>

      {/* Bottom Card Container */}
      <div className='border-2 border-t-0 border-gray-200 bg-gray-100 font-medium py-3 px-6 rounded-b-2xl'>
        {/* View and Like container */}
        <div className='flex items-center justify-between'>
          <div className='space-x-2'>
            <i className="uil uil-eye text-xl"></i>
            <span>{viewCount}</span>
          </div>
          <button className='bg-white px-3 py-1 rounded-full hover:text-pink-600 space-x-2'>
            <i className="uil uil-heart text-lg"></i>
            <span>{likeCount} like</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
