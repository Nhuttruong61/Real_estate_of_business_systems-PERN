import React, { memo } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  text,
  className = "p-2 text-white bg-[#4a60a1] rounded-md",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
export default memo(Button);
