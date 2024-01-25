"use client";
import React, { memo, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { navbar } from "@/static/static";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Modal from "../common/Modal";
import Account from "../account/Account";
import withBaseComponent from "@/hocs/withBaseComponent";
function Navbar({ router }: any) {
  const pathname = usePathname();
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const [isShownAddListing, setIsShownAddListing] = useState<boolean>(false);
  const [user, setUser] = useState<any>({
    phone: "",
    name: "",
    password: "",
    role: "",
  });
  const { token, current } = useSelector((state: any) => state.user);
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
          <div className="flex relative">
            <Button
              className={`bg-none  border px-2 rounded-md`}
              text="Add Listing"
              onClick={() => setIsShownAddListing(!isShownAddListing)}
            />
          </div>
        )}
      </div>

      <Modal
        show={isShownModal}
        setIsShownModal={setIsShownModal}
        showFooterModal={true}
        className="md:w-[30%] w-[50%]"
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

export default withBaseComponent(memo(Navbar));
