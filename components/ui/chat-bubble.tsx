import { bgColours } from '@/lib/constants';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

interface IProps {
    thread: string;
    response: string;
    index: number;
}

const ChatBubble: FC<IProps> = ({ thread, response, index }) => {
    const random_positions = [
        "top-[75%] right-32",
        "top-[45%] right-36",
        "top-[15%] right-20",
        "bottom-[47%] left-20",
        "bottom-[20%] left-24",
        "bottom-[75%] left-32",
    ];

    // Use the index to cycle through the positions array in a round-robin fashion
    const position = random_positions[index % random_positions.length];

    // Determine if the position is on the left to adjust the rounded corner
    const roundedCorner = position.includes("left") ? "rounded-tr-none" : "rounded-br-none";

    const bgColor = bgColours[index % bgColours.length];

    // Animation variants for Framer Motion
    const bubbleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index, ease: "easeInOut" } },
    };

    return (
        <motion.div
            className={`absolute ${position} leading-[1.5] w-[270px] min-h-16 p-2 ${roundedCorner} rounded-2xl`}
            style={{ backgroundColor: bgColor }}
            initial="hidden"
            animate="visible"
            variants={bubbleVariants}
        >
            <h2 className='text-sm font-light italic text-black'>
                #{thread}
            </h2>
            <p className='font-normal'>
                {response}
            </p>
        </motion.div>
    );
}

export default ChatBubble;
