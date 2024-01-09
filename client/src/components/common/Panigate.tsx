import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Panigate({ data, curent, page, setPage }: any) {
  const [listPage, setListPage] = useState<any>([]);
  const [listDataTable, setListDataTable] = useState<any>([]);
  useEffect(() => {
    let number = data?.length / curent;
    const round = Math.ceil(number);
    setListPage(Array.from({ length: round }, (_, i) => i + 1));
  }, [data]);
  useEffect(() => {
    if (listPage.length > 10 && page <= listPage.length - 3 && page <= 3) {
      setListDataTable([
        1,
        2,
        3,
        4,
        "...",
        listPage.length - 1,
        listPage.length,
      ]);
    } else if (
      listPage.length > 10 &&
      page >= 4 &&
      page < listPage.length - 3
    ) {
      setListDataTable([
        1,
        "...",
        page - 1,
        page,
        page + 1,
        "...",
        listPage.length - 1,
        listPage.length,
      ]);
    } else if (
      listPage.length > 10 &&
      page >= 3 &&
      page >= listPage.length - 3
    ) {
      setListDataTable([
        1,
        "...",
        listPage.length - 4,
        listPage.length - 3,
        listPage.length - 2,
        listPage.length - 1,
        listPage.length,
      ]);
    } else {
      setListDataTable([...listPage]);
    }
  }, [listPage, page]);
  return (
    <div className="flex  px-2 py-1">
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        <FaAngleLeft className="text-[26px]" />
      </button>
      {listDataTable.map((el: number, index: number) => {
        if (Number.isInteger(el)) {
          return (
            <span
              key={index}
              className={`px-1 cursor-pointer ${
                page === el && "text-blue-500 font-bold rounded border-2"
              }`}
              onClick={() => {
                setPage(el);
              }}
            >
              {el}
            </span>
          );
        } else {
          return (
            <span key={index} className="px-1">
              {el}
            </span>
          );
        }
      })}
      <button
        disabled={listPage.length === page}
        onClick={() => setPage(page + 1)}
      >
        <FaAngleRight className="text-[26px]" />
      </button>
    </div>
  );
}

export default Panigate;
