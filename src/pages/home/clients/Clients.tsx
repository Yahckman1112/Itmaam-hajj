import styles from "./client.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ClientsCard from "./ClientsCard";

function Clients() {
  const customerInfo = [
    {
      name: "Wale Joe",
      date: "27th May, 2023",
      remark: "Best Holiday Ever",
      comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            fugit voluptatum voluptatibus nihil praesentium sunt.`,
    },
    {
      name: "Wale Joe",
      date: "27th May, 2023",
      remark: "Best Holiday Ever",
      comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            fugit voluptatum voluptatibus nihil praesentium sunt.`,
    },
    {
      name: "Wale Joe",
      date: "27th May, 2023",
      remark: "Best Holiday Ever",
      comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            fugit voluptatum voluptatibus nihil praesentium sunt.`,
    },
    {
      name: "Wale Joe",
      date: "27th May, 2023",
      remark: "Best Holiday Ever",
      comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            fugit voluptatum voluptatibus nihil praesentium sunt.`,
    },
    {
      name: "Wale Joe",
      date: "27th May, 2023",
      remark: "Best Holiday Ever",
      comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            fugit voluptatum voluptatibus nihil praesentium sunt.`,
    },
  ];
  return (
    <div className="min-h-screen  px-5 md:px-16 lg:px-32 py-12  ">
      <p className="text-2xl mb-5 text-center font-bold text-[#2d2c2c] leading-10">
        {" "}
        What our Client said About Us
      </p>

      <Swiper
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1.05,
            spaceBetween: 10,
          },
          640: {
            width: 640,
            slidesPerView: 1.05,
            spaceBetween: 10,
          },

          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={3000}
      >


        {customerInfo.map((info: any, i: number) => (
          <SwiperSlide>
            <ClientsCard key={i} name={info.name} date={info.date} remark={info.remark} comment={info.comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Clients;
