import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const footerData = [
    {
      title: "Useful Links",
      links: [
        { name: "Home", path: "#" },
        { name: "About", path: "#" },
        { name: "Offer", path: "#" },
        { name: "News", path: "#" },
        { name: "Contact", path: "#" },
      ],
    },
    {
      title: "Contacts",
      links: [
        {
          name: "No 16 Odo Oba Moniya Ibadan",
          path: "#",
          icon: <ImLocation size={20} />,
        },
        {
          name: "+2348146283237",
          path: "#",
          icon: <MdPhoneInTalk size={20} />,
        },
        {
          name: "alItmaam21243@yahoo.com",
          path: "#",
          icon: <HiOutlineMail size={20} />,
        },
      ],
    },
    {
      title: "Connect with Us",
      links: [
        { name: "Facebook", path: "#", icon: <FaFacebookF size={20} /> },
        { name: "Twitter", path: "#", icon: <FaTwitter size={20} /> },
        { name: "LinkdIn", path: "#", icon: <FaInstagram size={20} /> },
        { name: "LinkdIn", path: "#", icon: <FaLinkedinIn size={20} /> },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-[#31124b] min-h-[85vh] md:grid md:grid-cols-2  lg:grid-cols-4 text-white font-sans px-5 md:px-16 gap-10 py-24">
        <div>
          <p className="font-extrabold  text-2xl md:text-4xl uppercase mb-7">
            Al-Itmaam
          </p>
          <p className=" leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vitae sint quam. Praesentium, dolore consectetur officiis
            accusantium voluptate assumenda. Labore!
          </p>
        </div>

        {footerData.map((item: any, i: number) => (
          <div key={i}>
            <p className="  font-bold  mb-7 md:text-lg text-[15px] mt-7 md:mt-0 pt-3 ">
              {item.title}
            </p>

            {item.links.map((data: any, i: any) => (
              <div className="leading-8 mb-3  " key={i}>
                {" "}
                <Link to={data.path} className="flex">
                  {" "}
                  {data.icon && <span className="mr-5"> {data.icon} </span>}
                  {data.name}
                </Link>{" "}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[#1f0733] text-center text-white w-full py-4">
        © 2023 Al-Itmaam. All right reserved.
      </div>
    </div>
  );
}

export default Footer;
