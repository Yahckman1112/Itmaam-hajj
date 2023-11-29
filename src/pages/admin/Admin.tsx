import { Label, LoginContainer } from "./admin.style";
// import banner from "../../assets/loginbg.png";
import { LoginInput } from "./admin.style";
function Admin() {
  return (
    <div
      className="h-screen p-7  bg-[#F1F6F9] m-auto flex justify-center items-center"
      //   style={{ backgroundImage: `url(${banner})` }}
    >
      <LoginContainer className="px-10 py-12 bg-white  border-x-0 border-y-0  max-w-[450px] font-[open-sans] rounded-lg border border-solid border-t-[5px] border-[#1A8F4A]">
        <p className="text-[#1A8F4A] mb-7 font-bold text-4xl ">Login</p>
        <div className="mb-12">
          <Label>Email</Label>
          <LoginInput placeholder="email" />
        </div>

        <div className="mb-12 ">
          <Label>Password</Label>
          <LoginInput placeholder="Password" />
        </div>
        <p className="text-[#1A8F4A] text-right cursor-pointer font-semibold text-base">
          Forgot Password?{" "}
        </p>

        <button className="w-full mt-5 py-3 bg-[#1A8F4A] shadow-sm rounded-sm text-[#FCFCFC] font-semibold text-base ">
          Login
        </button>
      </LoginContainer>
    </div>
  );
}

export default Admin;
