import React from "react";
import Title from "../layout/Title";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AdminPropetyType({ setActive }: any) {
  return (
    <div className="w-full flex flex-col">
      <Title className="m-2 ">
        <span
          className="flex items-center bg-[#4a60a1] text-white font-[500] px-2 rounded-md py-1 cursor-pointer hover:bg-[#142a6b]"
          onClick={() => setActive(3)}
        >
          <AiOutlinePlusCircle className="text-[20px]" />
          <p className="px-1">Create</p>
        </span>
      </Title>
    </div>
  );
}

export default AdminPropetyType;
