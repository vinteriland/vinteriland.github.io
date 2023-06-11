import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {animateScroll as scroll} from 'react-scroll'



const Home = () => {
  const handleClick = () => scroll.scrollTo(1700);
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tript Dhudi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Im a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>With 2 years of experience and a strong background in advanced technology, application
           development, and programming. Currently pursuing a Master's degree in Applied Computer Science at Concordia
           University, eager to apply skills and knowledge to excel in the role of a Software Engineer. Have strong academic
           background, valuable work experience, and a passion for leveraging advanced technologies to solve complex problems.</p>
        <div>
            <button onClick={handleClick} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
