import React from 'react'

export default function Broadcast() {
  return (
    <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={()=>{
      window.open('https://az-broadcast.onrender.com', '_blank')
    }}>
      <div className='w-1/4 text-sm text-white mt-1 flex justify-center items-start'>
        <img className='rounded-md' src="../../broadcast.png" alt="" />
      </div>
      <div className='flex flex-col w-3/4 ml-3'>
        <div className=''>
          <div className='text-white text-lg'>AZ Broadcast</div>
          <div className='text-sm mt-2'>
            <div className='mb-2'>
              AZ-Broadcast is a dynamic platform that supports <span className='text-white'>shared audio player</span> for channels with a <span className='text-white'>shared audio player</span>.
              It is a groundbreaking platform that revolutionizes the way we share and enjoy audio content with friends in real-time!
            </div>
          </div>
          <div className='mt-4 text-xs'>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>React</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Electron JS</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Express</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Socket.io</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Web RTC</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>NodeJS</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Javascript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Typescript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Tailwindcss</div>

          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
