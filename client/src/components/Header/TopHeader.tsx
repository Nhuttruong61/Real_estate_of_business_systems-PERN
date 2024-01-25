"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import { IoMailOpenOutline, IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa6";
import Image from "next/image";
import { activeUser } from "@/static/static";
import withBaseComponent from "@/hocs/withBaseComponent";
import { logout } from "@/redux/slices/userSlice";
function TopHeader({ router, dispatch }: any) {
  const pathname = usePathname();
  const { current } = useSelector((state: any) => state.user);
  const [active, setActive] = useState<boolean>(false);
  const array: any = [];
  const ref = useRef<any>(null);
  activeUser.forEach((item) => {
    if (item?.role === current?.role || item.role === "All") {
      array.push(item);
    }
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
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
      <div className="flex justify-center items-center" ref={ref}>
        <div className="flex justify-center items-center px-2 border-r-2">
          <span className="h-[40px] px-2 flex justify-center items-center cursor-pointer">
            <FaFacebookF className="text-[20px]" />
          </span>
          <span className="h-[40px] px-2 flex justify-center items-center cursor-pointer">
            <TiSocialDribbble className="text-[20px]" />
          </span>
          <span className="h-[40px] px-2 flex justify-center items-center cursor-pointer">
            <FaLinkedinIn className="text-[20px]" />
          </span>
          <span className="h-[40px] px-2 flex justify-center items-center cursor-pointer">
            <IoLogoInstagram className="text-[20px]" />
          </span>
        </div>
        <div className="flex justify-center items-center px-4">
          <IoCallOutline className="text-[20px]" />
          <p className="pl-2  font-[400]">0384708361</p>
        </div>
        {current && (
          <div
            className="flex justify-center items-center px-2 relative cursor-pointer"
            onClick={(e) => {
              setActive(!active);
            }}
          >
            <div className="flex flex-col">
              <span className="flex ">
                <p>Name:</p>
                <p className="pl-2">{current?.name}</p>
              </span>
              <span className="flex ">
                <p>Id:</p>
                <p className="pl-2">{current?.id?.slice(0, 6)}</p>
              </span>
            </div>
            <div className="pl-4">
              {current?.avatar ? (
                <div className="rounded-full border  p-4">
                  <Image src={current?.avatar?.url} alt="" />
                </div>
              ) : (
                <div className="rounded-full border bg-white p-4">
                  <FaRegUser className="text-black text-[24px]" />
                </div>
              )}
            </div>
            {active && (
              <div
                className="absolute text-black bg-white z-[10] top-[70px] w-full rounded-sm shadow-sm font-[500]"
                onClick={(e) => e.stopPropagation()}
              >
                {array?.map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="cursor-pointer px-3 hover:bg-[#2c3a61] hover:text-white py-1"
                      onClick={() => router.push(item.href)}
                    >
                      {item.name}
                    </div>
                  );
                })}
                <div
                  className="cursor-pointer px-3 hover:bg-[#2c3a61] hover:text-white py-1"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default withBaseComponent(memo(TopHeader));
