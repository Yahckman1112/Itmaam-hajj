
import { FaSearch } from "react-icons/fa";
import AppTable from "../../../../components/appTable/AppTable";
import { useEffect, useState } from "react";
import http from '../../../../services/httpService'
import config from '../../../../config.json'

function Applicants() {
  const [applicants, setApplicants]= useState([])

  useEffect(()=>{
    const getData =async()=>{
      const {data} = await http.get(`${config.apiUrl}/applicants`)

      console.log(data);
      setApplicants(data)
      
    } 
    getData()
  },[])
  const tableHeader = [
    { label: "Applicants ID", key: "applicantsId" },
    { label: "Firstname", key: "firstName" },
    { label: "Lastname", key: "lastName" },
    { label: "Gender", key: "gender" },
    { label: "Email", key: "email" },
    { label: "Package", key: "package" },

    { label: "Phone", key: "phone" },
  ];

  const anyNumber =Math.floor( Math.random()*9999)
  console.log(anyNumber)

  // const tableData = [
  //   {
  //       applicantsId:`itmaam23/${anyNumber}`,
  //       firstname:'Adewale',
  //       lastname:'tobiloba',
  //       email:'adex@gmail.com',
  //       gender:'Male',
  //       package:'Hajj',
  //       phone:'09107812544'

  //   },
  //   {
  //       applicantsId:`itmaam23/${anyNumber}`,
  //       firstname:'Adewale',
  //       lastname:'tobiloba',
  //       email:'adex@gmail.com',
  //       gender:'Male',
  //       package:'Hajj',
  //       phone:'09107812544'

  //   },
  //   {
  //       applicantsId:`itmaam23/${anyNumber}`,
  //       firstname:'Adewale',
  //       lastname:'tobiloba',
  //       email:'adex@gmail.com',
  //       gender:'Male',
  //       package:'Hajj',
  //       phone:'09107812544'

  //   },
  //   {
  //       applicantsId:`itmaam23/${anyNumber}`,
  //       firstname:'Adewale',
  //       lastname:'tobiloba',
  //       email:'adex@gmail.com',
  //       gender:'Male',
  //       package:'Hajj',
  //       phone:'09107812544'

  //   },
  //   {
  //       applicantsId:`itmaam23/${anyNumber}`,
  //       firstname:'Adewale',
  //       lastname:'tobiloba',
  //       email:'adex@gmail.com',
  //       gender:'Male',
  //       package:'Hajj',
  //       phone:'09107812544'

  //   },
  // ]
  return (
    <div>
      <p className="font-bold text-2xl text-[#1A8F4A] ">
        {" "}
        All Applicants <span className="font-light text-[#DADADA] mx-2">
          |
        </span>{" "}
        <span className="text-base font-semibold text-[#33373C]">
          284 applicants
        </span>
      </p>

      <div>
        <input
          type="text"
          placeholder="Search for applicant"
          className=" border-[#DADADA] border-solid border-[1px]  outline-none  px-2 py-3 text-[#2E3033]  placeholder-[#BFBFBF]  text-base font-normal  rounded-sm mt-4 w-[70%] md:w-[50%] bg-[#FFF] mr-2"
        />
        <button className=" bg-[#1A8F4A] px-6 md:px-8 py-4 md:py-3 rounded-sm font-semibold text-sm text-[#FCFCFC]">
          {" "}
          <FaSearch className="md:hidden" />{" "}
          <span className="hidden md:block">Search</span>{" "}
        </button>
      </div>

      <div className="py-9">
        <AppTable tableData={applicants} tableHeader={tableHeader} showSerialNumber/>
      </div>
    </div>
  );
}

export default Applicants;
