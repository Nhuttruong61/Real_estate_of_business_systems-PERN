"use client";
import React, { memo } from "react";
import { getAllcity } from "@/apis/province";
import { useQuery } from "@tanstack/react-query";

function SearchLocation({ valueSearch, setValueSearch }: any) {
  const fetchCity = async () => {
    const res = await getAllcity();
    return res.data;
  };
  const { data: listCity } = useQuery({
    queryKey: ["city"],
    queryFn: fetchCity,
    retry: 2,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });
  const handleOnchage = (e: any) => {
    setValueSearch({ ...valueSearch, city: e.target.value });
  };
  return (
    <div className=" bg-white  shadow-sm rounded-md ">
      <div className="flex items-center justify-between md:h-[128px] md:w-[1096px]">
        <div className="flex flex-col justify-center items-center w-full border-r-2">
          <h1 className="pb-2 font-[500]">Location</h1>
          <select
            className="outline-none"
            name=""
            id=""
            onChange={handleOnchage}
          >
            <option value="" className="text-gray-400">
              Select your city
            </option>
            {listCity?.map((item: any) => {
              return (
                <option value={item.name} key={item.code}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center  w-full border-r-2 ">
          <h1 className="pb-2 font-[500]">Property Type</h1>
          <select
            className="outline-none"
            name=""
            id=""
            onChange={handleOnchage}
          >
            <option value="" className="text-gray-400">
              Select property type
            </option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center  w-full border-r-2">
          <h1 className="pb-2 font-[500]">Rent Range</h1>
          <select className="outline-none" name="" id="">
            <option value="" className="text-gray-400">
              Select rent city
            </option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center  w-full  ">
          <button className="bg-[#4a60a1] w-[102px] h-[48px]  rounded-md text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(SearchLocation);
