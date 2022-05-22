import { HiArrowNarrowRight } from 'react-icons/hi';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Home=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
        <div className="w-full h-screen  bg-[#2c0030]">
    
            <div className="max-w[1000px] px-10 lg:px-48 mx-auto flex flex-col justify-center h-full ">
            
                <h6 className="text-[#f7ad94]">Hi,my name is</h6>
                <h1 className="lg:text-[80px] text-[40px] text-gray-300">Rida Shoaib</h1>
                <h1 className="lg:-mt-[20px] lg:text-[50px] text-[30px] -mt[-10px] text-[#f7ad94]">I'm a MERN Stack developer</h1>
                <p className="-mt-[0px] text-[20px] text-gray-300">Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine.</p>
           <button className="bg-[transparent] text-gray-300 group border-2 w-40 p-3 mt-4 flex justify-between items-center hover:bg-[#f7ad94] hover:text-black">View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight ></HiArrowNarrowRight></span></button>
            </div>
            </div>
       
        </>
    )
}
export default Home;