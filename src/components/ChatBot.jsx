import React from 'react'

export default function ChatBot() {
  return (
    <div className='w-2/3 flex p-5 hover:bg-[#283b64] rounded-lg trans cursor-pointer mb-5' onClick={() => {
      window.open('https://openai-chatbot-vanilla.onrender.com', '_blank')
    }}>
      <div className='w-1/4 text-sm text-white mt-1'>
        <img className='rounded-md' src="../../chatbot.png" alt="" />
      </div>
      <div className='flex flex-col w-3/4 ml-3'>
        <div className=''>
          <div className='text-white text-lg'>Open AI Chatbot</div>
          <div className='text-sm mt-2'>
            <div className='mb-2'>
              This project involved developing a <span className='text-white'>chatbot</span> using React JS with Tailwind styling.
              The chatbot's UI design was based on Preline.co, <span className='text-white'>Integration with OpenAI</span> was implemented for dynamic responses.
            </div>
          </div>
          <div className='mt-4 text-xs'>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>React</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>JavaScript</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Tailwindcss</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Preline UI</div>
            <div className='bg-[#122b39] p-2 rounded-2xl text-center mr-1 mb-2 text-[#70e4dc] w-fit inline-block'>Open AI</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
