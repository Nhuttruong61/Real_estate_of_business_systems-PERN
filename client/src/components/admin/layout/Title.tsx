import React, { memo } from "react";
interface proqTitle {
  children: React.ReactNode;
  className?: string;
}
function Title({ className, children }: proqTitle) {
  return <div className={`w-full flex ${className}`}>{children}</div>;
}

export default memo(Title);
