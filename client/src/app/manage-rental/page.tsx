/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import withBaseComponent from "@/hocs/withBaseComponent";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

function page({ router }: any) {
  const { current } = useSelector((state: any) => state.user);
  useLayoutEffect(() => {
    if (!current) return router.push("/");
  }, []);
  return <div>page</div>;
}

export default withBaseComponent(page);
