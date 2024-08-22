import React from 'react'

export default function HANTER() {
    return (
        <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={() => {
            window.open('https://hanter-meer.onrender.com/', '_blank')
        }}>
            <div className='w-1/4 text-sm text-white mt-1 flex justify-center items-start'>
                <img className='rounded-md w-32' src="../../hanter.png" alt="" />
            </div>
            <div className='flex flex-col w-3/4 ml-3'>
                <div className=''>
                    <div className='text-white text-lg'>HANTER Static Application Security Testing Tool</div>
                    <div className='text-sm mt-2'>
                        <div className='mb-2'>
                            <span className='text-white'>HANTER</span> utilizes rule-based matching to detect code issues, 
                            including <span className='text-white'>security vulnerabilities</span> and performance problems. Features include customizable rule creation, 
                            multiple interfaces (<span className='text-white'>CLI</span> and <span className='text-white'>Web</span> Interfaces)
                        </div>
                    </div>
                    <div className='mt-4 text-xs'>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Next JS</div>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Node JS</div>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Express</div>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>PostgreSQL</div>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>JavaScript</div>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>TypeScript</div>
                        <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>TailwindCSS</div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
