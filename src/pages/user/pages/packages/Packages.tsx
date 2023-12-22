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
import http from "../../../../services/httpService";
import config from "../../../../config.json";
import Swal from "sweetalert2";

interface SelectedPackageValue {
  packageName: any;
  makkahHotelName: any;
  madinahHotelName: any;
  price: any;
  time: any;
  totalSpace: any;
  overview: any;
  _id: any;
}

function Packages() {
  const [isOpen, setIsOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] =
    useState<SelectedPackageValue | null>(null);
  const imgs = [img1, img2];
  // const { id } = useParams();

  const handleDelete = async (id: any) => {
    console.log("delete btn clicked", id);

    try {
      await http.delete(`${config.apiUrl}/packages/${id}`);
      const updatedPackages = packages.filter((item: any) => item.id !== id);
      setPackages(updatedPackages);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Package Deleted",
        showCancelButton: true,
        showConfirmButton: false,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops....",
        text: error.response?.data || "Failed to delete package",
      });
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get(`${config.apiUrl}/packages`);

      console.log(data);
      setPackages(data);
    };
    getData();
  }, []);

  const handleUpdate = (id: any) => {
    console.log("update btn clicked", id);

    const selected: any = packages.find((item: any) => item._id === id);
    console.log(selected);

    setSelectedPackage(selected);
    setIsOpen(true);
  };
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imgs.length);
    return imgs[randomIndex];
  };

  const validatePackage = () => {
    return Yup.object({
      packageName: Yup.string().required("Choose a Package"),
      makkahHotelName: Yup.string().required(" Makkah hotel is required"),
      madinahHotelName: Yup.string().required(" Madinah hotel is required"),
      price: Yup.number().required(" Madinah hotel is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      packageName: selectedPackage?.packageName || "",
      makkahHotelName: selectedPackage?.makkahHotelName || "",
      madinahHotelName: selectedPackage?.madinahHotelName || "",
      price: selectedPackage?.price || "",
      time: 20,
      totalSpace: 150,
      overview: "comming soon",
    },
    validationSchema: validatePackage(),

    onSubmit: async (values) => {
      console.log("sdfghjkl;", values);

      try {
        if (selectedPackage) {
          await http.put(`${config.apiUrl}/packages/${selectedPackage._id}`, {
            packageName: values.packageName,
            makkahHotelName: values.makkahHotelName,
            madinahHotelName: values.madinahHotelName,

            totalSpace: 110,
            price: values.price,

            time: 20,
            overview: "updated overview",
          });
        } else {
          await http.post(`${config.apiUrl}/packages`, values);
        }

        Swal.fire({
          icon: "success",
          title: "Success",
          text: selectedPackage
            ? "Package Updated Successfully"
            : "Application submitted successdully",
          showCancelButton: true,
          showConfirmButton: false,
        });
        setIsOpen(false);
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data || "Something Failed",
          showCancelButton: true,
          showConfirmButton: false,
        });
      }
    },
  });

  return (
    <div className="w-[100%]">
      <div className="flex justify-between">
        <p className="md:text-3xl text-2xl font-bold text-[#1A8F4A]">
          Resources
        </p>

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
              <p className="text-2xl font-semibold">{item.packageName}</p>
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
                <button
                  onClick={() => handleUpdate(item._id)}
                  className="text-base text-white font-bold uppercase px-4 py-2  bg-[#155fd6bc]  rounded-full"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                  className="text-base text-white font-bold uppercase px-4 py-2 bg-red-600  rounded-full"
                >
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
                name="packageName"
                value={
                  selectedPackage?.packageName || formik.values.packageName
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Slect a package" />
                <option value="Umrah Package">Umrah Package</option>
                <option value="Hajj Package">Hajj Package</option>
                <option value="Ramadan Umrah">Ramadan Umrah</option>
              </Select>

              {formik.touched.packageName && formik.errors.packageName && (
                <p className={"text-xs text-red-500"}>
                  {/* @ts-ignore */}

                  {formik.errors.packageName}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label> Makkah Hotel</Label>
              <Input
                placeholder="Makkah hotel name"
                type="text"
                name="makkahHotelName"
                value={formik.values.makkahHotelName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.makkahHotelName &&
                formik.errors.makkahHotelName && (
                  <p className={"text-xs text-red-500"}>
                    {/* @ts-ignore */}

                    {formik.errors.makkahHotelName}
                  </p>
                )}
            </div>
            <div className="mb-3">
              <Label> Madinah Hotel</Label>
              <Input
                placeholder="Madinah hotel name"
                type="text"
                name="madinahHotelName"
                value={formik.values.madinahHotelName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.madinahHotelName &&
                formik.errors.madinahHotelName && (
                  <p className={"text-xs text-red-500"}>
                    {/* @ts-ignore */}

                    {formik.errors.madinahHotelName}
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
                <p className={"text-xs text-red-500"}>
                  {/* @ts-ignore */}
                  {formik.errors.price}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A8F4A] py-3 mt-2 shadow-lg rounded-sm text-[#FCFCFC]"
            >
              {selectedPackage ? "Update" : "Save"}
            </button>
          </form>
        </CustomModal>
      )}

      {/* {modalType === "package" && <PackageModal isOpen={isOpen} />} */}
    </div>
  );
}

export default Packages;
