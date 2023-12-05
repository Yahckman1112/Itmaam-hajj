import { Route, Routes } from "react-router-dom";
import SideNav from "./components/sideNav";
import Dashboard from "./pages/dashboard/Dashboard";
import { FaAccessibleIcon } from "react-icons/fa";
import TopBar from "../../components/appHeader/TopBar";
import Packages from "./pages/packages/Packages";
import Applicants from "./pages/applicants/Applicants";

function User() {
  return (
    <>
      <TopBar />
      <div className="lg:flex h-screen ">
        <div className=" w-64 mr-4 hidden lg:block">
          <SideNav />
        </div>
        <div className="block lg:hidden">
          <FaAccessibleIcon />{" "}
        </div>

        <div className="max-h-screen overflow-y-scroll flex-1 p-6 bg-[#FCFFF5]">
          <Routes>
            <Route path="/packages" element={<Packages />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default User;
