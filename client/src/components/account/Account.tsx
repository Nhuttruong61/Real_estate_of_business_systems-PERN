import React, { memo, useState } from "react";
import Input from "../input/Input";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { registerApi, signApi } from "@/apis/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { fetchCurrentUser, signIn } from "@/redux/slices/userSlice";
import Loading from "../common/Loading";
function Account(props: any) {
  const [valueForm, setValueForm] = useState<number>(1);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const optionRadio = [
    {
      lable: "User",
      value: "USER",
    },
    {
      lable: "Agent",
      value: "AGENT",
    },
  ];
  const handleButtonClick = (value: number) => {
    setValueForm(value);
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const user = {
        phone: props.user.phone,
        password: props.user.password,
      };
      setIsLoading(true);
      const res: any = await signApi(user);
      setIsLoading(false);
      if (res?.success) {
        toast.success("Registed successful");
        props.setIsShownModal(false);
        dispatch(
          signIn({
            token: res.accessToken,
            refreshtoken: res.refreshtoken,
          })
        );
        dispatch(fetchCurrentUser());
      }
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.response.data.mes || "An error occurred");
    }
  };
  const handleRegister = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res: any = await registerApi(props.user);
      setIsLoading(false);
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Registration successfully!",
          showCancelButton: true,
          confirmButtonText: "Go to sign in",
        }).then((result) => {
          if (result.isConfirmed) {
            setValueForm(1);
          }
        });
      }
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.response.data.mes || "An error occurred");
    }
  };

  const handleOnchageRadio = (e: any) => {
    const value = e.target.value;
    props.setUser({ ...props.user, role: value });
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
              placeholder="Phone Number"
              type="tel"
              pattern="^\d{10,}$"
              title="Phone number must have at least 10 digits."
              onChange={(e: any) => {
                props.setUser({ ...props.user, phone: e.target.value });
              }}
            />
          </label>

          <label className=" py-2 relative">
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
              type="tel"
              pattern="^\d{10,}$"
              title="Phone number must have at least 10 digits."
              onChange={(e: any) => {
                props.setUser({ ...props.user, phone: e.target.value });
              }}
            />
          </label>
          <label className=" py-2 relative">
            <span className="font-[600]">Password</span>
            <Input
              value={props.user}
              placeholder="Enter password"
              type={isShowPassword ? "text" : "password"}
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
          <label className=" py-2 flex flex-col ">
            <span className="font-[600]">Type account</span>
            {optionRadio.map((role, index): any => {
              return (
                <div key={index} className=" flex justify-start">
                  <input
                    type="radio"
                    name="id"
                    required
                    id={role.value}
                    value={role.value}
                    onChange={(e) => handleOnchageRadio(e)}
                  />
                  <label className="px-1 cursor-pointer" htmlFor={role.value}>
                    {role.lable}
                  </label>
                </div>
              );
            })}
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
      <Loading loading={isLoading} />
    </div>
  );
}

export default memo(Account);
