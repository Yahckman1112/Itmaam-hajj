import NotificationCard from "../../../../components/notificationCard/NotificationCard";
import { Label, Input, TextArea } from "../packages/package.styles";
import { BtnSubmit } from "./../packages/package.styles";
import { useFormik } from "formik";
import * as Yup from "yup";

function Notification() {
  const notifications = [
    {
      title: " Registration for winter semeester starts",
      body: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sint
          aliquid dolorem in? Id, a. Aliquam, iure magni. Aliquam quasi nemo
          consectetur laudantium, inventore iusto voluptatibus officia, vitae
          voluptatum necessitatibus quo. Facere culpa alias vitae sint similique
          hic ipsa?`,
      latest: true,
    },
    {
      title: " Registration for winter semeester starts",
      body: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sint
          aliquid dolorem in? Id, a. Aliquam, iure magni. Aliquam quasi nemo
          consectetur laudantium, inventore iusto voluptatibus officia, vitae
          voluptatum necessitatibus quo. Facere culpa alias vitae sint similique
          hic ipsa?`,
      latest: false,
    },
    {
      title: " Registration for winter semeester starts",
      body: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sint
          aliquid dolorem in? Id, a. Aliquam, iure magni. Aliquam quasi nemo
          consectetur laudantium, inventore iusto voluptatibus officia, vitae
          voluptatum necessitatibus quo. Facere culpa alias vitae sint similique
          hic ipsa?`,
      latest: false,
    },
  ];

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

      <div>
        {notifications.map((item: any, i: number) => (
          <NotificationCard
            title={item.title}
            notification={item.body}
            latest={item.latest}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Notification;
