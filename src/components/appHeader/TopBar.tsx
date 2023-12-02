import { Link } from "react-router-dom"
import {FaTwitter, FaPhoneAlt, FaFacebookF, FaInstagram , FaLinkedinIn   } from 'react-icons/fa'
import { REGISTER } from "../../routes/routes"

function TopBar() {
  return (
    <div className=' hidden md:flex w-full bg-[#31124b]  justify-between text-[#FFFFFF] text-sm font-normal px-14 py-2 '>
        <div className=" flex">
            <Link to='#' className="pt-1  hover:text-[#fd7e14]"> < FaPhoneAlt size={11} /> </Link>
            <Link to='#' className="pt-1 ml-6 hover:text-[#fd7e14]"> < FaTwitter size={11}/> </Link>
            <Link to='#' className="pt-1 ml-6 hover:text-[#fd7e14]"> < FaFacebookF size={11} /> </Link>
            <Link to='#' className="pt-1 ml-6 hover:text-[#fd7e14]"> < FaInstagram   size={11}/> </Link>
            <Link to='#' className="pt-1 ml-6 hover:text-[#fd7e14]"> < FaLinkedinIn  size={11}  /> </Link>          
        </div>
        <div className="text-[10px] font-sans">
            <Link to={'/admin'}>LOGIN</Link> <span className="px-1">|</span>    
            <Link to={REGISTER}>REGISTER</Link>  
        </div>
    </div>
  )
}

export default TopBar