import React from 'react'

export default function Natega() {
  return (
    <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={() => {
      window.open('https://az-natiga.onrender.com/', '_blank')
    }}>
      <div className='w-1/4 text-sm text-white mt-1'>
        <img className='rounded-md' src="../../natega.png" alt="" />
      </div>
      <div className='flex flex-col w-3/4 ml-3'>
        <div className=''>
          <div className='text-white text-lg'>Grading System</div>
          <div className='text-sm mt-2'>
            <div className='mb-2'>
              A comprehensive academic tool! It's a website designed to efficiently <span className='text-white'>report college students' grades</span> while offering additional features 
              like <span className='text-white'>data analysis</span> and <span className='text-white'>filtering options</span>.
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
