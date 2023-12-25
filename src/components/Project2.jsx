import React from 'react'

export default function Project2() {
  return (
    <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={()=>{
      window.open('https://github.com/Norhanahmedsaber/HANT_Electronics_FrontEnd', '_blank')
    }}>
      <div className='w-1/4 text-sm text-white mt-1 flex justify-center items-start'>
        <img className='rounded-md w-20' src="../../public/elec1.png" alt="" />
      </div>
      <div className='flex flex-col w-3/4 ml-3'>
        <div className=''>
          <div className='text-white text-lg'>Electronics Circuit Helper</div>
          <div className='text-sm mt-2'>
            <div className='mb-2'>
              Application that helps electronics engineers that wants to connect different electronics circuits
              doing their job by <span className='text-white'>finding their components</span>, giving them each <span className='text-white'>component prices </span> 
              and <span className='text-white'>vendors</span> near them,
              also give them details and information about their circuit 
            </div>
          </div>
          <div className='mt-4 text-xs'>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>React Native</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Node JS</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Express</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>PostgreSQL</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>JavaScript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>TypeScript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Tailwindcss</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
