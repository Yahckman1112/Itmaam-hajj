
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import {TfiMenu } from 'react-icons/tfi'
// import {IoLogoAppleAr } from 'react-icons/io5'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import useAppHeader from "./useAppHeader";

function AppHeader() {
const {headerData, inView, isOpen, handleDrawer} = useAppHeader()
  
  return (
    <div>
      <div className={`${inView ? "hidden" : ""}`}>
        <TopBar />
      </div>

      <div
        className={` 
        bg-[#31124b8f] 
         py-4 lg:py-12  px-5 md:px-14 flex justify-between fixed w-full  text-[#f4f4f8] font-sans uppercase z-40 ${
          inView ? "lg:py-4 -mb-32 " : ""
        }`}
      >
        <div className="font-extrabold  text-2xl md:text-4xl">Al-ITmaam</div>
        <div className="hidden lg:block">
          {headerData.map((item: any, i: number) => (
            <Link
              key={i}
              to={item.path}
              className="mr-7 text-sm font-semibold text-[#FFFFFF] py-2 "
            >
              {item.name}
            </Link>
          ))}

        </div>
        
          <TfiMenu className='lg:hidden ' size={25} onClick={handleDrawer} />
       
      </div>
      <Drawer
                open={isOpen}
                onClose={handleDrawer}
                direction='right'
                className='bg-black'
            >
                <div className="bg-black  h-full bg-gradient-to-r from-[#ffc107] to-[#007bffe0] text-white text-center pt-36   text-2xl  font-pacifico">
                  {/* <div className="flex m-auto"> < IoLogoAppleAr/> </div> */}
                  {headerData.map((item:any, i:number)=>(

                  <div  key={i} className="mb-4 "> <Link to={item.path} onClick={handleDrawer} >{item.name}</Link> </div>
                  ))}
             
                </div>
            </Drawer>
    </div>
  );
}

export default AppHeader;
