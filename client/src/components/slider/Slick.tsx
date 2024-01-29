import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Rectangle20 from "../../../public/images/imgLocation/Rectangle20.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div className="px-2">
        <div className="relative">
          <Image src={Rectangle20} alt="" className="h-[420px] object-cover" />
          <div className="absolute left-0 px-6 bottom-8 text-white w-full">
            <div className="flex justify-between">
              <div className="flex items-center w-full">
                <span>
                  <IoLocationOutline className="text-[26px]" />
                </span>
                <p>Can Tho</p>
              </div>
              <div className="flex items-center">
                <span>
                  <BsArrowsFullscreen className="text-[20px]" />
                </span>
                <p className="px-2">220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="relative">
          <Image src={Rectangle20} alt="" className="h-[420px] object-cover" />
          <div className="absolute left-0 px-6 bottom-8 text-white w-full">
            <div className="flex justify-between">
              <div className="flex items-center w-full">
                <span>
                  <IoLocationOutline className="text-[26px]" />
                </span>
                <p>Can Tho</p>
              </div>
              <div className="flex items-center">
                <span>
                  <BsArrowsFullscreen className="text-[20px]" />
                </span>
                <p className="px-2">220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="relative">
          <Image src={Rectangle20} alt="" className="h-[420px] object-cover" />
          <div className="absolute left-0 px-6 bottom-8 text-white w-full">
            <div className="flex justify-between">
              <div className="flex items-center w-full">
                <span>
                  <IoLocationOutline className="text-[26px]" />
                </span>
                <p>Can Tho</p>
              </div>
              <div className="flex items-center">
                <span>
                  <BsArrowsFullscreen className="text-[20px]" />
                </span>
                <p className="px-2">220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="relative">
          <Image src={Rectangle20} alt="" className="h-[420px] object-cover" />
          <div className="absolute left-0 px-6 bottom-8 text-white w-full">
            <div className="flex justify-between">
              <div className="flex items-center w-full">
                <span>
                  <IoLocationOutline className="text-[26px]" />
                </span>
                <p>Can Tho</p>
              </div>
              <div className="flex items-center">
                <span>
                  <BsArrowsFullscreen className="text-[20px]" />
                </span>
                <p className="px-2">220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="relative">
          <Image src={Rectangle20} alt="" className="h-[420px] object-cover" />
          <div className="absolute left-0 px-6 bottom-8 text-white w-full">
            <div className="flex justify-between">
              <div className="flex items-center w-full">
                <span>
                  <IoLocationOutline className="text-[26px]" />
                </span>
                <p>Can Tho</p>
              </div>
              <div className="flex items-center">
                <span>
                  <BsArrowsFullscreen className="text-[20px]" />
                </span>
                <p className="px-2">220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="relative">
          <Image src={Rectangle20} alt="" className="h-[420px] object-cover" />
          <div className="absolute left-0 px-6 bottom-8 text-white w-full">
            <div className="flex justify-between">
              <div className="flex items-center w-full">
                <span>
                  <IoLocationOutline className="text-[26px]" />
                </span>
                <p>Can Tho</p>
              </div>
              <div className="flex items-center">
                <span>
                  <BsArrowsFullscreen className="text-[20px]" />
                </span>
                <p className="px-2">220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Slick;
