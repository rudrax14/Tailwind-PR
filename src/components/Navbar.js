// import React, { useState } from "react";

// function Navbar() {
//     const [open, setOpen] = useState(false);

//     const clickHandler = () => {
//         setOpen(!open);
//     };

//     return (
//         <div>
//             <nav
//                 className={`bg-slate-900 text-white md:flex md:justify-between justify-center w-screen items-center fixed top-0 px-4`}
//             >
//                 <div className="flex justify-between items-center h-12">
//                     <div className="font-bold text-2xl md:flex items-center">
//                         Classroom
//                     </div>
//                     <div className="handburger md:hidden ml-2">
//                         <a
//                             href="#"
//                             className="text-2xl cursor-pointer text-white"
//                             onClick={clickHandler}
//                         >
//                             {open ? "✖" : "☰"}
//                         </a>
//                     </div>
//                 </div>

//                 <ul
//                     className={`md:flex text-semibold text-xl justify-center duration-300 ease-out transition-all ${open ? "block" : "hidden"
//                         }`}
//                 >
//                     <li className="md:px-2">Home</li>
//                     <li className="md:px-2">About</li>
//                     <li className="md:px-2">Contact</li>
//                 </ul>
//                 <div className={`md:flex py-2 ${open ? "flex" : "hidden"}`}>
//                     <button className="font-bold text-xl px-2 bg-indigo-600 border rounded transition hover:bg-indigo-500 duration-300">
//                         Login
//                     </button>
//                     <button className="font-bold text-xl px-2 mx-2 bg-indigo-600 border rounded">
//                         Signup
//                     </button>
//                 </div>
//             </nav>

//             {/* Conditional div for sliding in from the right */}

//             {/* <div className="fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transform transition-transform translate-x-full duration-500 ease-in">
//                     <div className="fixed top-0 right-0 h-full w-52 bg-gray-800 text-white p-4 md:hidden">
//                         <a
//                             href="#"
//                             className="text-2xl cursor-pointer text-white"
//                             onClick={clickHandler}
//                         >
//                             {open ? "✖" : "☰"}
//                         </a>
//                         <ul className={`md:flex text-semibold text-xl justify-center ${open ? "block" : "hidden"}`}>
//                             <li className="md:px-2">Home</li>
//                             <li className="md:px-2">About</li>
//                             <li className="md:px-2">Contact</li>
//                         </ul>
//                     </div>
//                 </div> */}
//             <div>
//                 {/* <div
//                     className={`h-full w-screen bg-black right-0 absolute inset-0 transform duration-500 ease-in transition-all ${open ? "opacity-50" : "opacity-0"
//                         }`}
//                 ></div> */}
//                 <div
//                     onClick={clickHandler}
//                     className={` w-40 bg-white h-full absolute right-0  duration-300 ease-out transition-all ${open ? '' : 'translate-x-full'}`}
//                 >
//                     <a
//                         href="#"
//                         className="text-2xl cursor-pointer absolute text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
//                         onClick={clickHandler}
//                     >
//                         {open ? "✖" : "☰"}
//                     </a>
//                     <div>
//                         <ul
//                             className={`md:flex text-semibold text-xl justify-center ${open ? "block" : "hidden"
//                                 }`}
//                         >
//                             <li className="md:px-2">Home</li>
//                             <li className="md:px-2">About</li>
//                             <li className="md:px-2">Contact</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-2xl cursor-pointer'>
                {nav ? "✖" : "☰"}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;