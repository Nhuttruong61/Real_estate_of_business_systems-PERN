import { getUsers } from "@/apis/user";
import Loading from "@/components/common/Loading";
import Table from "@/components/common/Table";
import { useQuery } from "@tanstack/react-query";
import React from "react";
function AdminUser() {
  const fetchDataUser = async () => {
    const res = await getUsers();
    return res.users;
  };
  const { isLoading, data: listData } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchDataUser,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
  });
  const columns = [
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
      dataIndex: "email",
      key: "email",
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
