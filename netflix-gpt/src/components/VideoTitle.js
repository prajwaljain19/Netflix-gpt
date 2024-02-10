import React from "react"

const VideoTitle = ({title,overview}) => {

  return (
    <div className="w-screen aspect-video pt-[15%] px-2 absolute text-white bg-gradient-to-r from-black">
      <h1 className='text-6xl font-bold mx-1 p-3 py-2'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div>
        <button className="px-9 py-3 m-5 bg-white text-black rounded-lg hover:bg-opacity-90">▶️Play</button>
        <button className='hover: px-9 py-3 m-5 bg-gray-300 text-black bg-opacity-50 rounded-lg'>More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle
