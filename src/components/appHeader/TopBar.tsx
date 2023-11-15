import { Link } from "react-router-dom"
import {FaTwitter, FaPhoneAlt, FaFacebookF, FaInstagram , FaLinkedinIn   } from 'react-icons/fa'

function TopBar() {
  return (
    <div className=' hidden md:flex w-full bg-[#350a4e]  justify-between text-[#FFFFFF] text-sm font-normal px-14 py-2 '>
        <div className=" flex">
            <Link to='#' className="pt-1 "> < FaPhoneAlt /> </Link>
            <Link to='#' className="pt-1 ml-6"> < FaTwitter/> </Link>
            <Link to='#' className="pt-1 ml-6"> < FaFacebookF /> </Link>
            <Link to='#' className="pt-1 ml-6"> < FaInstagram  /> </Link>
            <Link to='#' className="pt-1 ml-6"> < FaLinkedinIn   /> </Link>          
        </div>
        <div className="text-[10px] font-sans">
            <Link to={'#'}>LOGIN</Link> <span className="px-1">|</span>    
            <Link to={'#'}>REGISTER</Link>  
        </div>
    </div>
  )
}

export default TopBar