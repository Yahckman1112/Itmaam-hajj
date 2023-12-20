import CustomBanner from "../../components/customBanner/CustomBanner";
import packageBg from "../../assets/packagesBg.jpg";
import img1 from "../../assets/3.jpg";
import img2 from "../../assets/4.jpg";
import MakkahHotel from "../../assets/hotel-1.png";
import MadinahHotel from "../../assets/hotel.png";
import config from "../../config.json";
import http from "../../services/httpService";
// @ts-ignore
import ProgressBar from "react-progressbar";
import { useEffect, useState } from "react";
// import { number } from "yup";

function Packages() {
  const [packages, setPackages] = useState([]);
  const imgs = [img1, img2];

  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get(`${config.apiUrl}/packages`);

      console.log(data);
      setPackages(data);
    };
    getData();
  }, []);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imgs.length);
    return imgs[randomIndex];
  };

  return (
    <div>
      <div>
        <CustomBanner pageName="Our Packages" bgImage={packageBg} />
      </div>
      <section className=" p-5 mg:p-10 lg:p-20 min-h-screen">
        <p className="text-center text-2xl font-semibold"> Our Packages</p>
        <div className="md:grid mt-7 md:grid-cols-1 lg:grid-cols-3 gap-7">
          {packages.map((item: any, i: any) => (
            <div className="rounded-lg border border-solid my-7" key={i}>
              <div>
                <img src={getRandomImage()} alt="" className="  object-cover" />
              </div>
              <div className="p-7">
                <p className="text-2xl font-semibold">{item.packageName}</p>
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
                      MAKKAH :{item.makkahHotelName}
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
                      MAKKAH : {item.madinahHotelName}
                    </p>
                    <p className="text-[15px] font-bold text-[#007bff] ">
                      {item.time} MIN To Nabawi Mosque
                    </p>
                  </div>
                </div>

                <p className="text-[#007bff] text-2xl font-semibold my-12 mb-7">
                  {" "}
                  <span className="text-[#929191] line-through text-lg font-normal">
                    {item.nullPrice} USD/P
                  </span>{" "}
                  {item.price} USD/P{" "}
                </p>

   


                <button className="text-base text-black font-bold uppercase px-12 py-3  bg-[#e5efffbc] hover:bg-[#ffc107] transition-transform duration-500 transform  rounded-full">
                 Read More
                </button>
              </div>
              <div className="my-9 border border-solid border-t-1 border-b-0 border-r-0 border-l-0 pt-7 p-3">
                <div className="w-full border border-solid rounded-lg">
                  <ProgressBar
                    // completed={(item.registeredClient / item.totalSpace) * 100}
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
