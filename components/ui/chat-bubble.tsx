import { bgColours } from '@/lib/constants';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

interface IProps {
    thread: string;
    response: string;
    index: number;
    bgColor: string;
}

const ChatBubble: FC<IProps> = ({ thread, response, index, bgColor }) => {
    const random_positions = [
        "top-[75%] md:!top-[86%] lg:top-[78%] right-8 lg:right-32",
        "top-[27%] md:!top-[30%] right-2 md:right-14 lg:right-22",
        "top-[4%] md:!top-[15%] lg:top-[16%] right-8 md:right-24 lg:right-20",
        "bottom-[77%] md:bottom-[67%] left-8 md:left-18 lg:left-20",
        "bottom-[25%] md:bottom-[10%] left-4 md:left-16 lg:left-24",
        "bottom-[75%] md:left-20 lg:left-32",
    ];

    // Use the index to cycle through the positions array in a round-robin fashion
    const position = random_positions[index % random_positions.length];

    // Determine if the position is on the left to adjust the rounded corner
    const roundedCorner = position.includes("left") ? "rounded-tr-none" : "rounded-br-none";


    // Animation variants for Framer Motion
    const bubbleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index - 0.3, ease: "easeInOut" } },
    };

    return (
        <motion.div
            className={`absolute ${position} leading-[1.5] w-[200px] md:w-[270px] min-h-16 p-2 ${roundedCorner} rounded-xl md:rounded-2xl`}
            style={{ backgroundColor: bgColor }}
            initial="hidden"
            animate="visible"
            variants={bubbleVariants}
        >
            <h2 className='text-xs md:text-sm font-light italic text-black'>
                #{thread}
            </h2>
            <p className='text-xs md:text-base font-normal'>
                {response}
            </p>
        </motion.div>
    );
}

export default ChatBubble;
