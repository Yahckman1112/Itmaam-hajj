import  {useEffect, useState} from 'react'

interface IheaderData{
    name:string
    path: string
}
function useAppHeader() {
  const [inView, setInView] = useState(false);
  const [isOpen, setIsOpen] = useState(false)


    const headerData: IheaderData[] = [
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

      
  const handleDrawer =()=>{
    setIsOpen(!isOpen)
  }


      return{
        headerData, inView, isOpen, handleDrawer
      }
}

export default useAppHeader