import Navbar from '@/components/NavBar';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ChatBubble from '../ui/chat-bubble';
import { ISampleResponse, SAMPLE_RESPONSES } from '@/lib/constants';

const HeroSection = () => {
  const [responses, setResponses] = useState<ISampleResponse[]>([]);

  useEffect(() => {
    const shuffledChats:ISampleResponse[] = SAMPLE_RESPONSES.sort(() => 0.5 - Math.random()).slice(0, 5);
    setResponses(shuffledChats);

    const timer = setInterval(() => {
      const newChats:ISampleResponse[] = SAMPLE_RESPONSES.sort(() => 0.5 - Math.random()).slice(0, 5);
      setResponses(newChats);
      console.log('Updated responses:', newChats); // Debug log
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full bg-[#710DF2] dark:bg-primary h-[90vh] '>
      <Navbar />
      <div className='w-2/3 mt-[7.8%] mx-auto md:gap-16 !items-center !justify-center grid grid-rows-2'>
        <motion.div 
          className='flex flex-col text-center gap-4 text-white'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className='text-[68px] leading-[1.4] font-extrabold'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            The Ultimate App for <br /> Anonymous Fun!
          </motion.h1>
          <motion.p
            className='text-xl tracking w-[60%] mx-auto font-light'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Create and share anonymous notes or messages with friends, family, or the public. <br /> Dive into the fun today!
          </motion.p>
        </motion.div>
        <motion.div
          className='w-[55%] text-[40px] mx-auto'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <button title="Create a Thread & Get Responses" className='flex items-center justify-center shadow-lg whitespace-nowrap w-full hover:animate-pulse transform  translate-x-0 hover:bg-white dark:hover:text-white hover:text-primary py-6 px-10 bg-[#710DF2] dark:bg-secondary border-8 border-[#FED000] dark:border-white rounded-[200px]'>
            Get Started <ChevronRight fontSize={48} size={50} className='animate-pulse text-light-gray'/>
          </button>
        </motion.div>
        {responses.map((chat: { thread: string, response: string }, index) => (
          <ChatBubble key={chat.response} index={index} thread={chat.thread} response={chat.response} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
