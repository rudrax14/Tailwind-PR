import React, { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    };

    return (
        <div>
            <nav
                className={`bg-slate-900 text-white md:flex md:justify-between justify-center w-screen items-center fixed top-0 px-4`}
            >
                <div className="flex justify-between items-center h-12">
                    <div className="font-bold text-2xl md:flex items-center">
                        Classroom
                    </div>
                    <div className="handburger md:hidden ml-2">
                        <a
                            href="#"
                            className="text-2xl cursor-pointer text-white"
                            onClick={clickHandler}
                        >
                            {open ? "✖" : "☰"}
                        </a>
                    </div>
                </div>

                <ul
                    className={`md:flex text-semibold text-xl justify-center duration-300 ease-out transition-all ${open ? "block" : "hidden"
                        }`}
                >
                    <li className="md:px-2">Home</li>
                    <li className="md:px-2">About</li>
                    <li className="md:px-2">Contact</li>
                </ul>
                <div className={`md:flex py-2 ${open ? "flex" : "hidden"}`}>
                    <button className="font-bold text-xl px-2 bg-indigo-600 border rounded transition hover:bg-indigo-500 duration-300">
                        Login
                    </button>
                    <button className="font-bold text-xl px-2 mx-2 bg-indigo-600 border rounded">
                        Signup
                    </button>
                </div>
            </nav>

            <div>
                {/* black  */}
                <div
                    className={` duration-500 ease-out transition-all absolute bg-gray-900 ${open ? 'opacity-50' : 'opacity-0'}`}
                ></div>
                <div
                    className={`w-12 bg-white absolute right-0 duration-300 ease-out transition-all ${open ? '' : 'translate-x-full'}`}
                >
                    <a
                        href="#"
                        className="text-2xl cursor-pointer absolute text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5'"
                        onClick={clickHandler}
                    >
                        {open ? "✖" : "☰"}
                    </a>
                </div>
            </div>

            {/* Conditional div for sliding in from the right */}
            {/* {open && (
                <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transform transition-transform translate-x-full duration-500 ease-in">
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
            )} */}
        </div>
    );
}

export default Navbar;
