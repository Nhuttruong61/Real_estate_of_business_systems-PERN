import React, { useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";

function LayOut() {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="w-full flex ">
      <SideBar active={active} setActive={setActive} />
      <Content active={active} setActive={setActive} />
    </div>
  );
}

export default LayOut;
