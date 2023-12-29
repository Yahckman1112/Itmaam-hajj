import { FaPlus } from "react-icons/fa";

import { CiLogout } from "react-icons/ci";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { AuthNav } from "../../../utils/mocks/mocks";
import CustomModal from "../../../components/modal/CustomModal";
import { useState } from "react";
// import { Label } from "../../admin/admin.style";
import { Input, Label } from "../pages/packages/package.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsSearch } from "react-icons/bs";
import http from "../../../services/httpService";
import config from "../../../config.json";
import Swal from "sweetalert2";

function SideNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const validateAdmin = () => {
    return Yup.object({
      userName: Yup.string().required("Choose a Package"),
      fullName: Yup.string().required(" Makkah hotel is required"),
      email: Yup.string().required(" Madinah hotel is required").email(),
      role: Yup.string().required(" Madinah hotel is required"),
      password: Yup.string().required(" Madinah hotel is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      fullName: "",
      email: "",
      role: "",
      password: "",
    },

    validationSchema: validateAdmin(),

    onSubmit: async (values) => {
      console.log(values);
      
      try {
        await http.post(`${config.apiUrl}/users`, values);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: 'Admin added successfully',
          showCancelButton: true,
          showConfirmButton: false,
        });
          setIsOpen(false);
      } catch (error:any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data || "Something Failed",
          showCancelButton: true,
          showConfirmButton: false,
        });
        
      }
    },
  });

  const handleAddAdmin = () => {
    setIsOpen(true);
    navigate("/user");
  };

  return (
    <>
      <div className=" px-9">
        <div
          className={`${"my-6 mb-8 h-[3rem] bg-[#F5F5F5] rounded-md grid grid-cols-5 p-2  "} hideOnMobile`}
        >
          <BsSearch size={18} className="mt-2" />
          <input
            type="text"
            className={" outline-none col-span-4 bg-inherit "}
            placeholder="Search..."
          />
        </div>
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
          <Link to={'/logout'}> Logout</Link>
        </div>
      </div>
      <div className="  mx-2 p-5 text-center border border-dashed border-[#7C7C7A] min-h-[100px]">
        <div
          className="py-2 px-2 flex m-auto text-white cursor-pointer bg-[#1A8F4A] w-fit"
          style={{ borderRadius: "100%" }}
          onClick={handleAddAdmin}
        >
          <FaPlus />
        </div>

        <div className="text-[#262627] font-[open-sans] text-base font-bold leading-8">
          Add new Admin
        </div>

        {/* Add admnin */}

        {isOpen && (
          <CustomModal header="Admin" setIsOpen={setIsOpen}>
            <form onSubmit={formik.handleSubmit}>
              <div className=" text-left mb-5">
                <Label> UserName </Label>
                <Input
                  placeholder="UserName"
                  type="text"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userName && formik.errors.userName && (
                  <p className={"text-xs text-red-500"}>
                    {formik.errors.userName}
                  </p>
                )}
              </div>
              <div className=" text-left mb-5">
                <Label> FullName </Label>
                <Input
                  placeholder="FullName"
                  name="fullName"
                  type="text"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className={"text-xs text-red-500"}>
                    {formik.errors.fullName}
                  </p>
                )}
              </div>

              <div className=" text-left mb-5">
                <Label> Email </Label>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className={"text-xs text-red-500"}>
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className=" text-left mb-5">
                <Label> Role </Label>
                <Input
                  placeholder="Role"
                  name="role"
                  type="text"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.role && formik.errors.role && (
                  <p className={"text-xs text-red-500"}>{formik.errors.role}</p>
                )}
              </div>
              <div className=" text-left mb-5">
                <Label> Password </Label>
                <Input
                  placeholder="**************************"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className={"text-xs text-red-500"}>
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A8F4A] py-3 mt-2 shadow-lg rounded-sm text-[#FCFCFC]"
              >
                Add Admin
              </button>
            </form>
          </CustomModal>
        )}
      </div>
    </>
  );
}

export default SideNav;
