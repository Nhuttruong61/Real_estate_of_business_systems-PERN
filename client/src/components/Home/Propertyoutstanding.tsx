import React from "react";
import LoadingCpn from "../Loading/LoadingCpn";
import Slick from "../slider/Slick";
function Propertyoutstanding() {
  return (
    <div className="px-[12%]">
      <div className="w-full h-auto">
        <div className="flex flex-col mt-[80px] text-center">
          <h1 className="text-4xl font-[500] pb-5">
            Letest Properties of Rent
          </h1>
          <p className="text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere
          </p>
          <p className="text-gray-400">
            cubilia curae; Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>
        <LoadingCpn isLoading={false}>
          <div className="pt-8 w-full">
            <Slick />
          </div>
        </LoadingCpn>
      </div>
    </div>
  );
}

export default Propertyoutstanding;
