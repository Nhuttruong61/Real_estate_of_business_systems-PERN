import Image from "next/image";
import React, { memo, useState } from "react";

interface ProqInputFile {
  setIData: any;
  data: any;
  multiple: boolean;
}

function InputFile({ setIData, data, multiple }: ProqInputFile) {
  console.log(data);
  const handleOnchageImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const results: string[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          results.push(reader.result as string);
          if (results.length === files.length) {
            setIData({ ...data, images: results });
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };
  return (
    <div className="w-full">
      <div className="mb-2 w-[20%]">
        <label
          htmlFor="inport"
          className="bg-[#4a60a1]  flex justify-center text-white font-[600] rounded-md py-1 cursor-pointer w-auto"
        >
          Image
        </label>
        <input
          id="inport"
          type="file"
          multiple={multiple}
          hidden
          onChange={(e) => handleOnchageImage(e)}
        />
      </div>
      {data?.images && (
        <div className="flex">
          {data?.images?.map((item: any, index: number) => (
            <div key={index} className="p-2">
              {item?.url ? (
                <Image src={item?.url} alt="" width={120} height={120} />
              ) : (
                <Image src={item} alt="" width={120} height={120} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(InputFile);
