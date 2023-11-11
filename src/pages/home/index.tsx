import Banner from "./hero";
import Offer from "./offer/Offer";
import { TabTitle } from './../../utils/titleFunction';

function Home() {
  TabTitle('Al-Itmaam | Home')
  return (
    <div>
      <Banner />
      <Offer />
    </div>
  );
}

export default Home;

