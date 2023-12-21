import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

function Button({
  text,
  className = "p-3 text-white bg-[#4a60a1] rounded-md",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
