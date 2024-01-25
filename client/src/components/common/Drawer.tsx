import React from "react";
import { IoClose } from "react-icons/io5";
interface ProqsDrawer {
  isShowDrawer: boolean;
  setIsShowDrawer: (value: boolean) => void;
  title: string;
  children: React.ReactElement;
  className?: string;
}

function Drawer({
  isShowDrawer,
  setIsShowDrawer,
  title,
  children,
  className,
}: ProqsDrawer) {
  if (!isShowDrawer) {
    return null;
  }

  return (
    <div
      className="fixed  inset-0 bg-[#0000004b] z-40  flex justify-end items-center text-black "
      onClick={() => setIsShowDrawer(false)}
    >
      <div
        className={`bg-white h-screen left-side ${className && className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex border-b py-4 items-center px-2">
          <span
            className="cursor-pointer hover:text-red-600"
            onClick={() => {
              setIsShowDrawer(false);
            }}
          >
            <IoClose className="text-[24px]" />
          </span>
          <p className="font-[500]"> {title}</p>
        </div>
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
