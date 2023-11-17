import { useEffect, useState } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

interface IheaderData {
  name: string;
  path: string;
}
function useAppHeader() {
  const [inView, setInView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useCheckMobileScreen();

  const headerData: IheaderData[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Offer",
      path: "#",
    },
    {
      name: "News",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },

  isMobile? {
      name: "Register",
      path: "#",
    }: {
      name: " ",
      path: "#",
    },
  ];

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

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return {
    headerData,
    inView,
    isOpen,
    handleDrawer,
  };
}

export default useAppHeader;
