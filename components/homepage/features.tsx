"use client"
import React, { FC } from "react";
import {
  ShieldCheck,
  Star,
  Archive,
  Share2,
  Image as ImageIcon,
  Link as LinkIcon,
  LifeBuoy,
  Lock,
  ThumbsUp,
} from "lucide-react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { motion, useAnimation, useInView } from "framer-motion";


interface IFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features = [
  {
    icon: <ShieldCheck size={50} />,
    title: "Send Anonymous Messages",
    description:
      "Create a Thread and receive playful, mysterious responses from anyone, anytime! Join the fun and keep them guessing!",
  },
  {
    icon: <LifeBuoy size={50} />,
    title: "Support",
    description:
      "We provide excellent support to help you with any issues or questions you may have.",
  },
  {
    icon: <Lock size={50} />,
    title: "Privacy",
    description:
      "We ensure all responses are very much anonymously submitted, keeping your identity safe.",
  },
  {
    icon: <ThumbsUp size={50} />,
    title: "Ease of Use",
    description:
      "Our app is user-friendly, making it easy for anyone to start sending and receiving anonymous messages.",
  },
  {
    icon: <Star size={50} />,
    title: "Favoriting Replies",
    description:
      "Mark replies as favorites to easily keep track of the most interesting or important responses.",
  },
  {
    icon: <Archive size={50} />,
    title: "Archiving Replies",
    description:
      "Archive replies you want to keep for later, ensuring you don't lose track of valuable interactions.",
  },
  {
    icon: <Share2 size={50} />,
    title: "Share Replies as Images",
    description:
      "Convert replies into cool, shareable images with customizable backgrounds, perfect for sharing on social media.",
  },
  {
    icon: <ImageIcon size={50} />,
    title: "Customizable Thread Backgrounds",
    description:
      "Before sharing a thread link, select a background to make your thread stand out and look unique.",
  },
  //   {
  //     icon: <LinkIcon size={50} />,
  //     title: "Custom Links for Threads",
  //     description: "Generate short, custom links for each thread, making it easy for users to share and access their threads."
  //   },
];

const FeaturesSection = () => {
  return (
    <div id="features" className="relative scroll-smooth dark:bg-secondary w-full py-12 mb-24">
      <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-secondary -mt-12 rounded-t-[100%] !border-none" />
      <div className="relative z-10 mx-auto md:w-[85%] lg:w-3/4">
        <Flex gap="3" direction="column" className="text-center">
          <Heading size="8" className="!text-xl md:!text-4xl lg:!text-5xl font-extrabold">
            Coolest Features Ever
          </Heading>
          <Text>
            Discover the endless fun and excitement with our unique app
            features. <br /> Start your adventure now!
          </Text>
        </Flex>
        <div className="!text-white mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 !justify-center !items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-secondary -mb-12 rounded-b-[100%] !border-none" />
    </div>
  );
};


const FeatureCard: FC<IFeature> = ({ icon, title, description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px"
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      className=" w-[300px] h-[320px] dark:bg-primary bg-secondary text-white border-none rounded-2xl shadow-xl grid grid-rows-2 gap-1 p-6 mx-auto"
    >
      <div className="grid grid-rows-2 gap-4 items-center">
        {icon}
        <Heading size="4">{title}</Heading>
      </div>
      <Text className="text-sm mt-4">{description}</Text>
    </div>
  );
};

export default FeaturesSection;
