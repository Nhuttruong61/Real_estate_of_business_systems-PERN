import withBaseComponent from "@/hocs/withBaseComponent";
import { footerItem } from "@/static/static";
import React, { memo } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
function Footer({ router }: any) {
  const handleNavigate = (el: any) => {
    router.push(`${el.link}`);
  };
  return (
    <div className="w-full px-[10%]">
      <div className="grid grid-cols-4 py-10">
        <div className="flex flex-col">
          <div>
            <p className="md:text-xl font-[500] py-2">Contact</p>
            <p className="py-1">Call: +84 384708361</p>
            <p className="py-1">Email: NTHome@gmail.com</p>
          </div>
          <div className="flex ">
            <span className="flex items-center pr-2 cursor-pointer">
              <span className="p-2 bg-[#eceef5]">
                <FaFacebookF className="text-[20px] text-[#4a60a1]" />
              </span>
            </span>
            <span className="flex items-center pr-3 cursor-pointer">
              <span className="p-2 bg-[#eceef5]">
                <FaLinkedinIn className="text-[20px] text-[#4a60a1]" />
              </span>
            </span>
            <span className="flex items-center pr-3 cursor-pointer">
              <span className="p-2 bg-[#eceef5]">
                <FaInstagram className="text-[20px] text-[#4a60a1]" />
              </span>
            </span>
            <span className="flex items-center pr-3 cursor-pointer">
              <span className="p-2 bg-[#eceef5]">
                <TiSocialDribbble className="text-[20px] text-[#4a60a1]" />
              </span>
            </span>
          </div>
        </div>
        {footerItem?.map((item: any) => {
          return (
            <div key={item.id}>
              <p className="md:text-xl font-[500] py-2">{item?.title}</p>
              {item?.item.map((el: any, index: number) => {
                return (
                  <p
                    key={index}
                    className="py-1 cursor-pointer"
                    onClick={() => handleNavigate(el)}
                  >
                    {el.name}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withBaseComponent(memo(Footer));
