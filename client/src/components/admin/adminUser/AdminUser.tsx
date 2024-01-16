import { deleteUser, getUsers } from "@/apis/user";
import Loading from "@/components/common/Loading";
import Table from "@/components/common/Table";
import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Drawer from "@/components/common/Drawer";
import Input from "@/components/input/Input";
import Modal from "@/components/common/Modal";
import { useMutationHooks } from "@/hooks/useMutatonHook";
import { toast } from "react-toastify";
function AdminUser() {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<any>(null);
  const [editUser, setEditUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const fetchDataUser = async () => {
    const res = await getUsers();
    let format = [];
    format = res.users.map((user: object, index: number) => {
      return { ...user, stt: index + 1 };
    });
    return format;
  };
  const fetchUsers = useQuery({
    queryKey: ["Users"],
    queryFn: fetchDataUser,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
  });
  const { isLoading, data: listData } = fetchUsers;

  const renderAction = (el: any) => {
    return (
      <div className="flex justify-center">
        <span
          className="px-1 cursor-pointer"
          onClick={() => {
            setIsShowDrawer(true);
            setEditUser(el);
          }}
        >
          <CiEdit className="text-green-600 text-[20px]" />
        </span>
        <span
          className="px-1 cursor-pointer"
          onClick={() => {
            setIsShownModal(true);
            setIdUser(el.id);
          }}
        >
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
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: renderAction,
    },
  ];
  const handleEdit = (e: object) => {};
  const mutationDelete = useMutationHooks(async (data: any) => {
    setIsShownModal(false);
    const res: any = await deleteUser(data);
    return res;
  });
  const { isPending: isLoadingDelete, isSuccess: isSuccessDelete } =
    mutationDelete;
  const handleDelete = async () => {
    mutationDelete.mutate(idUser, {
      onSettled: () => {
        fetchUsers.refetch();
      },
    });
  };
  useEffect(() => {
    if (isLoadingDelete) {
      toast.success("Delete user success");
    }
  }, [isLoadingDelete]);
  return (
    <div className="w-full">
      <Table columns={columns} data={listData} />
      <Loading loading={isLoading} />
      <Drawer
        isShowDrawer={isShowDrawer}
        setIsShowDrawer={setIsShowDrawer}
        title="Edit User"
        className="w-[50%]"
      >
        <form onSubmit={(e) => handleEdit(e)} className="px-[10%] pt-2">
          <div>
            <span className="font-[400]">User Name</span>
            <Input
              value={editUser.name}
              onChange={(e: any) =>
                setEditUser({
                  ...editUser,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div>
            <span className="font-[400]">Phone Number</span>
            <Input
              value={editUser.phone}
              onChange={(e: any) =>
                setEditUser({
                  ...editUser,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div>
            <span className="font-[400]">Email</span>
            <Input
              value={editUser.email}
              onChange={(e: any) =>
                setEditUser({
                  ...editUser,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <span className="font-[400]">Address</span>
            <Input
              value={editUser.address}
              onChange={(e: any) =>
                setEditUser({
                  ...editUser,
                  address: e.target.value,
                })
              }
            />
          </div>
          <button
            className="w-full p-2 text-white bg-[#4a60a1] rounded-md my-2 "
            type="submit"
          >
            Update
          </button>
        </form>
      </Drawer>
      <Modal
        title="Delete User"
        show={isShownModal}
        setIsShownModal={setIsShownModal}
        handleOK={handleDelete}
        className="w-[40%]"
      >
        <h1>Are you sure to delete this property type? </h1>
      </Modal>
      <Loading loading={isLoadingDelete} />
    </div>
  );
}

export default AdminUser;
