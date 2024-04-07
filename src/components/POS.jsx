import React from 'react'

export default function POS() {
  return (
    <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={()=>{
      window.open('https://github.com/Norhanahmedsaber/HANT_POS', '_blank')
    }}>
      <div className='w-1/4 text-sm text-white mt-1 flex justify-center items-start'>
        <img className='rounded-md' src="../../pos1.png" alt="" />
      </div>
      <div className='flex flex-col w-3/4 ml-3'>
        <div className=''>
          <div className='text-white text-lg'>Point Of Sale</div>
          <div className='text-sm mt-2'>
            <div className='mb-2'>
              POS <span className='text-white'>(Point Of Sale)</span> and a <span className='text-white'>Store Management System</span> that can fit any
              type of store regardless of its purpose with a <span className='text-white'>permission-based</span> user
              service to make it more convenient to store stakeholders to manage permissions between different users
            </div>
          </div>
          <div className='mt-4 text-xs'>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Swing</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Java</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Desktop Development</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>MySQL</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Authentication</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Authorization</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
