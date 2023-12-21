"use client";
import React from "react";
import { IoMailOpenOutline, IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { usePathname } from "next/navigation";
function TopHeader() {
  const pathname = usePathname();
  return (
    <div
      className={`text-white h-[85px] border-b border-white px-[8%] flex justify-between items-center ${
        pathname !== "/" && "bg-[#2c3a61]"
      }`}
    >
      <div className="flex justify-center items-center">
        <IoMailOpenOutline className="text-[28px]" />
        <div className="flex justify-center items-center pl-1">
          <p className="font-[600]">Email us at:</p>
          <p className="pl-2">example@mail.com</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center border-r-2">
          <span className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <FaFacebookF className="text-[20px]" />
          </span>
          <span className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <TiSocialDribbble className="text-[20px]" />
          </span>
          <span className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <FaLinkedinIn className="text-[20px]" />
          </span>
          <span className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <IoLogoInstagram className="text-[20px]" />
          </span>
        </div>
        <div className="flex justify-center items-center px-2">
          <IoCallOutline className="text-[20px]" />
          <p className="pl-2  font-[400]">0384708361</p>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
