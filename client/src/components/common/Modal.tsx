import React from "react";

function Modal(prop: any) {
  return (
    <div className="w-full fixed bg-gray-800 text-[100px] h-screen text-white z-50 opacity-70 justify-center items-center flex flex-col">
      {prop?.children}
    </div>
  );
}

export default Modal;
