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





function SideNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const validateAdmin = () => {
    return Yup.object({
      username: Yup.string().required("Choose a Package"),
      fullname: Yup.string().required(" Makkah hotel is required"),
      email: Yup.string().required(" Madinah hotel is required").email(),
      role: Yup.string().required(" Madinah hotel is required"),
      password: Yup.string().required(" Madinah hotel is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      role: "",
      password: "",
    },

    validationSchema: validateAdmin(),

    onSubmit: (values) => {
      console.log(values);
      setIsOpen(false)

      // @ts-ignore
      formik.handleReset();
      
    },
  });


  const handleAddAdmin=()=>{
    setIsOpen(true)
    navigate('/user')
  }

  
  return (
    <>


     


      <div className=" px-9">
      <div className={`${'my-6 mb-8 h-[3rem] bg-[#F5F5F5] rounded-md grid grid-cols-5 p-2  '} hideOnMobile`}>
        <BsSearch size={18} className='mt-2' />
        <input type="text" className={' outline-none col-span-4 bg-inherit '} placeholder="Search..." />
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
          <div> Logout</div>
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

        {isOpen && (
          <CustomModal header="Admin" setIsOpen={setIsOpen}>
            <form onSubmit={formik.handleSubmit}>
              <div className=" text-left mb-5">
                <Label> Username </Label>
                <Input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                  <p className={"text-xs text-red-500"}>
                    {formik.errors.username}
                  </p>
                )}
              </div>
              <div className=" text-left mb-5">
                <Label> Fullname </Label>
                <Input
                  placeholder="Fullname"
                  name="fullname"
                  type="text"

                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullname && formik.errors.fullname && (
                  <p className={"text-xs text-red-500"}>
                    {formik.errors.fullname}
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
