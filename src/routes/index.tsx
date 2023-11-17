
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { ABOUT, NOT_FOUND, PACKAGES } from "./routes";
import About from "../pages/about/About";
import Packages from "../pages/packages/Packages";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        < Route path={ABOUT} element={< About />}/> 
        < Route path={ PACKAGES } element={< Packages />}/> 
        < Route path={NOT_FOUND} element={< div className="text-4xl text-red-600"> PAGE NOT FOUND</div>}/>
      </Routes>
    </div>
  );
}

export default Router;
