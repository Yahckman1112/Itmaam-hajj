import CustomBanner from "../../components/customBanner/CustomBanner";
import img from "../../assets/intro.png";
import CustomButton from "../../components/customButton/CustomButton";
import blogBg from "../../assets/add.jpg";
import milestone1 from "../../assets/milestone_1.png";
import milestone3 from "../../assets/milestone_3.png";
import milestone4 from "../../assets/milestone_4.png";
import CountUp from "react-countup";
function About() {

  const milestoneData =[
    {
      icon:milestone1,
      number:1240,
      label: 'Clients'
    },
  
    {
      icon:milestone1,
      number:100 ,
      label: 'Project'
    },
  
    {
      icon:milestone3,
      number:17,
      label: 'Countries'
    },
  
    {
      icon:milestone4,
      number:147,
      label: 'Tours'
    },
  
  ]
  return (
    <div>
      <div>
        <CustomBanner pageName="About US" />
      </div>
      <div className="py-5 px-5 md:px-10 lgpx-20">
        <section className="lg:grid grid-cols-2 gap-10">
          <div>
            <img src={img} alt="" className=" object-cover" />
          </div>
          <div>
            <p className="text-center text-2xl font-bold ">
              WE HAVE THE BEST TOURS
            </p>
            <p className="text-[#929191] font-semibold mt-5 leading-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore veritatis sint, fuga eligendi nulla hic
              dolorum neque nostrum adipisci cum fugiat omnis enim placeat, in
              iste odit nihil quasi porro delectus optio sequi obcaecati
              blanditiis. Modi minima corporis dicta! Recusandae voluptatum
              incidunt fuga pariatur iure eum aliquid consequuntur provident?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore veritatis sint, fuga eligendi nulla hic
              dolorum neque nostrum adipisci cum fugiat omnis enim placeat, in
              iste odit nihil quasi porro delectus optio sequi obcaecati
              blanditiis. Modi minima corporis dicta! Recusandae voluptatum
              incidunt fuga pariatur iure eum aliquid consequuntur provident?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore veritatis sint, fuga eligendi nulla hic
              dolorum neque nostrum adipisci cum fugiat omnis enim placeat, in
              iste odit nihil quasi porro delectus optio sequi obcaecati
              blanditiis. Modi minima corporis dicta! Recusandae voluptatum
              incidunt fuga pariatur iure eum aliquid consequuntur provident?
            </p>

            <div className="mt-6">
              <CustomButton>Explore Now</CustomButton>
            </div>
          </div>
        </section>

        <section
          className="my-5 md:after:my-10 text-white px-6 md:px-12  lg:px-24 py-20 md:10 w-full min-h-[50vh] bg-no-repeat bg-cover  bg-center"
          style={{ backgroundImage: `url(${blogBg})` }}
        >
          <p className=" uppercase font-bold text-4xl leading-loose">Madinah</p>
          <p>
            from <span className="font-bold text-sm"> $99</span>
          </p>
          <div className="mt-6">
            <CustomButton>Explore Now</CustomButton>
          </div>
        </section>

        <section className=" md:grid md:grid-cols-2 lg:grid-cols-4 gap-7 my-14 ">
          {milestoneData.map((item:any, i:number)=>(

          <div className=" text-center mb-12 md:mb-0" key={i}>
            <img src={item.icon} alt="" className="  flex m-auto" />

            <p className="text-[#2d2c2c] font-semibold text-4xl my-[22px]">
              <CountUp end={item.number} duration={100} />
            </p>
            <p className="text-[#9a9999] text-sm uppercase">{item.label}</p>
          </div>
          ))}
         
        </section>
      </div>
    </div>
  );
}

export default About;
