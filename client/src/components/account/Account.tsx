import React, { useState } from "react";
import Input from "../common/Input";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
function Account(props: any) {
  const [valueForm, setValueForm] = useState<number>(1);
  const [type, setType] = useState<boolean>(false);
  const handleButtonClick = (value: number) => {
    setValueForm(value);
  };
  const handleShowPasswork = () => {
    setType(!type);
  };
  const handleOk = () => {};

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center my-2">
        <h1 className="text-3xl font-[500] font-serif">Welcome to NTHome</h1>
      </div>
      <div className="flex ">
        <button
          className={`pr-1 cursor-pointer hover:text-blue-700 ${
            valueForm === 1 && "border-b-4 border-blue-700 "
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Sign In
        </button>
        <button
          className={`px-1 cursor-pointer hover:text-blue-700 ${
            valueForm === 2 && "border-b-4 border-blue-700 "
          }`}
          onClick={() => handleButtonClick(2)}
        >
          New account
        </button>
      </div>

      {valueForm === 1 && (
        <form onSubmit={handleOk} className="px-1 py-2">
          <label>
            <span className="font-[600]">Phone Number</span>
            <Input
              value={props.user}
              setValue={props.setUser}
              placeholder="Phone Number"
              type="number"
            />
          </label>
          <label className="relative">
            <span className="font-[600]">Password</span>
            <Input
              value={props.user}
              setValue={props.setUser}
              placeholder="Enter password"
              type={type}
            />
            {type ? (
              <span
                className="absolute top-[58%] right-2 text-[24px] cursor-pointer"
                onClick={handleShowPasswork}
              >
                <IoEyeOffOutline />
              </span>
            ) : (
              <span
                className="absolute top-[58%] right-2 text-[24px] cursor-pointer"
                onClick={handleShowPasswork}
              >
                <IoEyeOutline />
              </span>
            )}
          </label>
          <button
            className="w-full p-2 text-white bg-[#4a60a1] rounded-md my-2"
            type="submit"
          >
            Sign In
          </button>
        </form>
      )}
      {valueForm === 2 && (
        <div>
          <p>New Account Form</p>
        </div>
      )}
    </div>
  );
}

export default Account;
