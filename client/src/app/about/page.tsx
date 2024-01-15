"use client";
import Otp from "@/components/input/Otp";
import React, { useState } from "react";

function About() {
  const [valueCapcha, setValueCapcha] = useState("");
  const handleSubmitVerify = () => {};
  return (
    <div>
      <Otp
        valueCapcha={valueCapcha}
        setValueCapcha={setValueCapcha}
        onSubmit={handleSubmitVerify}
      />
    </div>
  );
}

export default About;
