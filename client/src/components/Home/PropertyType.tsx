import { getAllPropertyType } from "@/apis/propertyType";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
function PropertyType() {
  const fetchPropertyType = async () => {
    try {
      const res = await getAllPropertyType();
      let format = [];
      format = res.response.map((el: any, index: number) => {
        return {
          ...el,
          createdAt: moment(`${el.createdAt}`, "YYYY/MM/DD").fromNow(),
          stt: index + 1,
        };
      });
      return format;
    } catch (e) {}
  };
  const queryPropertyType = useQuery({
    queryKey: ["propertyType"],
    queryFn: fetchPropertyType,
    retryOnMount: false,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });
  const { isLoading, data: listData } = queryPropertyType;
  {
  }
  return (
    <div className="px-[10%] my-10">
      <div className="w-full h-auto">
        <div className="flex flex-col mt-[80px] text-center">
          <h1 className="text-4xl font-[500] pb-5">Propertice Type</h1>
          <p className="text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere
          </p>
          <p className="text-gray-400">
            cubilia curae; Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-2 grid-cols-1 pt-8 pb-4 h-full overflow-hidden ">
          {listData?.map((item: any) => {
            return (
              <div key={item.id} className="relative cursor-pointer">
                <Image
                  src={item?.images[0]?.url}
                  alt=""
                  width={424}
                  height={242}
                  className="object-cover h-[241px]"
                />
                <span className="absolute left-0 z-20  text-white top-8 px-6">
                  <IoHomeOutline className="text-[42px]" />
                  <p className="font-[400] text-[28px]">{item?.name}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PropertyType;
