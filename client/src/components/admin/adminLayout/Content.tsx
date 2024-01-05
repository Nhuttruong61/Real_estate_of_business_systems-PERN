import React from "react";
import DashBoard from "../dashboard/DashBoard";
import AdminUser from "../adminUser/AdminUser";
import AdminPropetyType from "../adminPropertyType/AdminPropetyType";

interface ContentProps {
  active: number;
}

function Content({ active }: ContentProps) {
  const content = null;
  switch (active) {
    case 0:
      return <DashBoard />;
    case 1:
      return <AdminUser />;
    case 2:
      return <AdminPropetyType />;
  }

  return content;
}

export default Content;
