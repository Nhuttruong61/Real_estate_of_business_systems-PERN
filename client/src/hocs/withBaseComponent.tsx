/* eslint-disable react/display-name */
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
const withBaseComponent = (Component: any) => (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();
  return (
    <Component
      {...props}
      dispatch={dispatch}
      router={router}
      queryClient={queryClient}
    />
  );
};
export default withBaseComponent;
