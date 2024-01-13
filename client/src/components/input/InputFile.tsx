import Image from "next/image";
import React, { memo, useState } from "react";

interface ProqInputFile {
  setIData: any;
  data: any;
  multiple: boolean;
}

function InputFile({ setIData, data, multiple }: ProqInputFile) {
  const [images, setImages] = useState<string[]>([]);

  const handleOnchageImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const results: string[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          results.push(reader.result as string);
          if (results.length === files.length) {
            setImages(results);
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
      <div className="flex">
        {images?.map((el, index) => (
          <div key={index} className="p-2">
            <Image src={el} alt="" width={120} height={120} />
          </div>
        ))}
      </div>
      {data?.Images && images?.length === 0 && (
        <div className="flex">
          {data?.Images?.map((item: any, index: number) => (
            <div key={index} className="p-2">
              <Image src={item?.url} alt="" width={120} height={120} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(InputFile);
