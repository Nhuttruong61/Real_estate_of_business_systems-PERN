import { getUsers } from "@/apis/user";
import Loading from "@/components/common/Loading";
import Table from "@/components/common/Table";
import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import React from "react";
function AdminUser() {
  const fetchDataUser = async () => {
    const res = await getUsers();
    let format = [];
    format = res.users.map((user: object, index: number) => {
      return { ...user, stt: index + 1 };
    });
    return format;
  };
  const { isLoading, data: listData } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchDataUser,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
  });

  const renderAction = (el: any) => {
    return (
      <div className="flex justify-center">
        <span
          className="px-1 cursor-pointer"
          onClick={() => console.log("el", el)}
        >
          <CiEdit className="text-green-600 text-[20px]" />
        </span>
        <span className="px-1 cursor-pointer">
          <MdDeleteOutline className="text-red-600 text-[20px]" />
        </span>
      </div>
    );
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "name",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: renderAction,
    },
  ];

  return (
    <div className="w-full">
      <Table columns={columns} data={listData} />
      <Loading loading={isLoading} />
    </div>
  );
}

export default AdminUser;
