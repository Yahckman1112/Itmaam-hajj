import Banner from "./hero";
import Offer from "./offer/Offer";
import { TabTitle } from "./../../utils/titleFunction";
import About from "./about/About";
import Clients from "./clients/Clients";

function Home() {
  TabTitle("Al-Itmaam | Home");
  return (
    <div>
      <Banner />
      <Offer />
      <About />
      < Clients/>
    </div>
  );
}

export default Home;
