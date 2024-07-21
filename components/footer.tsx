"use client"
import { FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { Divider } from "antd";
import { Heading, Text } from "@radix-ui/themes";


const Footer = () => {
  return (
    <div className="relative !w-full !text-white pt-12 mt-24 pb-4 bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-24 bg-secondary -mt-12 rounded-t-[100%] !border-none" />
      <div className="md:w-[70%] rounded-t-[60%] lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-4 !items-center !justify-center gap-6 md:gap-4">
        <div>
          <Heading align={{
            initial: "center",
            md: "left",
            lg: "left"
          }} className="!text-white">anon-notes</Heading>
        </div>
        <div className="text-center flex-wrap text-sm md:col-span-2 grid grid-cols-1 gap-3 md:grid-cols-3 items-center justify-center w-full">
          <Link href="" target="_blank">Privacy Policy</Link>
          <Link href="" target="_blank">Terms & Conditions</Link>
          <Link href="" target="_blank">Source Code</Link>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-4">
          <Link href="https://github.com/eimaam/anon-notes-frontend.git" target="_blank">
            <FaGithub size={30} />
          </Link>
          <Link href="#" target="_blank">
            <FaTwitter size={30} />
          </Link>
        </div>
      </div>
      <Divider />
      <Text as="p" size="1" align="center" className="!mx-auto !w-full">
        © {new Date().getFullYear()} anon-notes. All rights reserved.
      </Text>
    </div>
  );
};

export default Footer;
