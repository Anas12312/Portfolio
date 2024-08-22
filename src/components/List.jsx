import React from 'react'
import Experience from './Experience'
import Experience2 from './Experience2'
import Management from './Managment'
import Broadcast from './Broadcast'
import Natega from './Natega'
import POS from './POS'
import Electronics from './Electronics'
import Survey from './Survey'
import ChatBot from './ChatBot'
import Vectorize from './Vectorize'
import HANTER from './HANTER'

export default function List() {
  return (
    <div className='fixed flex justify-start flex-col left-1/2 h-full w-1/2 overflow-y-scroll pb-10'>
        <div className='flex flex-col justify-end items-start w-full text-[#8a99ad] p-4 h-[26rem] mt-20'>
            <div className='w-2/3 text-xl font-Inter'>
              <span className='text-white'>Ambitious and Approachable Software Engineer</span> equipped with High
              knowledge about core Computer science principles, looking forward to
              improve my skills and gain as much experience and knowledge in Software
              engineering as possible.
              <br></br>
              <br></br>
              Throughout my (6 years) Software Engineering learning journey, In order to
              improve significantly I have focused on writing as much code as possible
              while trying to achieve scalable and well-documented solutions.
            </div>
        </div>
        <div className='w-full mb-4'>
            <Experience />
            <Experience2 />
        </div>
        <div onClick={()=>{
          window.open('./anas.pdf', '_blank')
        }} className='my-2 w-fit flex justify-center items-center border-b-2 text-white cursor-pointer trans hover:border-b-2 hover:border-b-teal-400'>
          View Full Resumé
        </div>
        <div className='h-20 my-20 w-full'></div>
        <HANTER />
        <Management />
        <Broadcast />
        <Natega />
        <ChatBot />
        <Vectorize />
        <POS />
        <Electronics />
        {/* <Survey /> */}
        <div onClick={()=>{
          window.open('https://www.github.com/anas12312', '_blank')
        }} className='my-2 w-fit flex justify-center items-center border-b-2 text-white cursor-pointer trans hover:border-b-2 hover:border-b-teal-400'>
          View All Projects
        </div>
        <div className='h-20 mb-10 w-full'></div>
    </div>
  )
}
