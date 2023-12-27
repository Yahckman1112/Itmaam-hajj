import { useEffect, useState } from "react";
import NotificationCard from "../../../../components/notificationCard/NotificationCard";
import { Label, Input, TextArea } from "../packages/package.styles";
import { BtnSubmit } from "./../packages/package.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import config from "../../../../config.json";
import http from "../../../../services/httpService";
// import { Dayjs } from "dayjs";
import { default as dayjs } from "dayjs";
import Loader from "../../../../components/Loader/loader";
import Swal from "sweetalert2";

function Notification() {
  const [notify, setNotify] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const { data } = await http.get(`${config.apiUrl}/notifications`);
        setNotify(data);
        // console.log(data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);



  const validateNotification = () => {
    return Yup.object({
      title: Yup.string().required(" title is required"),
      body: Yup.string().required("  Notification is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",

    },

    validationSchema: validateNotification(),

    onSubmit: async(values) => {
      console.log(values);

      try {
        await http.post(`${config.apiUrl}/notifications`, values)
        Swal.fire({
          icon: "success",
          title: "Success",
          text: 'Notification added successfully',
          showCancelButton: true,
          showConfirmButton: false,
        });
      } catch (error:any) {

        console.log(error.response);
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

  const handleDelete= async(id:any)=>{
    console.log('delete clicked', id);

    await http.delete(`${config.apiUrl}/notifications/${id}`)
    const updatesNotify= notify.filter((item:any)=>item.id !== id)
    setNotify(updatesNotify)
    alert('deletered')
  }

  return (
    <div>
      <p className="text-[#1A8F4A] text-3xl font-bold py-6">Notifications</p>

      <form className="my-12 px-6 md:px-40" onSubmit={formik.handleSubmit}>
        <div className="mb-5">
          <Label>title</Label>
          <Input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <p className={"text-xs text-red-500"}>{formik.errors.title}</p>
          )}
        </div>
        <div className="mb-5">
          <Label>title</Label>
          {/* < Text/> */}
          <TextArea
            name="body"
            value={formik.values.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextArea>
          {formik.touched.body && formik.errors.body && (
            <p className={"text-xs text-red-500"}>
              {formik.errors.body}
            </p>
          )}
        </div>

        <BtnSubmit type="submit">Add Notification</BtnSubmit>
      </form>
      {isFetching && <Loader />}
      <div>
        {notify.map((item: any, i: number) => (
          <>
            <NotificationCard
              title={item.title}
              notification={item.body}
              latest={i === 0}
              key={i}
              createdAt={dayjs(item.createdAt).format("DD.MM.YYYY; HH:MM")}
              onClick={()=>handleDelete(item._id)}
              showDeleteBtn
            />

          </>
        ))}
      </div>
    </div>
  );
}

export default Notification;

