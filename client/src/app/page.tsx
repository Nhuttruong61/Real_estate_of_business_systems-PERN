import React from "react";
import background from "../../public/images/backgound.png";
import HeaderLayout from "@/components/Header/HeaderLayout";

export default function Home() {
  return (
    <main className="flex  flex-col w-full ">
      <div
        className="bg-cover bg-no-repeat w-full z-40 h-full relative top-0"
        style={{
          backgroundImage: `url(${background.src})`,
          height: "752px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeaderLayout />
        <div className="absolute gap-4 w-full h-[70%] flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white">Find Your Dream Home</h1>
          <div className=" text-white justify-center text-center">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
            Proin sodales ultrices nulla blandit volutpat.
          </div>
        </div>
      </div>
    </main>
  );
}
