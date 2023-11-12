import intro1 from "../../../assets/intro_1.jpg";
import intro2 from "../../../assets/intro_2.jpg";
import intro3 from "../../../assets/intro_3.jpg";
import feature from "../../../assets/feture.jpg";
import luggage from "../../../assets/svg/luggage.svg";
import customerService from "../../../assets/svg/customer-service.svg";
import hotel from "../../../assets/svg/hotel.svg";
import tour from "../../../assets/svg/tour.svg";
import CustomButton from "../../../components/customButton/CustomButton";
import { IntroCard, OfferDiv } from "./offer.style";

function Offer() {
  const introCards = [
    {
      img: intro1,
      location: "Hajj",
      price: "140",
    },
    {
      img: intro2,
      location: "Umrah",
      price: "225",
    },
    {
      img: intro3,
      location: "Tour",
      price: "300",
    },
  ];

  const offerDatas = [
    {
      logo: luggage,
      offer: "Free Luggage",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ipsam reiciendis saepe maiores nemo`,
    },
    {
      logo: customerService,
      offer: "Customer Support",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ipsam reiciendis saepe maiores nemo`,
    },
    {
      logo: hotel,
      offer: "5 Star Hotel",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ipsam reiciendis saepe maiores nemo`,
    },
    {
      logo: tour,
      offer: "Hajj Tour",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ipsam reiciendis saepe maiores nemo`,
    },
  ];
  return (
    <div>
      <div className="min-h-screen text-center pt-10 px-5 md:p-10 lg:px-32 ">
        <p className="font-bold text-[#2d2c2c]">Special Offers</p>
        <p className="text-xl italic text-[#929191]">
          Hajj and Umrah Special Offers
        </p>

        <div className=" lg:grid grid-cols-3 gap-6 pt-9 md:px-11 lg:px-14">
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
              <p className="text-5xl mt-28 text-white font-bold">
                {item.location}
              </p>
              <p className="text-sm font-normal text-white mt-7">
                from ${item.price}
              </p>
              <div className="mt-28">
                <CustomButton> See More</CustomButton>
              </div>
            </IntroCard>
          ))}
        </div>
      </div>
      <section
        className="min-h-screen bg-cover bg-center p-4 py-20 md:p-28 "
        style={{
          backgroundImage: `linear-gradient(to bottom right, #ffc107, #6710f241), url(${feature})`,
        }}
      >
        <div className="bg-white py-5 px-5 md:px-10  ">
          <div className="text-center">
            <p className="font-bold text-2xl text-[#2d2c2c] uppercase">
              What Do We Offer?{" "}
            </p>
            <p className="font-semibold font-sans text-sm mg:text-lg leading-7 mt-8  text-[#929191]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              culpa est vero veniam officiis delectus dolores, provident minus,
              quo et ipsa consectetur accusamus molestiae reiciendis dolorum
              ipsum sapiente hic impedit!
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[50vh] mt-4">
            {offerDatas.map((item: any, i: number) => (
              <OfferDiv className=" mt-10 " key={i}>
                <div className="mr-2">
                  <img src={item.logo} alt="the logos" width={"50px"} />
                </div>
                <div className=" ">
                  <p className="text-[#2d2c2c] font-bold text-lg">
                    {item.offer}
                  </p>
                  <p className="text-[#929191] leading-6">{item.description}</p>
                </div>
              </OfferDiv>
            ))}
          </div>
          <div  className="flex justify-center m-auto pt-10">
            <CustomButton>Book Now</CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offer;
