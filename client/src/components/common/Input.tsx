import React, { memo } from "react";

interface PropInput {
  value: string | number;
  setValue: any;
  placeholder?: string;
  type?: any;
}
function Input(props: PropInput) {
  return (
    <input
      className="w-full  bg-[#e9e4e4] outline-none py-1 px-2 border rounded-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:rounded-sm "
      onChange={(e) => props.setValue(e.target.value)}
      placeholder={props.placeholder}
      type={`${props.type === true ? "text" : "password"}`}
    />
  );
}

export default memo(Input);
