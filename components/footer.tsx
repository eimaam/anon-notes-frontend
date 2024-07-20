"use client"
import Title from "antd/es/typography/Title";
import { FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { Divider, Typography } from "antd";

const { Text } = Typography;

const Footer = () => {
  return (
    <div className="!w-full !text-white pt-12 pb-4 bg-secondary">
      <div className="md:w-[70%] rounded-t-[60%] lg:w-2/3 mx-auto grid grid-cols-4 items-center justify-center">
        <div>
          <Title level={3} className="!text-white">anon-notes</Title>
        </div>
        <div className="text-center text-sm col-span-2 grid grid-cols-3 items-center justify-center w-full">
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms & Conditions</Link>
          <Link href="">Source Code</Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link href="https://github.com/eimaam/anon-notes-frontend.git" target="_blank">
            <FaGithub size={30} />
          </Link>
          <Link href="#" target="_blank">
            <FaTwitter size={30} />
          </Link>
        </div>
      </div>
      <Divider />
      <p className="!w-full !text-center !mx-auto">
        © {new Date().getFullYear()} anon-notes. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
