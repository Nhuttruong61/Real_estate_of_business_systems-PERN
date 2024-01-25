import React, { memo } from "react";

interface PropInput {
  value?: string | number;
  placeholder?: string;
  type?: any;
  onChange?: any;
  minLength?: number;
  pattern?: string | undefined;
  title?: string | undefined;
  readOnly?: boolean;
}
function Input({
  value,
  placeholder,
  type,
  onChange,
  minLength,
  pattern,
  title,
  ...rest
}: PropInput) {
  return (
    <input
      className="w-full  bg-[#e9e4e4] outline-none py-1 px-2 border rounded-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:rounded-sm "
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      minLength={minLength ? minLength : 3}
      pattern={pattern && pattern}
      title={title && title}
      value={value}
      {...rest}
      required
    />
  );
}

export default memo(Input);
