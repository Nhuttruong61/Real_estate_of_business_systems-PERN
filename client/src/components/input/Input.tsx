import React, { memo } from "react";

interface PropInput {
  value: string | number;
  placeholder?: string;
  type?: any;
  onChange?: any;
  minLength?: number;
  pattern?: string | undefined;
  title?: string | undefined;
}
function Input(props: PropInput) {
  return (
    <input
      className="w-full  bg-[#e9e4e4] outline-none py-1 px-2 border rounded-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:rounded-sm "
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      minLength={props.minLength ? props.minLength : 3}
      pattern={props.pattern && props.pattern}
      title={props.title && props.title}
      value={props.value}
      required
    />
  );
}

export default memo(Input);
