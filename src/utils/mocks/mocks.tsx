import { FaHome, FaRegNewspaper, FaUsers  } from "react-icons/fa";
import { LuPackagePlus } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io"

export   const AuthNav = [
    {
      icon: <FaHome size={20} />,
      name: "Dashboard",
      path: "/user",
      location: ["/user"],
    },
    {
      icon: <LuPackagePlus size={20} />,
      name: "Packages",
      path: "/user/packages",
      location: ["/user/packages"],
    },
    {
      icon: <FaRegNewspaper size={20} />,
      name: "News",
      path: "/user/news",
      location: ["/user/news"],
    },
    {
      icon: <FaUsers size={20} />,
      name: "Applicants",
      path: "/user/applicants",
      location: ["/user/applicants"],
    },
    {
      icon: <IoMdNotificationsOutline size={20} />,
      name: "Notifications",
      path: "/user/notifications",
      location: ["/user/notifications"],
    },
  ];