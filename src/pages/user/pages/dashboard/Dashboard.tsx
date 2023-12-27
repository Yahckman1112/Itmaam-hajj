import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdEventSeat } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NotificationCard from "../../../../components/notificationCard/NotificationCard";
import AppTable from "./../../../../components/appTable/AppTable";
import config from "../../../../config.json";
import http from "../../../../services/httpService";
import Loader from "../../../../components/Loader/loader";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Dashboard() {
  const [dateValue, setDateValue] = useState<Value>(new Date());
  const [admin, setAdmin] = useState([]);
  const [notify, setNotify] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const { data } = await http.get(`${config.apiUrl}/notifications`);
        setNotify(data);
        // console.log(data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get(`${config.apiUrl}/users`);
      setAdmin(data);
    };
    getData();
  }, []);

  // const tableData = [
  //   {
  //     fullname: "Adeniran Yaqub",
  //     email: "adeniranajibade1212@gmail.com",
  //     role: "Treaseurer",
  //   },
  //   {
  //     fullname: "Adeniran Yaqub",
  //     email: "adeniranajibade1212@gmail.com",
  //     role: "Treaseurer",
  //   },
  //   {
  //     fullname: "Adeniran Yaqub",
  //     email: "adeniranajibade1212@gmail.com",
  //     role: "Treaseurer",
  //   },
  //   {
  //     fullname: "Adeniran Yaqub",
  //     email: "adeniranajibade1212@gmail.com",
  //     role: "Treaseurer",
  //   },
  // ];
  const tableHeader = [
    { label: "Fullname", key: "fullName" },
    { label: "username", key: "userName" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    ,
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

      <section className="lg:grid grid-cols-3 gap-10 py-8">
        <div className=" col-span-2 bg-white p-5 rounded-md shadow-md">
      {isFetching && <Loader />}
       
          <p className="#161E03 text-xl font-semibold mb-5 ">Notification</p>
          {notify.slice(0, 3).map((item: any, i: number) => (
            <NotificationCard
              title={item.title}
              notification={item.body}
              latest={i === 0}
              key={i}
            />
          ))}
        </div>
        <div className="bg-white p-2 shadow-md rounded-md">
          <p className="#161E03 text-xl font-semibold mb-5 ">Calender</p>
          <div className="mt-6">
            <Calendar onChange={setDateValue} value={dateValue} />
          </div>
        </div>
      </section>

      <section>
        <p className="text-[#161E03] text-2xl font-bold  ">Admin List</p>
        <AppTable
          tableHeader={tableHeader}
          tableData={admin}
          showSerialNumber
        />
      </section>
    </div>
  );
}

export default Dashboard;
