import React, { memo, ReactNode } from "react";
import { BiLoaderAlt } from "react-icons/bi";
interface ProqLoading {
  isLoading: boolean;
  children: ReactNode;
}

function LoadingCpn({ isLoading, children }: ProqLoading) {
  if (isLoading) {
    return (
      <div className="bg-white w-full flex justify-center ">
        <BiLoaderAlt className="text-[50px] animate-spin min-h-[10vh] text-[#4A60A1]" />
      </div>
    );
  }
  return <div>{children}</div>;
}

export default memo(LoadingCpn);
