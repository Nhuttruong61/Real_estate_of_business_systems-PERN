import React from "react";
import DashBoard from "../dashboard/DashBoard";
import AdminUser from "../adminUser/AdminUser";
import AdminPropetyType from "../adminPropertyType/AdminPropetyType";
import CreatePropertyType from "../adminPropertyType/CreatePropertyType";

interface ContentProps {
  active: number;
  setActive: (value: number) => void;
}

function Content({ active, setActive }: ContentProps) {
  const content = null;
  switch (active) {
    case 0:
      return <DashBoard />;
    case 1:
      return <AdminUser />;
    case 2:
      return <AdminPropetyType setActive={setActive} />;
    case 3:
      return <CreatePropertyType setActive={setActive} />;
  }

  return content;
}

export default Content;
