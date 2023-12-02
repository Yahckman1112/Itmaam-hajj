import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdEventSeat } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NotificationCard from "../../../../components/notificationCard/NotificationCard";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Dashboard() {
  const [dateValue, setDateValue] = useState<Value>(new Date());

  const notifications = [
    {
      title: " Registration for winter semeester starts",
      body: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sint
      aliquid dolorem in? Id, a. Aliquam, iure magni. Aliquam quasi nemo
      consectetur laudantium, inventore iusto voluptatibus officia, vitae
      voluptatum necessitatibus quo. Facere culpa alias vitae sint similique
      hic ipsa?`,
      latest: true,
    },
    {
      title: " Registration for winter semeester starts",
      body: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sint
      aliquid dolorem in? Id, a. Aliquam, iure magni. Aliquam quasi nemo
      consectetur laudantium, inventore iusto voluptatibus officia, vitae
      voluptatum necessitatibus quo. Facere culpa alias vitae sint similique
      hic ipsa?`,
      latest: false,
    },
    {
      title: " Registration for winter semeester starts",
      body: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sint
      aliquid dolorem in? Id, a. Aliquam, iure magni. Aliquam quasi nemo
      consectetur laudantium, inventore iusto voluptatibus officia, vitae
      voluptatum necessitatibus quo. Facere culpa alias vitae sint similique
      hic ipsa?`,
      latest: false,
    },
  ];
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
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
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
      </section>

      <section className="grid grid-cols-3 gap-10 py-8">
        <div className=" col-span-2 bg-white p-5 rounded-md shadow-md">
          <p className="#161E03 text-xl font-semibold mb-5 ">Notification</p>
          {notifications.map((item: any, i: number) => (
            <NotificationCard
              title={item.title}
              notification={item.body}
              latest={item.latest}
              key={i}
       
            />
          ))}
        </div>
        <div className="bg-white p-2 shadow-md rounded-md">
          <p className="#161E03 text-xl font-semibold mb-5 ">Calender</p>
          <div>
            <Calendar onChange={setDateValue} value={dateValue} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
