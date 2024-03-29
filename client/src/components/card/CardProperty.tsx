import Image from "next/image";
import React, { useState } from "react";
interface ProqProperties {
  className: string;
  data: any;
}
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
function CartProperty({ className, data }: ProqProperties) {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={`flex flex-col w-full hover:scale-104 hover:shadow-gray-400 hover:shadow-md hover:scale-105  ${className}`}
    >
      <div className="relative w-full ">
        <div className="w-full ">
          <Image
            src={data.images[0].url || ""}
            alt=""
            width={600}
            height={600}
            className="w-full object-cover md:h-[32vh]  rounded-md"
          />
        </div>
        <div className="w-full flex-col py-1 md:text-2xl px-2">
          <h1 className=" font-[500]">
            {data?.name.length < 30
              ? data?.name.toUpperCase()
              : data?.name.splice(0, 30).toUpperCase() + "..."}
          </h1>
          <p className="text-[#4A60A1] font-bold">$ {data.price}</p>
        </div>
      </div>
      <div className="flex item center text-gray-400 py-1 px-2">
        {data?.bathRoom && (
          <span className="flex items-center pr-2 ">
            <span className="pr-2">
              <IoBedOutline className="text-[28px]" />
            </span>
            <p> {data?.bathRoom}</p>
          </span>
        )}

        <span className="flex items-center pr-2">
          <span className="pr-2">
            <PiBathtub className="text-[28px]" />
          </span>
          <p> {data?.bedRoom}</p>
        </span>
        {data?.propertySize && (
          <span className="flex items-center pr-2">
            <span className="pr-2">
              <BsArrowsFullscreen className="text-[20px]" />
            </span>
            <p> {data?.propertySize}</p>
          </span>
        )}
      </div>
      <div className=" flex justify-between items-center border-t-2  py-2 px-2">
        <div className="flex">
          {data?.ownerInfo && (
            <div className="flex justify-center items-center">
              <span>
                {data?.ownerInfo?.avatar ? (
                  <Image
                    src={data?.ownerInfo?.avatar}
                    alt=""
                    height={28}
                    width={28}
                  />
                ) : (
                  <div className="rounded-full bg-blue-500 p-2 ">
                    <FaRegUser className="text-white text-[24px]" />
                  </div>
                )}
              </span>
              <p className="pl-2 font-[500]">{data?.ownerInfo?.name}</p>
            </div>
          )}
        </div>
        <div className=" flex justify-center items-center">
          <span className="flex items-center pr-2 cursor-pointer">
            <span className="p-2 bg-[#eceef5]">
              <IoShareSocialOutline className="text-[20px] text-[#4a60a1]" />
            </span>
          </span>
          {!active ? (
            <span
              className="flex items-center pr-2 cursor-pointer"
              onClick={handleActive}
            >
              <span className="p-2 bg-[#eceef5]">
                <FaRegHeart className="text-[20px] text-[#4a60a1]" />
              </span>
            </span>
          ) : (
            <span
              className="flex items-center pr-2 cursor-pointer"
              onClick={handleActive}
            >
              <span className="p-2 bg-[#eceef5]">
                <FaHeart className="text-[20px] text-[#4a60a1]" />
              </span>
            </span>
          )}

          <span className="flex items-center pr-2 cursor-pointer">
            <span className="p-2 bg-[#eceef5]">
              <IoAddOutline className="text-[20px] text-[#4a60a1]" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProperty;
