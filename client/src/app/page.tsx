"use client";
import React, { useEffect, useState } from "react";
import background from "../../public/images/backgound.png";
import HeaderLayout from "@/components/Header/HeaderLayout";
import SearchLocation from "@/components/Home/SearchLocation";
import PropertyLocation from "@/components/Home/PropertyLocation";
import PropertyType from "@/components/Home/PropertyType";
import PropertySale from "@/components/Home/PropertySale";
import Propertyoutstanding from "@/components/Home/Propertyoutstanding";
import Contact from "@/components/Home/Contact";

export default function Home() {
  const [valueSearch, setValueSearch] = useState<any>({});

  return (
    <main className="flex  flex-col w-full ">
      <div
        className="bg-cover bg-no-repeat w-full z-40 h-full relative top-0"
        style={{
          ...(window.innerWidth >= 640 && {
            backgroundImage: `url(${background.src})`,
            height: "752px",
            backgroundRepeat: "no-repeat",
          }),
          ...(window.innerWidth <= 640 &&
            window.innerWidth > 480 && {
              backgroundImage: `url(${background.src})`,
              height: "480px",
              backgroundRepeat: "no-repeat",
            }),
          ...(window.innerWidth <= 480 && {
            backgroundImage: `url(${background.src})`,
            height: "300px",
            backgroundRepeat: "no-repeat",
          }),
        }}
      >
        <div className="w-full hidden md:block">
          <HeaderLayout />
        </div>
        <div className="absolute gap-4 w-full h-[70%] flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white">
            Find Your Dream Home
          </h1>
          <div className=" text-white justify-center text-center">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
            Proin sodales ultrices nulla blandit volutpat.
          </div>
        </div>
        <div className="absolute w-full z-50 bottom-[-30px] md:flex justify-center hidden">
          <SearchLocation
            valueSearch={valueSearch}
            setValueSearch={setValueSearch}
          />
        </div>
      </div>
      <div className="w-full px-[10%]">
        <PropertyLocation />
      </div>
      <div className="w-full bg-[#edeff6] my-8">
        <PropertyType />
      </div>
      <div className="w-full ">
        <PropertySale />
      </div>
      <div className="w-full ">
        <Propertyoutstanding />
      </div>
      <div className="w-full py-16 ">
        <Contact />
      </div>
    </main>
  );
}
