import React from 'react'

export default function Management() {
  return (
    <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={()=>{
      window.open('https://az-managment.onrender.com', '_blank')
    }}>
      <div className='w-1/4 text-sm text-white mt-1'>
        <img className='rounded-md' src="../../az1.png" alt="" />
      </div>
      <div className='flex flex-col w-3/4 ml-3'>
        <div className=''>
          <div className='text-white text-lg'>Resource Management Platform</div>
          <div className='text-sm mt-2'>
            <div className='mb-2'>
              A platform that holds team resources like <span className='text-white'>links, files and images</span> in an organized matter, 
              has a <span className='text-white'>task managment</span> and <span className='text-white'>notes app</span> integrated in it 
            </div>
          </div>
          <div className='mt-4 text-xs'>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Next JS</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Node JS</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Express</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>JavaScript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>TypeScript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Tailwindcss</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>MongoDB</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
