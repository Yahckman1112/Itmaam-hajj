import { FaSearch } from "react-icons/fa";
import AppTable from "../../../../components/appTable/AppTable";
import { useEffect, useState } from "react";
import http from "../../../../services/httpService";
import config from "../../../../config.json";
import Loader from "../../../../components/Loader/loader";

function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [query, setQuery] = useState<string | number>("");
  const [isFetching, setIsFetching] = useState(false);

  const searchKeys = ["firstName", "lastName", "email", "gender", "phone"];

  const handleChange = (e: any) => {
    const inputText = e.target.value.toLowerCase();
    setQuery(inputText);
    console.log(query);
  };

  const handleSearch = (data: any) => {
    // return data.filter((item:any)=>item.firstName.toLowerCase().includes(query))
    return data.filter((item: any) =>
      searchKeys.some((key) => {
        const value = item[key];
        // @ts-ignore
        return typeof value === "string" && value.toLowerCase().includes(query);
      })
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        const { data } = await http.get(`${config.apiUrl}/applicants`);
        setApplicants(data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const tableHeader = [
    { label: "Applicants ID", key: "applicantsId" },
    { label: "Firstname", key: "firstName" },
    { label: "Lastname", key: "lastName" },
    { label: "Gender", key: "gender" },
    { label: "Email", key: "email" },
    { label: "Package", key: "package" },

    { label: "Phone", key: "phone" },
  ];

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
          onChange={handleChange}
        />
        <button className=" bg-[#1A8F4A] px-6 md:px-8 py-4 md:py-3 rounded-sm font-semibold text-sm text-[#FCFCFC]">
          {" "}
          <FaSearch className="md:hidden" />{" "}
          <span className="hidden md:block">Search</span>{" "}
        </button>
      </div>
      {isFetching && <Loader />}
      <div className="py-9">
        <AppTable
          tableData={handleSearch(applicants)}
          tableHeader={tableHeader}
          showSerialNumber
        />
      </div>
    </div>
  );
}

export default Applicants;
