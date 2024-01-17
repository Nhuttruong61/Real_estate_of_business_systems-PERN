import axios from "../../axios";
import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface proqSearch {
  placeholder: string;
  setValue: any;
  refApi: any;
}
function SearchAdmin({ placeholder, setValue, refApi }: proqSearch) {
  const [valueKey, setValueKey] = useState("");
  let idRef = useRef<any>(null || Number);
  const handleOnchangeSearch = (e: any) => {
    const value = e.target.value;
    setValueKey(value);
    if (idRef.current !== null) {
      clearTimeout(idRef.current);
    }
    idRef.current = setTimeout(() => {
      fetchApi(value);
    }, 500);
  };

  const fetchApi = async (value: any) => {
    const res = await axios.get(`${refApi}?name=${value}`);
    setValue(res.data);
  };
  return (
    <div>
      <span className="flex justify-center items-center border rounded-md my-1 mx-2">
        <input
          className="outline-none px-2 "
          placeholder={placeholder}
          type="text"
          value={valueKey}
          onChange={handleOnchangeSearch}
        />
        <div className=" flex h-full bg-slate-400 px-2 rounded-r-md">
          <span className="h-full py-2">
            <IoIosSearch className="text-white text-[20px]" />
          </span>
        </div>
      </span>
    </div>
  );
}

export default SearchAdmin;
