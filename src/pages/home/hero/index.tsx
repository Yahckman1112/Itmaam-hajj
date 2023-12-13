import { BannerDiv } from "./hero.style";
import banner from "../../../assets/packagesBg.jpg";
import CustomButton from "../../../components/customButton/CustomButton";
import AppHeader from "../../../components/appHeader/AppHeader";





function Banner() {
  return (
    <div>
    

      <BannerDiv
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 143, 74, 0.4),rgba(26, 143, 74, 0.4) ), url(${banner})`,
        }}
        className="  "
      >
        <AppHeader />
        <div className="text-center pt-48">

        <div className="text-3xl md:text-5xl lg:text-6xl text-white   ">
          <p className="leading-loose font-black text-4xl md:text-8xl">
            SOLUTION FOR{" "}
          </p>
          <p className="font-pacifico">The Hajj and Umrah</p>
        </div>
        <div className="mt-8">
          <CustomButton>Apply Now</CustomButton>
        </div>
        </div>
      </BannerDiv>
    </div>
  );
}

export default Banner;
