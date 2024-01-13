import React, { memo, useEffect, useState } from "react";
import Panigate from "./Panigate";
import Image from "next/image";
import notdata from "../../../public/images/notdata.png";
interface TableProps {
  columns: any;
  data: any[];
}
function Table({ columns, data }: TableProps) {
  const [listData, setListData] = useState<null | []>(null);
  const [page, setPage] = useState(1);

  const curent = 10;
  useEffect(() => {
    const startData = (page - 1) * curent;
    const endData = page * curent;
    let res: any = data?.slice(startData, endData);
    setListData(res);
  }, [page, data]);
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border bg-slate-300">
            {columns.map((column: any, index: number) => (
              <th className="border-l" key={index}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {listData?.map((el: any) => (
            <tr className="border bg-slate-100" key={el.id}>
              {columns.map((column: any, index: number) => (
                <td className="border-l" key={index}>
                  {el[column.dataIndex]}
                  {column?.render && column.render(el, index)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length === 0 && (
        <div className="flex flex-col justify-center items-center w-full py-5 opacity-30">
          <Image src={notdata} alt="" className="w-[60px]" />
          <p>Not data</p>
        </div>
      )}
      {data?.length !== 0 && (
        <div className="flex justify-end">
          <Panigate data={data} curent={curent} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
}

export default memo(Table);
