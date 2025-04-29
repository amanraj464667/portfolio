import React from 'react'
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiCplusplus, SiExpress, SiMongodb, SiTypescript, SiJavascript, SiFirebase, SiMysql } from 'react-icons/si'
import { CgCPlusPlus } from 'react-icons/cg'
import { motion } from 'framer-motion'

// Helper to generate alternate animation variants with different delays
const getIconVariants = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
      delay
    }
  }
})

const Technologies = () => {
  const icons = [
    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, delay: 0 },
    { icon: <SiMongodb className='text-7xl text-green-500' />, delay: 0.2 },
    { icon: <FaNodeJs className='text-7xl text-green-500' />, delay: 0.4 },
    { icon: <SiExpress className='text-7xl text-white' />, delay: 0.6 },
    { icon: <SiCplusplus className='text-7xl text-blue-400' />, delay: 0.8 },
    { icon: <CgCPlusPlus className='text-7xl text-blue-500' />, delay: 1.0 },
    { icon: <SiTypescript className='text-7xl text-blue-500' />, delay: 1.2 },
    { icon: <SiFirebase className='text-7xl text-yellow-500' />, delay: 1.4 },
    { icon: <FaHtml5 className='text-7xl text-orange-500' />, delay: 1.6 },
    { icon: <FaCss3Alt className='text-7xl text-blue-600' />, delay: 1.8 },
    { icon: <SiJavascript className='text-7xl text-yellow-400' />, delay: 2.0 },
    { icon: <FaGitAlt className='text-7xl text-red-500' />, delay: 2.2 },
    { icon: <FaGithub className='text-7xl text-white' />, delay: 2.4 },
    { icon: <SiMysql className='text-7xl text-blue-700' />, delay: 2.6 },
  ]

  return (
    <div className='pb-24 bg-[#0f0f0f] text-white'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className='my-20 text-center text-4xl text-cyan-300 font-bold'
      >
        Technologies
      </motion.h2>

      <div className='flex flex-wrap items-center justify-center gap-6 px-4'>
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className='p-4'
            variants={getIconVariants(item.delay)}
            initial="initial"
            animate="animate"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
