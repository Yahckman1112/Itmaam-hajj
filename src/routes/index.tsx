
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { ABOUT, NOT_FOUND } from "./routes";
import About from "../pages/about/About";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        < Route path={ABOUT} element={< About />}/>
        < Route path={NOT_FOUND} element={< div className="text-4xl text-red-600"> PAGE NOT FOUND</div>}/>
      </Routes>
    </div>
  );
}

export default Router;
