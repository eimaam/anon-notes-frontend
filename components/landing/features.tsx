"use client"
import React, { FC } from "react";
import { Card, Typography } from "antd";
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

const { Title, Text } = Typography;

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
    <div className="relative text-white dark:bg-secondary w-full py-12">
      <div className="absolute top-0 left-0 right-0 h-12 bg-white dark:bg-secondary -mt-12 rounded-t-[100%]" />
      <div className="!text-white relative z-10 mx-auto md:w-[55%] lg:w-2/3">
        <div className="text-center">
          <Title className="md:!text-5xl font-extrabold">
            Coolest Features Ever
          </Title>
          <Text>
            Discover the endless fun and excitement with our unique app
            features. <br /> Start your adventure now!
          </Text>
        </div>
        <div className="!text-white mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: FC<IFeature> = ({ icon, title, description }) => {
  return (
    <div className="w-[300px] h-[320px] dark:!bg-primary !bg-secondary !text-white !border-none !rounded-2xl !shadow-xl !grid !grid-rows-2 !gap-1 p-6">
      <div className="grid grid-rows-2 gap-4 items-center">
        {icon}
        <Title level={4}>{title}</Title>
      </div>
      <Text className="text-sm mt-4">{description}</Text>
    </div>
  );
};

export default FeaturesSection;
