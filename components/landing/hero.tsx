import Navbar from '@/components/NavBar';
import { Button } from 'antd';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className='w-full mb-20'>
      <Navbar />
      <div className='w-2/3 mt-[8.5%] mx-auto h-[70%] md:gap-16 items-center grid grid-cols-2'>
        <motion.div 
          className='flex flex-col gap-4'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className='text-5xl leading-[1.4] font-extrabold'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            The Ultimate App for <br /> Anonymous Fun!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Create and share anonymous notes or messages with friends, family, or the public. Dive into the fun today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Button
              className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              size="large"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className='mx-auto'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Image 
            src="/hero1.jpeg"
            alt="hero image"
            width={600}
            height={600}
            className='rounded-3xl rotate-12'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection;
