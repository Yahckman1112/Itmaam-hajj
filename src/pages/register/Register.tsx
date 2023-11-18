import CustomBanner from "../../components/customBanner/CustomBanner";
import banner from "../../assets/applyBanner.jpg";
import formSide from "../../assets/3.jpg";
import { Input } from "./register.style";

function Register() {
  return (
    <div>
      <div>
        <CustomBanner pageName="Apply Now" bgImage={banner} />
      </div>
      {/* className='bg-cover bg-center mt-10' style={{backgroundImage:` linear-gradient(to right, #0d021f58, #0d021f58 ) ,url(${formSide})`}} */}
      <div className=" p-5 md:p-20 ">
        <div className="  lg:grid grid-cols-2 shadow-xl gap-5 md:p-5 min-h-[70vh]">
          <div className=" rounded-lg" >
            <img src={formSide} alt="" />
          </div>

          <div className="p-5">
            <p className="text-3xl font-bold text-center leading-9">Apply Now</p>
            <p className="text-lg font-normal text-center text-[#929191] my-7">
              Give us the Information to get to you{" "}
            </p>

            <form action="">
                <div className="md:grid grid-cols-2 gap-5">

              <div className="border border-solid border-b-2 border-x-0 border-y-0 mb-10">
                <Input placeholder="First Name" />
              </div>
              <div className="border border-solid border-b-2 border-x-0 border-y-0 mb-10">
                <Input placeholder="Last Name" />
              </div>
                </div>
              <div className="border border-solid border-b-2 border-x-0 border-y-0 mb-10">
                <Input placeholder="Email" />
              </div>
              <div className="border border-solid border-b-2 border-x-0 border-y-0 mb-10">
                <Input placeholder="Phone Number" />
              </div>

              <button className="flex m-auto bg-[#E5EFFF] hover:bg-[#ffc107] px-10 py-4 rounded-full">Apply Now </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
