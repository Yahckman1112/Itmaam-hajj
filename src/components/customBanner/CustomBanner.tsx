import styled from "styled-components";
import banner from "../../assets/about_background.jpg";
import AppHeader from "../appHeader/AppHeader";
interface IPages{
    pageName?:string;
    bgImage?:any
}

function CustomBanner({pageName, bgImage}:IPages) {
  const BannerDiv = styled.div`
    min-height: 75vh;
    max-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;
  return (
    <div>
      {/* linear-gradient(to bottom, #31124b1c, #31124b82), */}

      <BannerDiv
        style={{
          backgroundImage: ` url(${ bgImage || banner})`,
        }}
      >
        <AppHeader />
        <div className=" text-center pt-[70%] md:pt-[20%] tracking-wide ">
          <p className="leading-loose font-black text-4xl md:text-6xl text-white ">
            {pageName}
          </p>
        </div>
      </BannerDiv>
    </div>
  );
}

export default CustomBanner;
