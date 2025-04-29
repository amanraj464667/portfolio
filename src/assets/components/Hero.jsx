import React from 'react';
import profilePic from "../../assets/aman2.jpg";
import { HERO_CONTENT } from '../../constants';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36 bg-black'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:p-8'>
            <motion.img
              src={profilePic}
              alt='Aman Raj'
              className='border border-stone-900 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300'
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-10 text-white'
          >
            <motion.h2
              variants={childVariants}
              className='pb-2 text-4xl tracking-tighter lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500'
            >
              Aman Raj
            </motion.h2>
            <motion.span
              variants={childVariants}
              className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-3xl tracking-tight text-transparent'
            >
              Full-Stack Developer and DSA Enthusiast
            </motion.span>
            <motion.p
              variants={childVariants}
              className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter opacity-80'
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href='/Resume1.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300'
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
