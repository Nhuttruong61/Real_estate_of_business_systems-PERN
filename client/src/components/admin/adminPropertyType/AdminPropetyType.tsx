import React, { useEffect, useState } from "react";
import Title from "../layout/Title";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Table from "@/components/common/Table";
import {
  deletePropertyType,
  getAllPropertyType,
  updatePropertyType,
} from "@/apis/propertyType";
import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import moment from "moment";
import Loading from "@/components/common/Loading";
import Modal from "@/components/common/Modal";
import { toast } from "react-toastify";
import { useMutationHooks } from "@/hooks/useMutatonHook";
import Drawer from "@/components/common/Drawer";
import InputFile from "@/components/input/InputFile";
import Edittor from "@/components/input/Edittor";
import Input from "@/components/input/Input";
import SearchAdmin from "@/components/input/SearchAdmin";
function AdminPropetyType({ setActive }: any) {
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const [idProperty, setIdProperty] = useState<any>("");
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  const [editPropertyType, setEditPropertyType] = useState<any>({
    name: "",
    description: "",
    images: null,
  });
  const [valueSearch, setValueSearch] = useState<any>(null);
  const fetchPropertyType = async () => {
    try {
      const res = await getAllPropertyType();
      let format = [];
      format = res.response.map((el: any, index: number) => {
        return {
          ...el,
          createdAt: moment(`${el.createdAt}`, "YYYY/MM/DD").fromNow(),
          stt: index + 1,
        };
      });
      return format;
    } catch (e) {}
  };
  const queryPropertyType = useQuery({
    queryKey: ["propertyType"],
    queryFn: fetchPropertyType,
    retryOnMount: false,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });
  const { isLoading, data: listData } = queryPropertyType;
  const renderAction = (el: any) => {
    return (
      <div className="flex justify-center">
        <span
          className="px-1 cursor-pointer"
          onClick={() => {
            setIsShowDrawer(true);
            setEditPropertyType(el);
          }}
        >
          <CiEdit className="text-green-600 text-[20px]" />
        </span>
        <span
          className="px-1 cursor-pointer"
          onClick={() => {
            setIdProperty(el.id);
            setIsShownModal(true);
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
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: renderAction,
    },
  ];

  const mutationDelete = useMutationHooks((data: any) => {
    setIsShownModal(false);
    const res: any = deletePropertyType(data);
    return res;
  });
  const { isPending: isLoadingDelete, isSuccess: isSuccessDelete } =
    mutationDelete;

  const handleDelete = () => {
    mutationDelete.mutate(idProperty, {
      onSettled() {
        queryPropertyType.refetch();
      },
    });
  };
  const mutationUpdate = useMutationHooks((data: any) => {
    setIsShowDrawer(false);
    const { id, createdAt, updatedAt, stt, ...rest } = data;

    const res: any = updatePropertyType(id, rest);
    return res;
  });
  const { isPending: isLoadingUpdate, isSuccess: isSuccessUpdate } =
    mutationUpdate;

  const handleEdit = (e: any) => {
    e.preventDefault();
    mutationUpdate.mutate(editPropertyType, {
      onSettled() {
        queryPropertyType.refetch();
      },
    });
  };

  useEffect(() => {
    if (isSuccessDelete) {
      toast.success("Delete property type successfully");
    }
  }, [isLoadingDelete]);
  useEffect(() => {
    if (isSuccessUpdate) {
      toast.success("Update property type successfully");
    }
  }, [isSuccessUpdate]);
  return (
    <div className="w-full flex flex-col">
      <div className="pt-2 px-2">
        <Title>
          <span
            className="flex items-center bg-[#4a60a1] text-white font-[500] px-2 rounded-md py-1 cursor-pointer hover:bg-[#142a6b]"
            onClick={() => setActive(3)}
          >
            <AiOutlinePlusCircle className="text-[20px]" />
            <p className="px-1">Create</p>
          </span>
        </Title>
      </div>
      <div className="w-full flex justify-end">
        <SearchAdmin
          placeholder="Enter name"
          refApi="/properttype/get-all-propertytype"
          setValue={setValueSearch}
        />
      </div>
      <Table
        columns={columns}
        data={valueSearch?.response ? valueSearch?.response : listData}
      />
      <Loading loading={isLoading || isLoadingDelete || isLoadingUpdate} />
      <Modal
        title="Delete PropertyType"
        show={isShownModal}
        setIsShownModal={setIsShownModal}
        handleOK={handleDelete}
        className="w-[40%]"
      >
        <h1>Are you sure to delete this property type? </h1>
      </Modal>
      <Drawer
        isShowDrawer={isShowDrawer}
        setIsShowDrawer={setIsShowDrawer}
        title="Edit property type"
        className="w-[50%]"
      >
        <form onSubmit={(e) => handleEdit(e)} className="px-[10%] pt-2">
          <div>
            <span className="font-[400]">Property Type Name</span>
            <Input
              value={editPropertyType.name}
              onChange={(e: any) =>
                setEditPropertyType({
                  ...editPropertyType,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className=" block">
            <span className="font-[400]">Description</span>
            <Edittor
              value={editPropertyType.description}
              setValue={(value) =>
                setEditPropertyType({ ...editPropertyType, description: value })
              }
            />
          </div>
          <div>
            <span className="font-[400]">Image</span>
            <InputFile
              data={editPropertyType}
              setIData={setEditPropertyType}
              multiple={false}
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
    </div>
  );
}

export default AdminPropetyType;
