import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-20 px-2 '>
      <h1 className='text-6xl font-bold mx-1 p-3 py-2'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div>
        <button className=' hover: px-9 py-3 m-5 bg-gray-300 text-black '>▶️Play</button>
        <button>More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle
