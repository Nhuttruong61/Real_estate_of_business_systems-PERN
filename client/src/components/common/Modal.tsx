import React, { ReactNode, memo } from "react";
import { IoMdClose } from "react-icons/io";
interface PropsModal {
  width?: number;
  show: boolean;
  setIsShownModal: (show: boolean) => void;
  showFooterModal?: boolean;
  handleOK?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
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
        className={`bg-white min-w-[80%] md:min-w-[30%] rounded-md z-50 max-h-[80%] overflow-y-auto ${
          props.width
            ? `md:w-[${props.width}%]  w-[80%]`
            : " sm:w-[50%] md:w-[60%] lg:w-[40%] w-[80%]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mt-2 mr-2">
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
            <span
              className="border rounded px-3 py-1 cursor-pointer mx-2 hover:bg-red-500  hover:text-white"
              onClick={() => {
                props.setIsShownModal(false);
              }}
            >
              Close
            </span>
            <span
              className="border rounded px-3 py-1 cursor-pointer hover:bg-green-600  hover:text-white"
              onClick={props.handleOK}
            >
              Ok
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Modal);
