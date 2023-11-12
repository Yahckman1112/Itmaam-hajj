import Banner from "./hero";
import Offer from "./offer/Offer";
import { TabTitle } from "./../../utils/titleFunction";
import About from "./about/About";

function Home() {
  TabTitle("Al-Itmaam | Home");
  return (
    <div>
      <Banner />
      <Offer />
      <About />
    </div>
  );
}

export default Home;
