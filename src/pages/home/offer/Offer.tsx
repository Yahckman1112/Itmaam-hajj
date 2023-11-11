import intro1 from "../../../assets/intro_1.jpg";
import intro2 from "../../../assets/intro_2.jpg";
import intro3 from "../../../assets/intro_3.jpg";
import CustomButton from "../../../components/customButton/CustomButton";
import { IntroCard } from "./offer.style";

function Offer() {
  const introCards = [
    {
      img: intro1,
      location: "Riyaadh",
      price: "140",
    },
    {
      img: intro2,
      location: "Makkah",
      price: "225",
    },
    {
      img: intro3,
      location: "Madinah",
      price: "300",
    },
  ];
  return (
    <div className="min-h-screen text-center pt-10 px-5 md:p-10 ">
      <p className="font-bold text-[#2d2c2c]">Special Offers</p>
      <p className="text-xl italic text-[#929191]">
        Hajj and Umrah Special Offers
      </p>

      <div className=" lg:grid grid-cols-3 gap-6 pt-9 md:px-11 lg:px-16">
        {introCards.map((item: any, i: number) => (
          <IntroCard
            style={{
              backgroundImage: `linear-gradient(to bottom, #6710f2a6, #6710f241), url(${item.img})`,
            }}
            className="p-7 md:p-7 w-full h-full rounded-lg mb-8"
            key={i}
          >
            <p className="bg-[#ffc107] rounded-full py-2 text-white font-semibold">
              May 24th - June 30th{" "}
            </p>
            <p className="text-6xl mt-32 text-white font-bold">
              {item.location}
            </p>
            <p className="text-sm font-normal text-white mt-7">
              from ${item.price}
            </p>
            <div className="mt-32">
              <CustomButton> See More</CustomButton>
            </div>
          </IntroCard>
        ))}
      </div>
    </div>
  );
}

export default Offer;
