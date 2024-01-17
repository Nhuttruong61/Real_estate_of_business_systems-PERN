import React, { Fragment, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { itemSettings, sideBarItem } from "@/static/data";
import { useDispatch, useSelector } from "react-redux";
import {
  cleartoken,
  fetchCurrentUser,
  logout,
  updateToken,
} from "@/redux/slices/userSlice";
import { refreshTokenApi } from "@/apis/auth";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
interface proqLayout {
  active: number;
  setActive: any;
}
const SideBar = ({ active, setActive }: proqLayout) => {
  const [activeTab, setActiveTab] = useState<any>([]);
  const [activeSetting, setActiveSetting] = useState<boolean>(false);
  const { token, refreshtoken, current, isloading } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (token) dispatch(fetchCurrentUser(token));
  }, [token]);

  const fetchToken = async () => {
    if (token && current === null) {
      try {
        const res = await refreshTokenApi(refreshtoken);
        dispatch(updateToken(res.token));
      } catch (err) {
        dispatch(cleartoken(null));
      }
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);
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
  const handleSetting = (el: any) => {
    switch (el.key) {
      case "Logout": {
        dispatch(logout());
        router.push("/");
        break;
      }
      case "Go Home":
        return router.push("/");
    }
  };
  return (
    <div className="flex flex-col h-screen shadow  md:min-w-[240px]">
      <div className="flex flex-col justify-center items-center h-[10%]">
        {current?.avatar ? (
          <span className=" rounded-full">
            <Image src={current.avatar} alt="" />
          </span>
        ) : (
          <div className="py-2 ">
            {" "}
            <FaRegUser className="text-[30px]" />
          </div>
        )}

        <p>{current?.name}</p>
      </div>
      <div className=" h-[80%]  flex flex-col justify-between ">
        <div className=" overflow-y-auto">
          {sideBarItem.map((el: any, index) => (
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
                        <el.icon className="text-[24px]" />
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
        </div>
        <div className="h-[10%]">
          <div
            className={` flex overflow-y-auto justify-between items-center px-2 py-1 cursor-pointer hover:bg-[#ebebeb] hover:text-black ${
              active === 10 && "bg-[#4385f5] text-white"
            }`}
            onClick={() => setActiveSetting(!activeSetting)}
          >
            <div className="flex items-center">
              <span>
                <IoSettingsOutline className="text-[24px]" />
              </span>
              <p className="hidden sm:block font-[500] pl-2">Settings</p>
            </div>
            {!activeSetting ? (
              <IoIosArrowDown className="text-[24px]" />
            ) : (
              <IoIosArrowUp className="text-[24px]" />
            )}
          </div>
          {activeSetting && (
            <Fragment>
              {itemSettings.map((el, index) => {
                return (
                  <div
                    key={index}
                    className="flex  overflow-y-auto items-center px-2 py-1 cursor-pointer hover:bg-[#ebebeb] hover:text-black"
                    onClick={() => handleSetting(el)}
                  >
                    <el.icon className="text-[24px]" />
                    <p className="hidden sm:block font-[500] pl-2">{el.name}</p>
                  </div>
                );
              })}
            </Fragment>
          )}
        </div>
      </div>
      <Loading loading={isloading} />
    </div>
  );
};

export default SideBar;
