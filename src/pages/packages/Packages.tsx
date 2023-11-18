import CustomBanner from "../../components/customBanner/CustomBanner";
import packageBg from "../../assets/packagesBg.jpg";
import img1 from "../../assets/3.jpg";
import MakkahHotel from "../../assets/hotel-1.png";
import MadinahHotel from "../../assets/hotel.png";
// @ts-ignore
import ProgressBar from "react-progressbar";

function Packages() {
  const packageData = [
    {
      img: img1,
      name: "Umrah Package",
      time: 20,
      currentPrice: 15000,
      lastPrice: 18000,
      registeredClient: 65,
      totalSpace: 160,
    },
    {
      img: img1,
      name: "Hajj Package",
      time: 20,
      currentPrice: 15000,
      lastPrice: 18000,
      registeredClient: 76,
      totalSpace: 160,
    },
    {
      img: img1,
      name: "Ramdan Umrah",
      time: 20,
      currentPrice: 15000,
      lastPrice: 18000,
      registeredClient: 55,
      totalSpace: 160,
    },
    {
      img: img1,
      name: "Umrah and Turkey Tour",
      time: 20,
      currentPrice: 15000,
      lastPrice: 18000,
      registeredClient: 55,
      totalSpace: 160,
    },
    {
      img: img1,
      name: "10 Days Umrah",
      time: 20,
      currentPrice: 15000,
      lastPrice: 18000,
      registeredClient: 55,
      totalSpace: 160,
    },
    {
      img: img1,
      name: "7 days Umrah",
      time: 20,
      currentPrice: 15000,
      lastPrice: 18000,
      registeredClient: 55,
      totalSpace: 160,
    },
  ];


  return (
    <div>
      <div>
        <CustomBanner pageName="Our Packages" bgImage={packageBg} />
      </div>
      <section className=" p-5 mg:p-10 lg:p-20 min-h-screen">
        <p className="text-center text-2xl font-semibold"> Our Packages</p>
        <div className="md:grid mt-7 md:grid-cols-1 lg:grid-cols-3 gap-7">
          {packageData.map((item: any, i: any) => (
            <div className="rounded-lg border border-solid my-7" key={i}>
              <div>
                <img src={item.img} alt="" className="  object-cover" />
              </div>
              <div className="p-7">
                <p className="text-2xl font-semibold">{item.name}</p>
                <div
                  className="grid grid-cols-2 my-7 "
                  style={{ gridTemplateColumns: "20% 80%" }}
                >
                  <div>
                    <img
                      src={MakkahHotel}
                      width={"50px"}
                      alt=""
                      className="flex m-aut0"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold mb-1 ">
                      MAKKAH : Hotel Name
                    </p>
                    <p className="text-[15px] font-bold text-[#007bff] ">
                      {item.time} MIN To Masjidil Haram
                    </p>
                  </div>
                </div>
                <div
                  className="grid grid-cols-2 my-7"
                  style={{ gridTemplateColumns: "20% 80%" }}
                >
                  <div>
                    <img
                      src={MadinahHotel}
                      width={"50px"}
                      alt=""
                      className="flex m-aut0"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold mb-1 ">
                      MAKKAH : Hotel Name
                    </p>
                    <p className="text-[15px] font-bold text-[#007bff] ">
                      {item.time} MIN To Nabawi Mosque
                    </p>
                  </div>
                </div>

                <p className="text-[#007bff] text-2xl font-semibold my-12 mb-7">
                  {" "}
                  <span className="text-[#929191] line-through text-lg font-normal">
                    {item.lastPrice} USD/P
                  </span>{" "}
                  {item.currentPrice} USD/P{" "}
                </p>

                <button className="text-base text-black font-bold uppercase px-12 py-3  bg-[#e5efffbc] hover:bg-[#ffc107] transition-transform duration-500 transform  rounded-full">
                  Apply Now
                </button>
              </div>
              <div className="my-9 border border-solid border-t-1 border-b-0 border-r-0 border-l-0 pt-7 p-3">
                <div className="w-full border border-solid rounded-lg">
                  <ProgressBar
                    completed={(item.registeredClient / item.totalSpace) * 100}
                  />
                </div>
                <p className="mt-3 text-xs font-semibold">
                  Booked : {item.registeredClient}/{item.totalSpace}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Packages;
