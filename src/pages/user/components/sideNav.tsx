import { FaPlus } from "react-icons/fa";

import { CiLogout } from "react-icons/ci";

import { Link, useLocation } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { AuthNav } from "../../../utils/mocks/mocks";

function SideNav() {
  const location = useLocation()
   
  return (
    <>
      <div className=" pt-12 px-9">
        {AuthNav.map((item: any, i: any) => (
          <Link key={i} to={item.path} className={` font-semibold  text-base `}>
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
          <div> Logout</div>
        </div>
      </div>
      <div className="  mx-2 p-5 text-center border border-dashed border-[#7C7C7A] min-h-[100px]">
        <div
          className="py-2 px-2 flex m-auto text-white cursor-pointer bg-[#1A8F4A] w-fit"
          style={{ borderRadius: "100%" }}
        >
          <FaPlus />
        </div>

        <div className="text-[#262627] font-[open-sans] text-base font-bold leading-8">
          Add new Admin
        </div>
        <div> </div>
      </div>
    </>
  );
}

export default SideNav;
