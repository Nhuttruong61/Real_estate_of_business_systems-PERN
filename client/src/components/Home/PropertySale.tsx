import React, { useEffect, useState } from "react";
import CartProperty from "../card/CardProperty";
import { useQuery } from "@tanstack/react-query";
import LoadingCpn from "../Loading/LoadingCpn";
import { getAllProperty } from "@/apis/property";

function PropertySale() {
  const [limit, setLimit] = useState<number>(6);

  const getProperyties = async (page: number) => {
    try {
      const res = await getAllProperty(page);
      if (res.success) return res;
    } catch (err) {
      console.log(err);
    }
  };
  const { data, isLoading } = useQuery({
    queryFn: () => getProperyties(limit),
    queryKey: ["property", limit],
    refetchOnMount: false,
    staleTime: 1000 * 600,
  });

  const handleImcreatelimit = () => {
    setLimit((prevLimit) => prevLimit + 6);
  };

  return (
    <div className="px-[12%] ">
      <div className="w-full h-auto">
        <div className="flex flex-col mt-[80px] text-center">
          <h1 className="text-4xl font-[500] pb-5">
            Letest Properties of Rent
          </h1>
          <p className="text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere
          </p>
          <p className="text-gray-400">
            cubilia curae; Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>
        <LoadingCpn isLoading={isLoading}>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 pt-8">
            {data?.response.map((item: any) => {
              return (
                <div key={item.id}>
                  <CartProperty data={item || null} className="" />
                </div>
              );
            })}
          </div>
        </LoadingCpn>
        <div className="my-4  w-full flex justify-center">
          <button
            className="bg-[#4a60a1] px-3 h-[48px] font-[500]  rounded-md text-white"
            onClick={handleImcreatelimit}
            disabled={data?.count <= data?.response?.length}
          >
            Load more listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertySale;
