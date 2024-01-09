import React, { Fragment, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getCurrentApi } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { sideBarItem } from "@/static/data";
interface proqLayout {
  active: number;
  setActive: any;
}
const SideBar = ({ active, setActive }: proqLayout) => {
  const [activeTab, setActiveTab] = useState<any>([]);
  const featchUser = async () => {
    try {
      const res = await getCurrentApi();
      return res.response;
    } catch (e) {}
  };
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: featchUser,
    retry: 1,
  });
  const handleClickSidebar = (index: number) => {
    setActive(index);
    setActiveTab((value: any) => {
      const isCheck = value.includes(index);
      if (isCheck) return value.filter((el: any) => el !== index);
      else {
        return [...value, index];
      }
    });
  };
  return (
    <div className="flex flex-col h-screen shadow overflow-y-auto md:min-w-[240px]">
      <div className="flex flex-col justify-center items-center">
        {user?.avatar ? (
          <span className=" rounded-full">
            <Image src={user.avatar} alt="" />
          </span>
        ) : (
          <div className="py-2 ">
            {" "}
            <FaRegUser className="text-[30px]" />
          </div>
        )}

        <p>{user?.name}</p>
      </div>
      {sideBarItem.map((el, index) => (
        <Fragment key={index}>
          <div
            className={`flex items-center px-2 py-1 cursor-pointer hover:bg-[#ebebeb] hover:text-black ${
              active === index && "bg-[#4385f5] text-white"
            }`}
            onClick={() => handleClickSidebar(index)}
          >
            <el.icon lassName="text-[24px]" />
            <p className="hidden sm:block font-[500] pl-2">{el.name}</p>

            {el?.type === "Parent" && (
              <div>
                {activeTab.includes(index) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </div>
            )}
          </div>
          {el?.type === "Parent" &&
            el?.sub?.map((item: any) => {
              if (activeTab.includes(index)) {
                return (
                  <div
                    key={index}
                    className={`items-center px-2 py-1 cursor-pointer hover:bg-[#ebebeb] hover:text-black flex
                    ${active === item.active && "bg-[#4385f5] text-white"}
                  }`}
                    onClick={() => setActive(item.active)}
                  >
                    <el.icon lassName="text-[24px]" />
                    <p
                      className={` font-[500] pl-2 ${
                        active === item.active && "block"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              }
            })}
        </Fragment>
      ))}

      <Loading loading={isLoading} />
    </div>
  );
};

export default SideBar;
