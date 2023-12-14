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

function Notification() {
  const [notify, setNotify] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const { data } = await http.get(`${config.apiUrl}/notifications`);
        setNotify(data);
        console.log(data);
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
      notification: Yup.string().required("  Notification is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      notification: "",
      date: Date.now(),
    },

    validationSchema: validateNotification(),

    onSubmit: (values) => {
      console.log(values);

      // @ts-ignore
      //   formik.handleReset();
    },
  });

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
            name="notification"
            value={formik.values.notification}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextArea>
          {formik.touched.notification && formik.errors.notification && (
            <p className={"text-xs text-red-500"}>
              {formik.errors.notification}
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
            />

            {console.log(item.createdAt)}
          </>
        ))}
      </div>
    </div>
  );
}

export default Notification;
