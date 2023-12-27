"use client";
import React, { memo, useEffect } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/redux/slices/userSlice";

function HeaderLayout() {
  const { token } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, []);
  return (
    <div>
      <TopHeader />
      <Navbar />
    </div>
  );
}

export default memo(HeaderLayout);
