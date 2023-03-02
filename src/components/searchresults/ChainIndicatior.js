import React from 'react'

const ChainIndicatior = ({ title, color }) => {
  const colorVariants = {
    gray: 'border-gray-800 bg-gray-100 text-gray-900',
    purple: 'border-purple-300 bg-purple-100 text-purple-800',
    yellow: 'border-yellow-300 bg-yellow-100 text-yellow-800',
  }

  return (
    <div className={`border-2 ${colorVariants[color]} font-semibold py-1 px-2 rounded-full text-xs`}>
      {title}
    </div>
  )
}

export default ChainIndicatior
