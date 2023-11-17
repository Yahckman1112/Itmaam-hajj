
import CustomBanner from '../../components/customBanner/CustomBanner'
import packageBg from '../../assets/packagesBg.jpg'
import img1 from '../../assets/3.jpg'
import MakkahHotel from '../../assets/hotel-1.png'
import MadinahHotel from '../../assets/hotel.png'
import CustomButton from './../../components/customButton/CustomButton';
function Packages() {
  return (
    <div>
        <div>
            < CustomBanner pageName='Our Packages' bgImage={packageBg} />
        </div>
        <section className='p-20 min-h-screen'>
            <p className='text-center text-2xl font-semibold'  > Our Packages</p>
            <div className='grid grid-cols-3 gap-7'>
                <div className='rounded-lg border border-solid  '>
          
                    <div>

                    <img src={img1} alt="" className='  object-cover' />
                    </div>
                    <div className='p-7'>

                    
                    <p className='text-xl font-semibold'>Umrah Packages</p>
                    <div className='grid grid-cols-2 my-7 ' style={{gridTemplateColumns:'20% 80%'}}>
                        <div>
                            <img src={MakkahHotel} width={'50px'} alt="" className='flex m-aut0' />
                        </div>
                        <div >
                            <p className='text-[15px] font-semibold mb-1 '>MAKKAH : Hotel Name</p>
                            <p className='text-[15px] font-bold text-[#007bff] '>20 MIN To Masjidil Haram</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 my-7' style={{gridTemplateColumns:'20% 80%'}}>
                        <div>
                            <img src={MadinahHotel} width={'50px'} alt="" className='flex m-aut0' />
                        </div>
                        <div >
                            <p className='text-[15px] font-semibold mb-1 '>MAKKAH : Hotel Name</p>
                            <p className='text-[15px] font-bold text-[#007bff] '>20 MIN To Nabawi Mosque</p>
                        </div>

                    </div>


                    <p className='text-[#007bff] text-2xl font-semibold my-12 mb-7' > <span className='text-[#929191] line-through text-lg font-normal'>16.0000 USD/P</span> 15.0000 USD/P </p>

                        <button className='text-base text-black font-bold uppercase px-12 py-3  bg-[#e5efffbc] hover:bg-[#ffc107] transition-transform duration-500 transform  rounded-full'>Apply Now</button>
                        
                    </div>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </section>
        </div>
  )
}

export default Packages