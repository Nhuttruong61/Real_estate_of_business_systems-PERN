"use client";
import React, { memo, useEffect } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, updateToken } from "@/redux/slices/userSlice";
import { refreshTokenApi } from "@/apis/auth";

function HeaderLayout() {
  const { token, refreshtoken, current } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      if (current === null) {
        dispatch(fetchCurrentUser());
      }
    }
  }, [token, current]);

  const fetchToken = async () => {
    if (token && current === null) {
      try {
        const res = await refreshTokenApi(refreshtoken);
        dispatch(updateToken(res.token));
      } catch (err) {
        dispatch(updateToken(null));
      }
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);
  return (
    <div className="z-50">
      <TopHeader />
      <Navbar />
    </div>
  );
}

export default memo(HeaderLayout);
