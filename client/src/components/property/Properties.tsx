"use client";
import { getAllProperty, getAllSort } from "@/apis/property";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import LoadingCpn from "../Loading/LoadingCpn";
import CartProperty from "../card/CardProperty";
import { optiionSort } from "@/static/static";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import withBaseComponent from "@/hocs/withBaseComponent";
import { fetchPropertyType } from "@/redux/slices/propertyTypeSlice";
function Properties({ dispatch }: any) {
  const [limit, setLimit] = useState<number>(9);
  const [active, setActive] = useState<number>(1);
  const [options, setOptions] = useState<any>({
    sort: "name",
    filter: "",
  });

  const getProperties = async (options: any, limit: number) => {
    try {
      const res = await getAllSort(
        options.sort,
        options.filter,
        limit,
        options.page
      );
      if (res.success) return res;
    } catch (err) {
      console.log(err);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["property", options.sort, options.filter, limit, options.page],
    queryFn: () => getProperties(options, limit),
    refetchOnMount: false,
    staleTime: 1000 * 600,
  });

  const handleSort = (e: any) => {
    setOptions({ ...options, sort: e.target.value });
  };
  const handleChangfilter = (item: any) => {
    setActive(item.id);
    setOptions({ ...options, filter: item.name });
  };
  const handlePanigate = (e: any) => {
    setOptions({ ...options, page: e });
  };
  const getPropertyType = async () => {
    const res = await dispatch(fetchPropertyType());
    return res.payload;
  };
  const { data: dataType } = useQuery({
    queryKey: ["propertyType"],
    queryFn: getPropertyType,
    staleTime: 1000 * 600,
  });

  return (
    <div className="px-[12%] pt-10">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className=" flex items-center">
            <span className="pr-2">
              <CiBoxList className="text-[20px]" />
            </span>
            <p className="pr-2">Sort by:</p>
            <select
              onChange={handleSort}
              className="outline-none px-2 py-1 border rounded-sm"
            >
              <option value="">Defaul Order</option>
              {optiionSort.map((item) => {
                return (
                  <option
                    value={item.value}
                    className="cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex">
            <div
              className="px-2"
              onClick={() => {
                setActive(1);
                setOptions({ ...options, filter: "" });
              }}
            >
              <p
                className={`cursor-pointer hover:text-[#4a60a1] ${
                  active === 1 && "font-[600]"
                }`}
              >
                ALL
              </p>
            </div>
            {dataType?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="px-2"
                  onClick={() => handleChangfilter(item)}
                >
                  <p
                    className={`cursor-pointer hover:text-[#4a60a1] ${
                      active === item.id && "font-[600]"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
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
            <div className="flex justify-center pt-2">
              <Pagination
                total={data?.count}
                pageSize={limit}
                onChange={handlePanigate}
              />
            </div>
          </LoadingCpn>
        </div>
      </div>
    </div>
  );
}

export default withBaseComponent(memo(Properties));
