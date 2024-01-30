import { locationTop } from "@/static/static";
import Image from "next/image";
import React from "react";
import Rectangle14 from "../../../public/images/imgLocation/Rectangle14.png";
import Rectangle11 from "../../../public/images/imgLocation/Rectangle11.png";
import { IoLocationOutline } from "react-icons/io5";
function PropertyLocation() {
  return (
    <div className="w-full">
      <div className="flex flex-col mt-[80px] text-center">
        <p className="text-4xl font-[500] pb-5">Propertice by Area</p>
        <p className="text-gray-400">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere
        </p>
        <p className="text-gray-400">
          cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1 pt-8 pb-4">
        {locationTop.map((item, index) => {
          return (
            <div key={index} className="relative ">
              <Image src={item.img} alt="" />
              <span className="absolute left-0 z-20  text-white top-8 px-6">
                <h1 className=" font-[500]  text-[26px] ">{item.name}</h1>
                <p className="pt-1">25 listings</p>
              </span>
              <span className="absolute left-0 px-6 bottom-8 text-white">
                <IoLocationOutline className="text-[26px]" />
              </span>
            </div>
          );
        })}
      </div>
      <div className="md:flex ">
        <div className="md:w-[880px] w-[400px] relative rounded-md pr-[10px] ">
          <Image
            src={Rectangle14}
            alt=""
            className="object-cover h-[241px] rounded-md"
          />
          <span className="absolute left-0 z-20  text-white top-8 px-6">
            <h1 className=" font-[500]  text-[26px] ">Da Lat</h1>
            <p className="pt-1">25 listings</p>
          </span>
          <span className="absolute left-0 z-20 right-0 text-white top-0 bottom-0  flex justify-center items-center">
            <button className="border border-white px-2 py-1 rounded-md">
              View Detail
            </button>
          </span>
          <span className="absolute left-0 px-6 bottom-8 text-white">
            <IoLocationOutline className="text-[26px]" />
          </span>
        </div>

        <div className=" relative md:pl-[10px] mt-4 md:mt-0 ">
          <Image
            src={Rectangle11}
            alt=""
            className="md:h-[241px] object-cover rounded-md"
          />
          <span className="absolute left-0 z-20  text-white top-8 px-6">
            <h1 className=" font-[500]  text-[26px] ">Ha Noi</h1>
            <p className="pt-1">25 listings</p>
          </span>
          <span className="absolute left-0 px-6 bottom-8 text-white">
            <IoLocationOutline className="text-[26px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyLocation;
