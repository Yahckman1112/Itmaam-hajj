import img1 from "./../../../../assets/3.jpg";
import img2 from "./../../../../assets/4.jpg";
// @ts-ignore
import ProgressBar from "react-progressbar";
import MakkahHotel from "./../../../../assets/hotel-1.png";
import MadinahHotel from "./../../../../assets/hotel.png";
import { BsUpload } from "react-icons/bs";
import CustomModal from "../../../../components/modal/CustomModal";
import { useEffect, useState } from "react";
import { Input, Label, Select } from "./package.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from '../../../../services/httpService'
import config from '../../../../config.json'


function Packages() {
  const [isOpen, setIsOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const imgs = [img1, img2];

  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get(`${config.apiUrl}/packages`);

      console.log(data);
      setPackages(data);
    };
    getData();
  }, []);

  const getRandomImage = ()=>{
    const randomIndex = Math.floor(Math.random()*imgs.length)
    return imgs[randomIndex]
  }


  const validatePackage = () => {
    return Yup.object({
      package: Yup.string().required("Choose a Package"),
      makkahHotel: Yup.string().required(" Makkah hotel is required"),
      madinahHotel: Yup.string().required(" Madinah hotel is required"),
      price: Yup.number().required(" Madinah hotel is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      package: "",
      makkahHotel: "",
      madinahHotel: "",
      price: "",
    },
    validationSchema: validatePackage(),

    onSubmit: (values) => {
      console.log(values);
      setIsOpen(false)

      // @ts-ignore
      formik.handleReset();
      
    },
  });

  // console.log(formik.values);


  return (
    <div className="w-[100%]">
      <div className="flex justify-between">
        <p className="md:text-3xl text-2xl font-bold text-[#1A8F4A]">Resources</p>

        <div
          className="flex px-3 md:px-7 py-2 md:py-4 cursor-pointer rounded-md text-[#138951] text-base font-medium"
          style={{ border: "1px solid #DADADA" }}
          onClick={() => setIsOpen(true)}
        >
          <span className="mr-5">
            {" "}
            <BsUpload size={20} />
          </span>{" "}
          <span>Add Package</span>
        </div>
      </div>

      <div className="md:grid mt-7 md:grid-cols-1 lg:grid-cols-3 gap-7">
        {packages.map((item: any, i: any) => (
          <div className="rounded-lg border border-solid my-7" key={i}>
            <div>
              <img src={getRandomImage()} alt="" className="  object-cover" />
            </div>
            <div className="p-7">
              <p className="text-2xl font-semibold">{item.name}</p>
              <div
                className="grid grid-cols-2 my-7 "
                style={{ gridTemplateColumns: "20% 80%" }}
              >
                <div>
                  <img
                    src={MakkahHotel}
                    width={"50px"}
                    alt=""
                    className="flex m-aut0"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-semibold mb-1 ">
                    MAKKAH : {item.makkahHotemName}
                  </p>
                  <p className="text-[15px] font-bold text-[#007bff] ">
                    {item.time} MIN To Masjidil Haram
                  </p>
                </div>
              </div>
              <div
                className="grid grid-cols-2 my-7"
                style={{ gridTemplateColumns: "20% 80%" }}
              >
                <div>
                  <img
                    src={MadinahHotel}
                    width={"50px"}
                    alt=""
                    className="flex m-aut0"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-semibold mb-1 ">
                    MAKKAH : {item.madinahHotemName}
                  </p>
                  <p className="text-[15px] font-bold text-[#007bff] ">
                    {item.time} MIN To Nabawi Mosque
                  </p>
                </div>
              </div>

              <p className="text-[#007bff] text-2xl font-semibold my-12 mb-7">
                {" "}
                <span className="text-[#929191] line-through text-lg font-normal">
                  {item.nullPrice} USD/P
                </span>{" "}
                {item.price} USD/P{" "}
              </p>
              <div className="flex justify-between">
                <button className="text-base text-white font-bold uppercase px-4 py-2  bg-[#155fd6bc]  rounded-full">
                  Update
                </button>
                <button className="text-base text-white font-bold uppercase px-4 py-2 bg-red-600  rounded-full">
                  Delete
                </button>
              </div>
            </div>
            <div className="my-9 border border-solid border-t-1 border-b-0 border-r-0 border-l-0 pt-7 p-3">
              <div className="w-full border border-solid rounded-lg">
                <ProgressBar
                  completed={(item.registeredClient / item.totalSpace) * 100}
                />
              </div>
              <p className="mt-3 text-xs font-semibold">
                Booked : {item.registeredClient}/{item.totalSpace}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <CustomModal header="Add Package" setIsOpen={setIsOpen}>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <Label> Package</Label>
              <Select
                id="cars"
                name="package"
                value={formik.values.package}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Slect a package" />
                <option value="Umrah Package">Umrah Package</option>
                <option value="Hajj Package">Hajj Package</option>
                <option value="Ramadan Umrah">Ramadan Umrah</option>
              </Select>

              {formik.touched.package && formik.errors.package && (
                <p className={"text-xs text-red-500"}>
                  {formik.errors.package}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label> Makkah Hotel</Label>
              <Input
                placeholder="Makkah hotel name"
                type="text"
                name="makkahHotel"
                value={formik.values.makkahHotel}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.makkahHotel && formik.errors.makkahHotel && (
                <p className={"text-xs text-red-500"}>
                  {formik.errors.makkahHotel}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label> Madinah Hotel</Label>
              <Input
                placeholder="Madinah hotel name"
                type="text"
                name="madinahHotel"
                value={formik.values.madinahHotel}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.madinahHotel && formik.errors.madinahHotel && (
                <p className={"text-xs text-red-500"}>
                  {formik.errors.madinahHotel}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label> Price</Label>
              <Input
                placeholder="Price"
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors.price && (
                <p className={"text-xs text-red-500"}>{formik.errors.price}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A8F4A] py-3 mt-2 shadow-lg rounded-sm text-[#FCFCFC]"
            >
              {" "}
              submit{" "}
            </button>
          </form>
        </CustomModal>
      )}

      {/* {modalType === "package" && <PackageModal isOpen={isOpen} />} */}
    </div>
  );
}

export default Packages;
