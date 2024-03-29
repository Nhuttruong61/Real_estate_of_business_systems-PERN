import React, { memo } from "react";

interface ButtonProps {
  text: any;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onBlur?: any;
}

function Button({
  text,
  className = "px-4 text-white bg-[#4a60a1] rounded-md py-1",
  onClick,
  type = "button",
  disabled = false,
  onBlur,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onBlur={onBlur}
    >
      {text}
    </button>
  );
}
export default memo(Button);
