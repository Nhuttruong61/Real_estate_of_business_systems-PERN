"use client";
import React, { useState } from "react";
import background from "../../public/images/backgound.png";
import HeaderLayout from "@/components/Header/HeaderLayout";
import SearchLocation from "@/components/Home/SearchLocation";
import PropertyLocation from "@/components/Home/PropertyLocation";
import PropertyType from "@/components/Home/PropertyType";
import PropertySale from "@/components/Home/PropertySale";
import Propertyoutstanding from "@/components/Home/Propertyoutstanding";

export default function Home() {
  const [valueSearch, setValueSearch] = useState<any>({});
  return (
    <main className="flex  flex-col w-full ">
      <div
        className="bg-cover bg-no-repeat w-full z-40 h-full relative top-0"
        style={{
          backgroundImage: `url(${background.src})`,
          height: "752px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeaderLayout />
        <div className="absolute gap-4 w-full h-[70%] flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white">Find Your Dream Home</h1>
          <div className=" text-white justify-center text-center">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
            Proin sodales ultrices nulla blandit volutpat.
          </div>
        </div>
        <div className="absolute w-full z-50 bottom-[-30px] flex justify-center">
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
    </main>
  );
}
