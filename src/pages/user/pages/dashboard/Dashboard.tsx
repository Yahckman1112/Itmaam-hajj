import { FaUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdEventSeat } from "react-icons/md";

function Dashboard() {
  const cardData = [
    {
      icon: <FaUser size={25} />,
      title: "Total Applicants",
      number: 882,
      percentage: "10%",
    },
    {
      icon: <GrUserAdmin size={25} />,
      title: "Total Admin",
      number: 7,
      percentage: "10%",
    },
    {
      icon: <MdEventSeat size={25} />,
      title: "Total Events",
      number: 6,
      percentage: "10%",
    },
  ];
  return (
    <div>
      <p className="text-4xl font-bold font-[open-sans] text-[#1A8F4A]">
        Dashboard
      </p>
      <div className="md:grid md:grid-cols2 lg:grid-cols-3 gap-8 my-10">
        {cardData.map((item: any, i: any) => (
          <div
            className=" shadow-sm flex mb-8 p-5 md:px-5 md:py-7 mr-2"
            key={i}
          >
            <div className="flex justify-center align-middle bg-[#E1FFED] py-4 px-4 rounded-full h-fit">
              {item.icon}
            </div>
            <div className="text-[open-sans] px-7">
              <p className="text-[#A098AE] text-base font-normal leading-8">
                {item.title}
              </p>
              <p className="text-4xl font-bold ">{item.number}</p>
              <p className="text-[#4CBC9A] text-base font-normal leading-8">
                {" "}
                <span> {item.percentage} </span>than last month
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
