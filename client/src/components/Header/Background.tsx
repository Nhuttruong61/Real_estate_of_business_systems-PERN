import React from "react";
import Image from "next/image";
import Rectangle25 from "../../../public/images/background/Rectangle25.png";
function Background({ pathname }: any) {
  return (
    <div className="w-full justify-center ">
      <div className="relative w-full">
        <Image src={Rectangle25} alt="" className="w-full" />
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-white font-[500] text-2xl">
            {pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Background;
