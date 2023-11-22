import { GiSmartphone } from "react-icons/gi";
import { FiMail, FiMap } from "react-icons/fi";
import CustomBanner from "../../components/customBanner/CustomBanner";
import banner from "../../assets/contsctBanner.jpg";
import { Input } from "../register/register.style";
import * as Yup from "yup";
import { useFormik } from "formik";

function Contact() {
  const location = [
    {
      logo: <FiMap size={30} />,
      main: "Address",
      sub: "No 34 Arulogun junction idimu street iworoad nigeria",
    },
    {
      logo: <GiSmartphone size={30} />,
      main: "phone",
      sub: "08146283237",
    },
    {
      logo: <FiMail size={30} />,
      main: "Email",
      sub: "infinitytech1212@gmail.com",
    },
  ];

  const messageSubmit = () => {
    return Yup.object({
      name: Yup.string().required("Please let add ur name"),
      email: Yup.string().required("Email is rquired").email(),
      subject: Yup.string().required("subjec is required"),
      message: Yup.string().required("message is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: messageSubmit(),
    onSubmit: (val) => {
        console.log('sumit btn clicked');
      console.log(val);
  

    },
  });
  return (
    <div>
      <div>
        <CustomBanner pageName="Contact Us" bgImage={banner} />
      </div>

      <div className=" p-7 md:p-20 md:px-32 min-h-[80vh] md:grid grid-cols-3 gap-10 ">
        <div>
          {location.map((item: any, i: number) => (
            <div
              key={i}
              className="flex mb-6 p-5 border border-solid border-[#dee2e6]"
            >
              <div className="mr-5 text-[#6610f2]">{item.logo}</div>
              <div className="text-base font-semibold">
                <p className=" text-[#999999]">{item.main}</p>
                <p className="text-[#000000] leading-6">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" col-span-2">
        <p className="text-3xl font-bold text-center leading-9">
              Get In Touch
            </p>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
              <Input
              
              placeholder="Your Full name" type="text" name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
                  <p className='text-xs text-red-500'>{formik.errors.name}</p>
                )}

                
            <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
              <Input placeholder="Your Email" type="email" name="email" 
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
                  <p className='text-xs text-red-500'>{formik.errors.email}</p>
                )}

            <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
              <Input placeholder="Subject" type="text" name="subject" 
                 value={formik.values.subject}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.subject && formik.errors.subject && (
                  <p className='text-xs text-red-500'>{formik.errors.subject}</p>
                )}

            <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
              <textarea
                className="w-full border-none outline-none "
                placeholder="Your Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.message && formik.errors.message && (
                  <p className='text-xs text-red-500'>{formik.errors.message}</p>
                )}

            <button type="submit" className="flex m-auto my-8 bg-[#E5EFFF] hover:bg-[#ffc107] px-10 py-3 rounded-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2508744244287!2d3.8917257142699344!3d7.547598212505562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f1cdb2ed5e7b%3A0x133fbb82df2b6282!2sOdo%20Oba%20Rd%2C%20200136%2C%20Mawniya%2C%20Oyo!5e0!3m2!1sen!2sng!4v1680284579983!5m2!1sen!2sng"
          width="100%"
          height="420"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="footer_map__N73KB"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
