import React, { ReactNode, memo } from "react";
import { IoMdClose } from "react-icons/io";
interface PropsModal {
  show: boolean;
  setIsShownModal: (show: boolean) => void;
  showFooterModal?: boolean;
  handleOK?: any;
  children: ReactNode;
  title?: string;
  className?: string;
}
function Modal(props: PropsModal) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className="fixed  inset-0 bg-[#0000004b] z-40  flex justify-center items-center text-black "
      onClick={() => {
        props.setIsShownModal(false);
      }}
    >
      <div
        className={`bg-white min-w-[80%] md:min-w-[30%] rounded-md z-50 max-h-[80%] w-[50%] overflow-y-auto zoom ${
          props.className && props.className
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex justify-end mt-2 mr-2 ${
            props.title && "justify-between"
          }`}
        >
          {props?.title && <h2 className="px-2 font-[600] ">{props.title}</h2>}
          <span
            className="text-black p-1 text-[28px] hover:bg-slate-200 rounded-full cursor-pointer"
            onClick={() => {
              props.setIsShownModal(false);
            }}
          >
            <IoMdClose />
          </span>
        </div>
        <div className=" px-[8%]">{props?.children}</div>
        {!props.showFooterModal && (
          <div className="flex justify-end px-3 py-1 my-2">
            <button
              className="border rounded px-3 py-1 cursor-pointer mx-2 hover:bg-red-500  hover:text-white"
              onClick={() => {
                props.setIsShownModal(false);
              }}
            >
              Close
            </button>
            <button
              className="border rounded px-3 py-1  hover:bg-green-600  hover:text-white"
              onClick={props.handleOK}
            >
              Ok
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Modal);
