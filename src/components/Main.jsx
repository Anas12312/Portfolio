import React, { useRef } from 'react'

export default function Main() {

    const myRef = useRef(null)

    return (
        <div className='fixed right-1/2 h-full w-[35rem] flex flex-col justify-start p-5 pt-20'>
            <div className='w-full flex justify-center items-center'>
                <img  className="h-52 w-52 rounded-full" src="../../public/2.jpg" alt="" />
                <div className='w-60'></div>
            </div>
            <div className='h-50 w-2/3'>
                <div className='m-2 mt-8 text-5xl font-bold text-white'>Anas Hesham</div>
                <div className='m-2 my-4 text-xl font-bold text-white'>Full-Stack Web Developer</div>
                <div className='m-2 text-[#8a99ad]'>I build exceptional and accessible digital experiences for the web.</div>
            </div>
            <div className='w-full h-1/4 p-2 flex flex-col'>
                
            </div>
            <div className='bottom-0 h-32 absolute w-full flex justify-start items-center p-5'>
                <div className='hover:cursor-pointer rounded-full mr-10' onClick={()=>{
                    window.open('https://www.github.com/anas12312', '_blank')
                }}>
                    <img className='w-8' src="../../public/github-not-hovered.png" alt="" />
                </div>
                <div className='hover:cursor-pointer rounded-full mr-20' onClick={()=>{
                    window.open('https://www.linkedin.com/in/anas-hesham-87871a19a/', '_blank')
                }}>
                    <img className='w-8' src="../../public/linkedin-not-hovered.png" alt="" />
                </div>
                {/* <div className='hover:cursor-pointer rounded-full mr-20' onClick={()=>{
                    window.open('https://www.github.com/anas12312', '_blank')
                }}>
                    <img className='w-8' src="../../public/instagram-not-hovered.png" alt="" />
                </div> */}
            </div>
        </div>
  )
}