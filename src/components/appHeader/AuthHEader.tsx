// import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import Drawer from "react-modern-drawer";
import useAppHeader from "./useAppHeader";
import { Link, useLocation } from "react-router-dom";
import { AuthNav } from "../../utils/mocks/mocks";
import { BsDot } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

interface UserProps {
  username?: string;
  role?: string;
}
function AuthHeader() {
  const { isOpen, handleDrawer } = useAppHeader();
  const location = useLocation();
  const userContextValue = useContext(UserContext);
  const user = userContextValue?.currentUSer as UserProps;
  
  // Rest of your component...
  


  return (
    <div>
      <div className=" px-4 md:px-9 py-3 flex justify-between fotn-bold ">
        <div className="text-[#2A2A2A] text-2xl font-medium flex ">
          <TfiMenu
            size={28}
            className=" mr-3 lg:hidden"
            onClick={handleDrawer}
          />
          Al-Itmaam
        </div>
        <div className="grid grid-cols-2 gap-3 ">
          <div className=" text-right pt-2">
            <p className="303972 text-sm font-semibold">{user?.username}</p>
            <p className="text-[#A098AE] font-semibold text-sm">{user?.role}</p>
          </div>

          <div>
            <p style={{borderRadius:'100%'}} className=" bg-[#1A8F4A] font-semibold text-white text-2xl rounded-full text-center py-3">
              {user?.username?.charAt(0)}
            </p>
          </div>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={handleDrawer}
        direction="left"
        className="bg-black"
      >
        <div className="px-5 py-12">
          {AuthNav.map((item: any, i: any) => (
            <Link
              key={i}
              to={item.path}
              className={` font-semibold  text-base `}
            >
              <div
                className="flex mb-10  "
                style={{
                  color: item.location.includes(location.pathname)
                    ? "#1A8F4A"
                    : "#7C7C7A",
                }}
              >
                <div className="mr-2">{item.icon}</div>
                <div
                  style={{
                    fontWeight: item.location.includes(location.pathname)
                      ? "700"
                      : "",
                  }}
                >
                  {item.name}
                </div>
                {item.location.includes(location.pathname) && (
                  <BsDot className="ml-4 " size={25} />
                )}
              </div>
            </Link>
          ))}
          <div className="flex font-semibold  text-base text-[#7C7C7A] cursor-pointer">
            <div className="mr-2 mb-16">
              <CiLogout size={20} />
            </div>
            <Link to={'/logout'}> Logout</Link >
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default AuthHeader;
