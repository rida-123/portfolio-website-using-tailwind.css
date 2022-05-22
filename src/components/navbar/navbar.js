import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';
const Navbar=()=>{
let[nav,setNav]=useState(false);
const handleNav=()=>{
    setNav(!nav);
}
    return(
        <>
        <div className="w-full fixed bg-[#2c0030] p-3 flex justify-between ">
            <div>
            <img src="logo.png" className="" style={{width:"50px" }}></img>
            </div>
            
            <div className='hidden md:flex'>
         <ul  className="text-gray-300 text-lg flex ">
             <li>Home</li>
             <li>About</li>
             <li>Skills</li>
             <li>Work</li>
             <li>Contact</li>
         </ul>
     </div>
            
    {/* Humberg */}
<div className="md:hidden z-10" onClick={handleNav}>
    <div className='text-gray-300 absolute top-6 right-3 cursor-pointer' >
    {!nav ? <FaBars/> : <FaTimes/>}
    </div>

</div>

{/* mobile view */}
<div className='md:hidden '>
    <ul className={!nav ? "hidden":'absolute top-0 left-0 text-gray-300 bg-[#2c0030] h-screen w-full flex flex-col justify-center items-center'}>
    <li className='py-4'>Home</li>
             <li className='py-4'>About</li>
             <li className='py-4'>Skills</li>
             <li className='py-4'>Work</li>
             <li className='py-4'>Contact</li>  
    </ul>
</div>
<div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
    <ul >
        <li className='w-[160px] h-[60px]  flex justify-between items-center bg-blue-500 pb-2 ml-[-100px] hover:ml-[0px] duration-300'>
            <a href="" className='flex justify-between items-center w-full text-gray-300'>LinkedIn  &nbsp; &nbsp;<FaLinkedin className='text-3xl'></FaLinkedin></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center bg-black pb-2 ml-[-100px] hover:ml-[0px] duration-300'>
            <a href="" className='flex justify-between items-center   w-full text-gray-300'>Github  &nbsp; &nbsp;<FaGithub className='text-3xl'></FaGithub></a>
        </li>
        <li className='w-[160px] h-[60px]  flex justify-between items-center bg-orange-400 pb-2 ml-[-100px] hover:ml-[0px] duration-300'>
            <a href="" className='flex justify-between items-center w-full text-gray-300'>Email  &nbsp; &nbsp;<HiOutlineMail className='text-3xl'></HiOutlineMail></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center bg-slate-700 ml-[-100px] hover:ml-[0px] duration-300'>
            <a href="" className='flex justify-between items-center   w-full text-gray-300'>Resume  &nbsp; &nbsp;<BsFillPersonLinesFill className='text-3xl'></BsFillPersonLinesFill></a>
        </li>
        
    
    </ul>
</div>

        </div>
        </>
    )
}
export default Navbar;