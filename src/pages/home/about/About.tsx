import React from "react";
import img1 from "../../../assets/about1.jpg";
import checked from "../../../assets/svg/checked.svg";
import { Link } from "react-router-dom";
import CustomButton from "../../../components/customButton/CustomButton";

function About() {
  return (
    <div className="min-h-screen max-w-[100%] px-5 md:px-32 py-12">
      <section className="md:grid grid-cols-2 gap-10">
        <div>
          <img src={img1} alt="" className="object-cover rounded-lg" />
        </div>
        <div className="mt-10 md:mt-0">
          <p className="text-base font-semibold text-[#ffc107] leading-8">
            ABOUT
          </p>
          <p className="text-2xl font-bold text-[#2d2c2c] leading-10">
            The Smart Way to Go Umrah and Hajj
          </p>
          <p className="text-[#929191] text-base leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            ipsum optio nesciunt vitae quibusdam dolore adipisci ducimus,
            delectus architecto iste? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Minus ipsum optio nesciunt vitae quibusdam dolore
    
          </p>
          <div className="text-base leading-7 md:leading-10 text-[#929191]  mt-5">
            <div className="flex">
              <img src={checked} alt="" className="w-[25px] mr-5" />
              <p>Enhanced Features for High-Quality 360 Content</p>
            </div>
            <div className="flex">
              <img src={checked} alt="" className="w-[25px] mr-5" />
              <p>Always Stay Connected with 360 Social Live Broadcast</p>
            </div>
            <div className="flex">
              <img src={checked} alt="" className="w-[25px] mr-5" />
              <p>Expanded Compatibility for More 360 Experiences</p>
            </div>
          </div>
          <div className="mt-4">
       <CustomButton> Apply Now</CustomButton>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
