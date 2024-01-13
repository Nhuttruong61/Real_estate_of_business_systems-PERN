/* eslint-disable react/display-name */
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
const withBaseComponent = (Component: any) => (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return <Component {...props} dispatch={dispatch} router={router} />;
};
export default withBaseComponent;
