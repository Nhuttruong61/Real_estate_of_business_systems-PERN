import React, { memo, useEffect, useState } from "react";
import Input from "../common/Input";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
function Account(props: any) {
  const [valueForm, setValueForm] = useState<number>(1);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const handleButtonClick = (value: number) => {
    setValueForm(value);
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    const user = {
      phone: props.user.phone,
      password: props.user.password,
    };
  };
  const handleRegister = (e: any) => {
    e.preventDefault();
  };
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
          Login
        </button>
        <button
          className={`px-1 cursor-pointer hover:text-blue-700 ${
            valueForm === 2 && "border-b-4 border-blue-700 "
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Register
        </button>
      </div>

      {valueForm === 1 && (
        <form onSubmit={(e: any) => handleLogin(e)} className="px-1 pt-2">
          <label>
            <span className="font-[600]">Phone Number</span>
            <Input
              value={props.user}
              onChange={(e: any) => {
                props.setUser({ ...props.user, phone: e.target.value });
              }}
              placeholder="Phone Number"
              type="text"
            />
          </label>

          <label className="relative">
            <span className="font-[600]">Password</span>
            <Input
              value={props.user}
              onChange={(e: any) => {
                props.setUser({ ...props.user, password: e.target.value });
              }}
              placeholder="Enter password"
              type={isShowPassword ? "text" : "password"}
            />
            {isShowPassword ? (
              <span
                className="absolute top-[58%] right-2 text-[24px] cursor-pointer"
                onClick={handleShowPassword}
              >
                <IoEyeOffOutline />
              </span>
            ) : (
              <span
                className="absolute top-[58%] right-2 text-[24px] cursor-pointer"
                onClick={handleShowPassword}
              >
                <IoEyeOutline />
              </span>
            )}
          </label>
          <button
            className="w-full p-2 text-white bg-[#4a60a1] rounded-md my-2"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      )}
      {valueForm === 2 && (
        <form onSubmit={handleRegister} className="px-1 pt-2">
          <label>
            <span className="font-[600]">Name</span>
            <Input
              value={props.user}
              placeholder="Enter your name"
              type="string"
              onChange={(e: any) => {
                props.setUser({ ...props.user, name: e.target.value });
              }}
            />
          </label>
          <label>
            <span className="font-[600]">Phone Number</span>
            <Input
              value={props.user}
              placeholder="Phone Number"
              type="text"
              onChange={(e: any) => {
                props.setUser({ ...props.user, phone: e.target.value });
              }}
            />
          </label>
          <label className="relative">
            <span className="font-[600]">Password</span>
            <Input
              value={props.user}
              placeholder="Enter password"
              type={isShowPassword}
              onChange={(e: any) => {
                props.setUser({ ...props.user, password: e.target.value });
              }}
            />
            {isShowPassword ? (
              <span
                className="absolute top-[58%] right-2 text-[24px] cursor-pointer"
                onClick={handleShowPassword}
              >
                <IoEyeOffOutline />
              </span>
            ) : (
              <span
                className="absolute top-[58%] right-2 text-[24px] cursor-pointer"
                onClick={handleShowPassword}
              >
                <IoEyeOutline />
              </span>
            )}
          </label>
          <button
            className="w-full p-2 text-white bg-[#4a60a1] rounded-md my-2"
            type="submit"
          >
            REGISTER
          </button>
        </form>
      )}
      <div className="flex justify-center py-2">
        <span className="cursor-pointer hover:underline text-[#4a60a1]">
          Forgot password
        </span>
      </div>
    </div>
  );
}

export default memo(Account);
