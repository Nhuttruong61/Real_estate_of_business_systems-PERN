import { createPropertyType } from "@/apis/propertyType";
import Loading from "@/components/common/Loading";
import Edittor from "@/components/input/Edittor";
import Input from "@/components/input/Input";
import InputFile from "@/components/input/InputFile";
import React, { memo, useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";
import { toast } from "react-toastify";

interface proqs {
  setActive: (value: number) => void;
}
function CreatePropertyType({ setActive }: proqs) {
  const [addPropertyType, setAddPropertyType] = useState({
    name: "",
    description: "",
    images: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCreate = async (e: any) => {
    e.preventDefault();
    try {
      if (
        !addPropertyType.name ||
        !addPropertyType.description ||
        !addPropertyType.images
      ) {
        toast.warn("Please complete all information");
      } else {
        setIsLoading(true);
        const res: any = await createPropertyType(addPropertyType);
        setIsLoading(false);
        if (res.success) {
          toast.success("Create property type successfully");
          // setActive(2);
          setAddPropertyType({
            name: "",
            description: "",
            images: [],
          });
        }
      }
    } catch (e: any) {
      setIsLoading(false);
      toast.error(e.message);
    }
  };
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
        <form onSubmit={(e) => handleCreate(e)} className="px-[10%] pt-2">
          <div>
            <span className="font-[400]">Property Type Name</span>
            <Input
              value={addPropertyType.name || ""}
              onChange={(e: any) =>
                setAddPropertyType({ ...addPropertyType, name: e.target.value })
              }
            />
          </div>
          <div className=" block">
            <span className="font-[400]">Description</span>
            <Edittor
              value={addPropertyType.description || ""}
              setValue={(value) =>
                setAddPropertyType({ ...addPropertyType, description: value })
              }
            />
          </div>
          <div>
            <span className="font-[400]">Image</span>
            <InputFile
              data={addPropertyType}
              setIData={setAddPropertyType}
              multiple={false}
            />
          </div>
          <button
            className="w-full p-2 text-white bg-[#4a60a1] rounded-md my-2 "
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
      <Loading loading={isLoading} />
    </div>
  );
}

export default memo(CreatePropertyType);
