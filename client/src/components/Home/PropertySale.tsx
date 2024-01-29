import React, { useState } from "react";
import CartProperty from "../card/CartProperty";
import { useQuery } from "@tanstack/react-query";
import LoadingCpn from "../Loading/LoadingCpn";
import { getAllProperty } from "@/apis/property";

function PropertySale() {
  const [limit, setLimit] = useState<number>(6);

  const getProperyties = async () => {
    try {
      const res = await getAllProperty(limit);
      if (res.success) return res.response;
    } catch (err) {
      console.log(err);
    }
  };
  const { data, isLoading, refetch } = useQuery({
    queryFn: getProperyties,
    queryKey: ["property"],
    refetchOnMount: false,
    staleTime: 100000,
  });
  const handleLoadMore = async () => {
    setLimit(limit + 10);
    refetch();
  };
  return (
    <div className="px-[10%] ">
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
          <div className="grid grid-cols-3 gap-6 pt-8">
            {data?.rows?.map((item: any) => {
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
            onClick={handleLoadMore}
          >
            Load more listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertySale;
