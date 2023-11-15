import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
function AppHeader() {
  const headerData = [
    {
      name: "home",
      path: "#",
    },
    {
      name: "about",
      path: "#",
    },
    {
      name: "offer",
      path: "#",
    },
    {
      name: "news",
      path: "#",
    },
    {
      name: "contact",
      path: "#",
    },
  ];
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;

      if (scrollY >= scrollThreshold) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
        <div className={`${inView? 'hidden':''}`}>
        < TopBar/>
        </div>
    <div
      className={` bg-[#6710f279] py-12 px-14 flex justify-between fixed w-full  text-[#f4f4f8] font-sans uppercase ${
        inView? 'py-4 -mb-32':''
        
      }`}
    >
      <div className="font-extrabold   text-4xl">Al-ITmaam</div>
      <div>
        {headerData.map((item:any,i:number)=>(
        <Link
        key={i}
          to={item.path}
          className="mr-7 text-sm font-semibold text-[#FFFFFF] py-2 "
        >
          {item.name}
        </Link>

        ))}
      </div>
    </div>
    </div>
  );
}

export default AppHeader;
