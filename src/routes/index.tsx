
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { NOT_FOUND } from "./routes";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        < Route path={NOT_FOUND} element={< div className="text-4xl text-red-600"> PAGE NOT FOUND</div>}/>
      </Routes>
    </div>
  );
}

export default Router;
