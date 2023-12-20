import CustomBanner from "../../components/customBanner/CustomBanner";
import banner from "../../assets/applyBanner.jpg";
import formSide from "../../assets/3.jpg";
// import { Input } from "./register.style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../user/pages/packages/package.styles";
import config from "../../config.json";
import http from "../../services/httpService";
import Swal from "sweetalert2";

function Register() {
  const CusromerApply = () => {
    return Yup.object({
      firstName: Yup.string().required("Let us Know ur name"),
      lastName: Yup.string().required("Let us Know ur name"),
      gender: Yup.string().required("gender is required"),
      package: Yup.string().required("gender is required"),
      email: Yup.string().required("enter your valid email").email(),
      phone: Yup.number().required("Enter your phone number"),
    });
  };


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      package: "",
      email: "",
      phone: "",
    },
    validationSchema: CusromerApply(),

    onSubmit: async (values) => {
      console.log(values);

      try {
        
        await http.post(`${config.apiUrl}/applicants`,values);
      
        Swal.fire({
          icon: "success",
          title: "Success",
          text: 'Application submitted successdully',
          showCancelButton: true,
          showConfirmButton: false,
        });
        formik.handleReset(values)
        
      } catch (error:any) {
        console.log(error?.response.data);
        console.log(error.response);
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

  return (
    <div>
      <div>
        <CustomBanner pageName="Apply Now" bgImage={banner} />
      </div>
      <div className=" p-5 md:p-20 ">
        <div className="  lg:grid grid-cols-2 shadow-xl gap-5 md:p-5 min-h-[70vh]">
          <div className=" rounded-lg">
            <img src={formSide} alt="" className=" object-cover" />
          </div>

          <div className="p-5">
            <p className="text-3xl font-bold text-center leading-9">
              Apply Now
            </p>
            <p className="text-lg font-normal text-center text-[#929191] my-7">
              Let's Get Intouch with You{" "}
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className=" mt-10">
                  <Input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className={"text-sm text-red-500"}>
                    {formik.errors.firstName}
                  </p>
                )}
                <div className=" mt-10">
                  <Input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className={"text-sm text-red-500"}>
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
              <div className=" lg:grid grid-cols-2 gap-5 ">
                {/* here we qre */}
                {/* here we qre */}
                {/* here we qre */}
                {/* here we qre */}
                <div className="mt-10">
                  <Select
                    id="cars"
                    name="package"
                    value={formik.values.package}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" label="Slect a package" />
                    <option value="Umrah Package">Umrah Package</option>
                    <option value="Hajj Package">Hajj Package</option>
                    <option value="Ramadan Umrah">Ramadan Umrah</option>
                  </Select>

                  {formik.touched.package && formik.errors.package && (
                    <p className={"text-xs text-red-500"}>
                      {formik.errors.package}
                    </p>
                  )}
                </div>

                <div className="mt-10">
                  <Select
                    id="cars"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" label="Slect a Gender" />
                    <option value="Male">Male </option>
                    <option value="Female ">Female </option>
                  </Select>

                  {formik.touched.gender && formik.errors.gender && (
                    <p className={"text-xs text-red-500"}>
                      {formik.errors.gender}
                    </p>
                  )}
                </div>
              </div>
              <div className=" mt-10">
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className={"text-sm text-red-500"}>{formik.errors.email}</p>
              )}
              <div className=" mt-10">
                <Input
                  placeholder={`Phone Number`}
                  type="number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <p className={"text-sm text-red-500"}>{formik.errors.phone}</p>
              )}

              <button
                type="submit"
                className="flex m-auto my-8 bg-[#E5EFFF] hover:bg-[#ffc107] px-10 py-4 rounded-full"
              >
                Apply Now{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
