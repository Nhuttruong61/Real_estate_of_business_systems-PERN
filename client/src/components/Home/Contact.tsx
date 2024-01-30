import Image from "next/image";
import React from "react";
import Rectangle24 from "../../../public/images/contact/Rectangle24.png";

function Contact() {
  return (
    <div className="w-full h-auto relative">
      <div className="relative">
        <Image src={Rectangle24} alt="" className="object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className=" py-1 text-2xl md:text-2xl text-white">
            Find Best Place For Living
          </h1>
          <div className=" py-1  text-white justify-center text-center">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
            Proin sodales ultrices nulla blandit volutpat.
          </div>
          <span className="md:py-4">
            <button className="  px-2 py-1 font-[500] border rounded-md">
              Contact Us
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
