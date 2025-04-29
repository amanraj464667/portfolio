import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Correct imports
import logo from "../../assets/arlogo.jpg";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img src={logo} className='mx-2' width={50} height={33} alt='Logo' />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/aman-raj-760a9b27a/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
          <FaLinkedin className='text-blue-600' /> {/* LinkedIn Icon in Blue */}
        </a>
        <a href='https://github.com/amanraj464667' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <FaGithub/> {/* GitHub Icon in Dark Gray */}
        </a>
        <a href='https://www.instagram.com/_aman_raj_4/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
          <FaInstagram className='text-pink-500' /> {/* Instagram Icon in Pink */}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
