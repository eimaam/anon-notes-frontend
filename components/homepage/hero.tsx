import Navbar from '@/components/NavBar';
import { motion } from 'framer-motion';
import ChatBubble from '../ui/chat-bubble';
import { bgColours, ISampleResponse, SAMPLE_RESPONSES } from '@/lib/constants';
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [responses, setResponses] = useState<ISampleResponse[]>([]);

  useEffect(() => {
    const shuffleResponses = () => {
      const shuffledChats = SAMPLE_RESPONSES.sort(() => 0.5 - Math.random()).slice(0, 5);
      const shuffledBgColors = bgColours.sort(() => 0.5 - Math.random()).slice(0, 5);

      setResponses(shuffledChats.map((chat, index) => ({
        ...chat,
        bgColor: shuffledBgColors[index],
      })));
    };

    shuffleResponses();

    const timer = setInterval(() => {
      shuffleResponses();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#710DF2] dark:bg-primary h-[90vh]">
      <Navbar />
      <div className="flex flex-col h-[90%]">
        <div className="lg:w-2/3 flex-grow mx-auto gap-6 md:gap-16 flex flex-col items-center justify-center">
          <motion.div
            className="flex flex-col text-center gap-4 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="z-50 text-lg md:text-5xl lg:text-[60px] leading-[1.4] font-extrabold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Ultimate App for <br /> Anonymous Fun!
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg tracking w-[60%] mx-auto font-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Create and share anonymous notes or messages with friends, family, or the public. <br /> Dive into the fun today!
            </motion.p>
          </motion.div>
          <motion.div
            className="md:w-[44%] lg:w-[55%] text-base md:text-3xl lg:text-[40px] mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <button title="Create a Thread & Get Responses" className="flex items-center justify-center shadow md:shadow-lg whitespace-nowrap w-full hover:animate-pulse transform translate-x-0 hover:bg-white dark:hover:text-white text-white hover:text-primary px-5 md:py-3 lg:py-6 lg:px-10 bg-[#710DF2] dark:bg-secondary border-2 md:border-3 lg:border-6 border-[#FED000] rounded-[40px] md:!rounded-[120px] lg:rounded-[200px]">
              Get Started <ChevronRight size={50} className="animate-pulse text-light-gray sm:hidden" />
            </button>
          </motion.div>
        </div>

          {responses.map((chat, index) => (
            <ChatBubble key={chat.response} index={index} thread={chat.thread} response={chat.response} bgColor={chat.bgColor} />
          ))}
      </div>
    </div>
  );
};

export default HeroSection;
