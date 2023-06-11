import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo1.png"
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) 
  return (
    <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
      </div>
      {/*Menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="home"  smooth={true} offset={50} duration={500} >Home</Link>
          </li>
          <li>
            <Link to="about"  smooth={true} offset={50} duration={500} >About</Link>
          </li>
          <li>
            <Link to="skills"smooth={true} offset={50} duration={500} >Skills</Link>
          </li>
          <li>
            <Link to="work"smooth={true} offset={50} duration={500} >Work</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500} >Contact</Link>
          </li>
        </ul>

      {/*Hamburger */}
      <div onClick ={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/*Mobile Menu */}
      <ul className = {!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className ='py-6 text-4xl'>
        <Link onClick={handleClick} to="home"  smooth={true} offset={50} duration={500} >Home</Link>
        </li>
        <li className ='py-6 text-4xl'>
        <Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500} >About</Link>
        </li>
        <li className ='py-6 text-4xl'>
        <Link onClick={handleClick} to="skills"  smooth={true} offset={50} duration={500} >Skills</Link>
        </li>
        <li className ='py-6 text-4xl'>
        <Link onClick={handleClick} to="work"  smooth={true} offset={50} duration={500} >Work</Link>
        </li>
        <li className ='py-6 text-4xl'>
        <Link onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500} >Contact</Link>
        </li>
      </ul>
      {/*Social Icons */}
      <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/tript-dhudi-4b94a5188/'>
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161b22] rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/vinteriland'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='tript.singh101@gmail.com'>
              GMail <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href=''>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
