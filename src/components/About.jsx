import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>
            </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi! I'm Tript. Nice to meet you. Please take a look around. </p>
            </div>  
            <div>
                <p>With 2 years of experience and a strong background in advanced technology, application
           development, and programming. Currently pursuing a Master's degree in Applied Computer Science at Concordia
           University, eager to apply skills and knowledge to excel in the role of a Software Engineer. Have strong academic
           background, valuable work experience, and a passion for leveraging advanced technologies to solve complex problems.</p>
            </div>          
        </div>
      </div>
    </div>
  )
}

export default About
