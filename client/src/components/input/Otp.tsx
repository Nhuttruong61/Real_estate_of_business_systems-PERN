import React, { memo } from "react";
import OtpInput from "react-otp-input";
import Button from "../common/Button";

interface PropsVerify {
  valueCapcha: string;
  setValueCapcha: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

function Otp({ valueCapcha, setValueCapcha, onSubmit }: PropsVerify) {
  return (
    <div className="w-full min-h-[20vh]  text-center justify-center">
      <h1 className="font-[600] text-[26px] font-sans ">Verify Account</h1>
      <p className=" font-sans">
        An OTP has been sent to the phone number you entered
      </p>
      <OtpInput
        value={valueCapcha}
        onChange={setValueCapcha}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        containerStyle={{ justifyContent: "center" }}
        inputStyle={{
          border: "1px solid",
          margin: "10px 4px",
          borderRadius: "10%",
          fontSize: "26px",
        }}
      />
      <div className="p-2 mb-2">
        <span className="mx-2">
          <Button
            text="Clear"
            onClick={() => {
              setValueCapcha("");
            }}
          />
        </span>
        <span className="mx-2">
          <Button text="Verify" onClick={onSubmit} />
        </span>
      </div>
    </div>
  );
}

export default memo(Otp);
