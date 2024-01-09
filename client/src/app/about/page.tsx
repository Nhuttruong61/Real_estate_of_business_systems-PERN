"use client";
import HeaderLayout from "@/components/Header/HeaderLayout";
import Edittor from "@/components/input/Edittor";
import React, { useState } from "react";

function About() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Edittor value={value} setValue={setValue} />
    </div>
  );
}

export default About;
