"use client";
import React, { memo, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { navbar } from "@/static";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Modal from "../common/Modal";
import Account from "../account/Account";
function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const [user, setUser] = useState<any>({
    phone: "",
    name: "",
    password: "",
    role: "",
  });
  const { token } = useSelector((state: any) => state.user);
  const handleNavigate = (nav: any) => {
    router.push(nav.href);
  };

  return (
    <div
      className={`py-8 w-full px-[8%] flex justify-between ${
        pathname === "/" ? "text-white bg-none" : "text-black"
      }`}
    >
      <Link
        href="/"
        className="h-full flex  items-center  w-[12%] text-[26px] "
      >
        <IoHomeOutline className=" mr-2 text-[30px]" />
        <p className="font-serif">NTHome</p>
      </Link>
      <div className="flex">
        {navbar.map((nav, index) => {
          return (
            <div key={index} className="flex px-2">
              <Button
                className={`bg-none  ${pathname === nav.href && "font-[700]"}`}
                text={nav.name}
                onClick={() => handleNavigate(nav)}
              />
            </div>
          );
        })}
        {!token ? (
          <Button
            className={`bg-none  border px-2 rounded-md`}
            text="Sign In"
            onClick={() => setIsShownModal(true)}
          />
        ) : (
          <Button
            className={`bg-none  border px-2 rounded-md`}
            text="Add Listing"
            onClick={() => setIsShownModal(true)}
          />
        )}
      </div>
      <Modal
        show={isShownModal}
        setIsShownModal={setIsShownModal}
        showFooterModal={true}
      >
        <Account
          user={user}
          setUser={setUser}
          setIsShownModal={setIsShownModal}
        />
      </Modal>
    </div>
  );
}

export default memo(Navbar);
