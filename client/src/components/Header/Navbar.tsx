"use client";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { navbar } from "@/static";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (nav: any) => {
    router.push(nav.href);
  };

  return (
    <div
      className={`py-8 w-full px-[8%] flex justify-between ${
        pathname === "/" ? "text-white bg-none" : "text-black"
      }`}
    >
      <Link
        href="/"
        className="h-full flex  items-center  w-[12%] text-[26px] "
      >
        <IoHomeOutline className=" mr-2 text-[30px]" />
        <p className="font-serif">NTHome</p>
      </Link>
      <div className="flex">
        {navbar.map((nav, index) => {
          return (
            <div key={index} className="flex px-2">
              <Button
                className={`bg-none  ${pathname === nav.href && "font-[700]"} ${
                  nav?.other && "bg-none  border px-2 rounded-md"
                }`}
                text={nav.name}
                onClick={() => handleNavigate(nav)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
