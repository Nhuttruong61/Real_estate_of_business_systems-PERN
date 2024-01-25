/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LayOut from "@/components/admin/adminLayout/LayOut";
function page() {
  const router = useRouter();
  const { current } = useSelector((state: any) => state.user);
  useLayoutEffect(() => {
    if (current && current.role === "ADMIN") {
      return;
    } else {
      router.push("/");
    }
  }, [current]);
  if (current && current.role === "ADMIN") {
    return (
      <div className="w-full">
        <LayOut />
      </div>
    );
  }
  return null;
}

export default page;
