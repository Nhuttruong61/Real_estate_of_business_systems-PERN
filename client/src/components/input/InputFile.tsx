import Image from "next/image";
import React, { useState } from "react";
interface proqInputFile {
  setIData: any;
  data: any;
}

function InputFile({ setIData, data }: proqInputFile) {
  const [images, setImages] = useState([]);

  const handleOnchageImage = (e: any) => {
    const files = e.target.files;
    const results: any = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        results.push(reader.result);
        if (results.length === files.length) {
          setImages(results);
          setIData({ ...data, images: results });
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div className="">
      <div>
        <label
          htmlFor="inport"
          className="bg-[#4a60a1]  flex justify-center text-white font-[600] rounded-md py-1 cursor-pointer w-[20%]"
        >
          Image
        </label>
        <input
          id="inport"
          type="file"
          multiple
          hidden
          onChange={(e) => handleOnchageImage(e)}
        />
      </div>
      {images?.map((el, index) => {
        return (
          <div key={index}>
            <Image src={el} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default InputFile;
