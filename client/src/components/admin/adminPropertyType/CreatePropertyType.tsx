import Edittor from "@/components/input/Edittor";
import Input from "@/components/input/Input";
import InputFile from "@/components/input/InputFile";
import React, { useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";

interface proqs {
  setActive: (value: number) => void;
}
function CreatePropertyType({ setActive }: proqs) {
  const [addPropertyType, setAddPropertyType] = useState({
    name: "",
    description: "",
    images: [],
  });
  console.log(addPropertyType);
  return (
    <div className="w-full">
      <div className="w-full border-b">
        <span
          className="mx-2 my-1 block hover:text-red-500 cursor-pointer w-[70px]"
          onClick={() => setActive(2)}
        >
          <IoMdReturnLeft className="text-[28px]" />
        </span>
      </div>
      <div>
        <p className="text-[26px] font-bold w-full text-center">
          Create new PropertyType
        </p>
        <form action="" className="px-[10%] pt-2">
          <label>
            <span className="font-[400]">Property Type Name</span>
            <Input
              value={addPropertyType.name}
              onChange={(e: any) =>
                setAddPropertyType({ ...addPropertyType, name: e.target.value })
              }
            />
          </label>
          <label className=" block">
            <span className="font-[400]">Description</span>
            <Edittor
              value={addPropertyType.description}
              setValue={(value) =>
                setAddPropertyType({ ...addPropertyType, description: value })
              }
            />
          </label>
          <label>
            <span className="font-[400]">Image</span>
            <InputFile data={addPropertyType} setIData={setAddPropertyType} />
          </label>
          <button
            className="w-full p-2 text-white bg-[#4a60a1] rounded-md my-2 "
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePropertyType;
