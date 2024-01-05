import React from "react";

interface TableProps {
  columns: any;
  data: any[];
}

function Table({ columns, data }: TableProps) {
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
          {data?.map((el: any) => (
            <tr className="border bg-slate-100" key={el.id}>
              {columns.map((column: any, index: number) => (
                <td className="border-l" key={index}>
                  {el[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
