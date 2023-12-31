import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { ABOUT, CONTACT, NOT_FOUND, PACKAGES, REGISTER } from "./routes";
import About from "../pages/about/About";
import Packages from "../pages/packages/Packages";
import Register from "../pages/register/Register";
import Contact from "../pages/contact/Contact";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";
import Logout from "../pages/logout/Logout";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/admin/*" element={ <Admin /> } /> */}
        
        <Route path={'/user/*'} element={<User />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={PACKAGES} element={<Packages />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path="/admin" element={< Admin />} />
        <Route
          path={NOT_FOUND}
          element={<div className="text-4xl text-red-600"> PAGE NOT FOUND</div>}
        />
      </Routes>
    </div>
  );
}

export default Router;
