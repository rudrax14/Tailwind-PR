import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    };

    return (
        <div>
            <nav
                className={`bg-slate-900 text-white md:flex md:justify-between justify-center w-screen items-center fixed top-0 z-10`}
            >
                <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 h-12 text-sm">
                    <section className="flex items-center gap-10">
                        <div className="font-bold text-2xl md:flex items-center">
                            Navbar
                        </div>
                        <div className="hidden md:flex items-center gap-4 transition-all">
                            <Link to="/home" className="relative group  px-2 py-6 transition-all">
                                <p className="flex cursor-pointer items-center gap-2 group-hover:text-gray-300">
                                    <span>Features</span>
                                    <IoIosArrowDown className="mt-1 rotate-180 group-hover:rotate-0 transition-all" />
                                </p>
                                {/* dropdown */}
                                <div className="absolute top-10 px-6 flex-col gap-1 hidden rounded-lg py-3 bg-white shadow-md transition-all group-hover:flex text-black">
                                    Hello
                                </div>
                            </Link>
                        </div>
                    </section>

                    <div className="handburger md:hidden ml-2 pr-6">
                        <a
                            href="#"
                            className={`text-2xl cursor-pointer text-white transition`}
                            onClick={clickHandler}
                        >
                            {open ? <ImCross className="duration-700" /> : <GiHamburgerMenu className="duration-700" />}
                        </a>
                    </div>
                </div>


            </nav>
            <div className={`bg-slate-900 ${open ? "mt-12 px-4 border-2 w-full fixed top-0 duration-500 md:hidden z-0 text-white space-y-3 py-4" : "duration-500 fixed top-[-100%] w-full mt-14 px-4 border-2 z-0"}`}>
                <ul className="space-y-2">
                    <li className="md:px-2">Home</li>
                    <li className="md:px-2">About</li>
                    <li className="md:px-2">Contact</li>
                </ul>
                <button className="font-bold text-xl px-2 bg-indigo-600 border rounded transition hover:bg-indigo-500 duration-300">
                    Login
                </button>
                <button className="font-bold text-xl px-2 mx-2 bg-indigo-600 border rounded">
                    Signup
                </button>
            </div>

            {/* Conditional div for sliding in from the right */}

            {/* <div className="fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transform transition-transform translate-x-full duration-500 ease-in">
                <div className="fixed top-0 right-0 h-full w-52 bg-gray-800 text-white p-4 md:hidden">
                    <a
                        href="#"
                        className="text-2xl cursor-pointer text-white"
                        onClick={clickHandler}
                    >
                        {open ? "✖" : "☰"}
                    </a>
                    <ul className={`md:flex text-semibold text-xl justify-center ${open ? "block" : "hidden"}`}>
                        <li className="md:px-2">Home</li>
                        <li className="md:px-2">About</li>
                        <li className="md:px-2">Contact</li>
                    </ul>
                </div>
            </div>
            <div>
                <div
                    className={`h-full w-screen bg-black right-0 absolute inset-0 transform duration-500 ease-in transition-all ${open ? "opacity-50" : "opacity-0"
                        }`}
                ></div>
                <div
                    onClick={clickHandler}
                    className={` w-40 bg-white h-full absolute right-0  duration-300 ease-out transition-all ${open ? '' : 'translate-x-full'}`}
                >
                    <a
                        href="#"
                        className="text-2xl cursor-pointer absolute text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
                        onClick={clickHandler}
                    >
                        {open ? "✖" : "☰"}
                    </a>
                    <div>
                        <ul
                            className={`md:flex text-semibold text-xl justify-center ${open ? "block" : "hidden"
                                }`}
                        >
                            <li className="md:px-2">Home</li>
                            <li className="md:px-2">About</li>
                            <li className="md:px-2">Contact</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Navbar;


// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const handleNav = () => {
//         setNav(!nav);
//     };

//     return (
//         <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//             <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
//             <ul className='hidden md:flex'>
//                 <li className='p-4'>Home</li>
//                 <li className='p-4'>Company</li>
//                 <li className='p-4'>Resources</li>
//                 <li className='p-4'>About</li>
//                 <li className='p-4'>Contact</li>
//             </ul>
//             <div onClick={handleNav} className='block md:hidden text-2xl cursor-pointer'>
//                 {nav ? "✖" : "☰"}
//             </div>
//             <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//                 <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
//                 <li className='p-4 border-b border-gray-600'>Home</li>
//                 <li className='p-4 border-b border-gray-600'>Company</li>
//                 <li className='p-4 border-b border-gray-600'>Resources</li>
//                 <li className='p-4 border-b border-gray-600'>About</li>
//                 <li className='p-4'>Contact</li>
//             </ul>
//         </div>
//     );
// };

// export default Navbar;