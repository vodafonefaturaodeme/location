import React,{useState} from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    const handleClickScroll = () => {
        const element = document.getElementById('section1');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleClickScroll2 = () => {
        const element = document.getElementById('section2');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleClickScroll3 = () => {
        const element = document.getElementById('section3');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#1452fc]">Location</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Anasayfa</li>
             
                <button className="btn-scroll" onClick={handleClickScroll3}>
          İletişim
        </button>
                <li className="p-4">

                <button className="btn-scroll" onClick={handleClickScroll}>
          SSS
        </button>
                </li>
                <li className="p-4">

                <button className="btn-scroll" onClick={handleClickScroll2}>
          Hakkımızda
        </button>
                </li>

            </ul>
            <div onClick={handleNav} className="block md:hidden">
                
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' :'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#1452fc] m-4">Location</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Anasayfa</li>
                    <li className="p-4 border-b border-gray-600">Hakkımızda</li>
                    <li className="p-4 border-b border-gray-600">İletişim</li>

                </ul>
           

            </div>



        </div>
    )
}

export default Navbar;