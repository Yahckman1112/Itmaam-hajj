import { GiSmartphone } from "react-icons/gi";
import { FiMail, FiMap } from "react-icons/fi";
import CustomBanner from "../../components/customBanner/CustomBanner";
import banner from '../../assets/contsctBanner.jpg'
import { Input } from "../register/register.style";

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
          <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
            <Input placeholder="Your Full name" type="email" name="email" />
          </div>
          <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
            <Input placeholder="Your Email" type="email" name="email" />
          </div>
          <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
            <Input placeholder="Subject" type="email" name="email" />
          </div>
          <div className="border border-solid border-b-2 border-x-0 border-y-0 mt-10">
            <textarea
              className="w-full border-none outline-none "
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="flex m-auto my-8 bg-[#E5EFFF] hover:bg-[#ffc107] px-10 py-3 rounded-full">
            Send Message
          </button>
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
