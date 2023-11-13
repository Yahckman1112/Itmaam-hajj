import img1 from "../../../assets/about1.jpg";

import CustomButton from "../../../components/customButton/CustomButton";

function About() {
  const cardInfo = [
    {
      package: "Umrah",
      price: 200,
      list: [
        { name: "Private Airport Transfers", available: true },
        { name: "International Airfare", available: true },
        { name: "Umrah Visa", available: false },
        { name: "   Land Transportation", available: true },
        { name: "Accomodation", available: true },
        { name: "Lunch", available: true },
        { name: "Dinner", available: true },
      ],
    },
    {
      package: "Hajj",
      price: 300,
      list: [
        { name: "Private Airport Transfers", available: true },
        { name: "International Airfare", available: true },
        { name: "Umrah Visa", available: false },
        { name: "   Land Transportation", available: true },
        { name: "Accomodation", available: true },
        { name: "Lunch", available: true },
        { name: "Dinner", available: true },
      ],
    },
    {
      package: "Hajj Plus",
      price: 400,
      list: [
        { name: "Private Airport Transfers", available: true },
        { name: "International Airfare", available: true },
        { name: "Umrah Visa", available: false },
        { name: "   Land Transportation", available: true },
        { name: "Accomodation", available: true },
        { name: "Lunch", available: true },
        { name: "Dinner", available: true },
      ],
    },
  ];
  return (
    <div className="min-h-screen max-w-[100%] px-5 md:px-32 py-12">
      <section className="md:grid grid-cols-2 gap-10">
        <div>
          <img src={img1} alt="" className="object-cover rounded-lg" />
        </div>
        <div className="mt-10 md:mt-0">
          <p className="text-base font-semibold text-[#ffc107] leading-8">
            ABOUT
          </p>
          <p className="text-2xl font-bold text-[#2d2c2c] leading-10">
            The Smart Way to Go Umrah and Hajj
          </p>
          <p className="text-[#929191] text-base leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            ipsum optio nesciunt vitae quibusdam dolore adipisci ducimus,
            delectus architecto iste? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Minus ipsum optio nesciunt vitae quibusdam dolore
          </p>
          <div className="text-base leading-7 md:leading-10 text-[#929191]  mt-5">
            <p>
              {" "}
              <span className="font-bold mr-2 text-[#007bffe0]">
                &#10003;
              </span>{" "}
              Enhanced Features for High-Quality 360 Content
            </p>

            <p>
              {" "}
              <span className="font-bold mr-2 text-[#007bffe0]">
                &#10003;
              </span>{" "}
              Always Stay Connected with 360 Social Live Broadcast
            </p>

            <p>
              <span className="font-bold mr-2 text-[#007bffe0]">&#10003;</span>{" "}
              Expanded Compatibility for More 360 Experiences
            </p>
          </div>
          <div className="mt-4">
            <CustomButton> Apply Now</CustomButton>
          </div>
        </div>
      </section>

      <section className="py-8">
        <p className="text-base text-center font-semibold text-[#ffc107] leading-8">
          PACKAGES
        </p>
        <p className="text-2xl text-center font-bold text-[#2d2c2c] leading-10">
          Hajj And Umrah Packages
        </p>

        <div className="md:grid grid-cols-3 gap-7 py-7  ">
          {cardInfo.map((packages: any, i: number) => (
            <div
              className="border border-solid border-red-700  rounded-lg"
              key={i}
            >
              <div className="bg-[#2d2c2c] rounded-t-lg px-5  pt-6 py-11">
                <p className="text-white font-bold text-2xl mb-1">
                  {packages.package}
                </p>
                <p className="text-base text-[#ffc107] font normal ">
                  ${packages.price} USD/Person
                </p>
              </div>

              <div className=" px-5 ">
                <button className="bg-[#E5EFFF] font-semibold hover:scale-95 hover:bg-[#ffc107] transform duration-700 transition-transform -mt-10  px-8 py-4 rounded-lg">
                  Get Started
                </button>

                <div className="text-sm leading-7 md:leading-10 text-[#929191]  mt-5">
                  {packages.list.map((item: any, i: number) => (
                    <p key={i}>
                      {item.available ? (
                        <span className="font-bold mr-2 text-[#007bffe0] border border-solid p-2 px-3 rounded-full">
                          &#10003;
                        </span>
                      ) : (
                        <span className="font-bold mr-2 text-red-500 border border-solid px-3 p-2 rounded-full">
                          &#x2715;
                        </span>
                      )}

                      {item.name}
                    </p>
                  ))}
                 
             
                </div>
              </div>
            </div>
          ))}
        
        </div>
      </section>
    </div>
  );
}

export default About;
