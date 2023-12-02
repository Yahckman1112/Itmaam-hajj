import { Label, LoginContainer } from "./admin.style";
// import banner from "../../assets/loginbg.png";
import { LoginInput } from "./admin.style";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
// import http from "../../services/httpService";
import { useNavigate } from "react-router-dom";


function Admin() {
  const navigate = useNavigate()
  const loginValidate = () => {
    return Yup.object({
      email: Yup.string().required("enter your valid email").email(),
      password: Yup.string().required("Enter ur valid password"),
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate(),

    onSubmit: async (values) => {
      try {
        // console.log(values);
        // const { data: jwt } = await http.post(
        //   "http://localhost:5000/api/auth",
        //   values
        // );
        // localStorage.setItem("token", jwt);
        // console.log(jwt);

        // Swal.fire({
        //   icon: "success",
        //   title: "Successful",
        //   text: "Loged in successfully",
        //   showCancelButton: true,
        //   showConfirmButton: false,
        // });
console.log(values);

        navigate('/user')

        
      } catch (error:any) {
        console.log(error);
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data || "Authentication failed",
          showCancelButton: true,
          showConfirmButton: false,
        });
      }
    },
  });

  return (
    <div
      className="h-screen p-5  bg-[#F1F6F9] m-auto flex justify-center items-center"
      //   style={{ backgroundImage: `url(${banner})` }}
    >
      <LoginContainer className="px-10 py-12 bg-white  border-x-0 border-y-0  max-w-[450px] font-[open-sans] rounded-lg border border-solid border-t-[5px] border-[#1A8F4A]">
        <p className="text-[#1A8F4A] mb-7 font-bold text-4xl ">Login</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mb-12">
            <Label>Email</Label>
            <LoginInput
              placeholder="email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={"text-xs mt-2 text-red-500"}>
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="mb-12 ">
            <Label>Password</Label>
            <LoginInput
              placeholder="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={"text-xs mt-2 text-red-500"}>
                {formik.errors.password}
              </p>
            )}
          </div>
          <p className="text-[#1A8F4A] text-right cursor-pointer font-semibold text-base">
            Forgot Password?{" "}
          </p>

          <button
            type="submit"
            className="w-full mt-5 py-3 bg-[#1A8F4A] shadow-sm rounded-sm text-[#FCFCFC] font-semibold text-base "
          >
            Login
          </button>
        </form>
      </LoginContainer>
    </div>
  );
}

export default Admin;
