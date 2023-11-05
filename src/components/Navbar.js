import React, { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className={`bg-slate-900 text-white md:flex md:justify-between justify-center w-screen items-center ${open ? 'h-auto' : 'h-12'} px-4 fixed top-0`}>
                <div className="flex justify-between items-center h-12">
                    <div className="font-bold text-2xl md:flex items-center">
                        Classroom
                    </div>
                    <div className="handburger md:hidden ml-2">
                        <a href="#" className="text-2xl cursor-pointer text-white" onClick={clickHandler}>
                            {open ? "✖" : "☰"}
                        </a>
                    </div>
                </div>

                <ul className={`md:flex text-semibold text-xl justify-center cursor-pointer ${open ? 'block' : 'hidden'}`}>
                    <li className="md:px-2">Home</li>
                    <li className="md:px-2">About</li>
                    <li className="md:px-2">Contact</li>
                </ul>
                <div className={`md:flex py-2 ${open ? 'flex' : 'hidden'}`}>
                    <button className="font-bold text-xl px-2 bg-indigo-600 border rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Login</button>
                    <button className="font-bold text-xl px-2 mx-2 bg-indigo-600 border rounded">Signup</button>
                </div>
            </nav>
            {/* Conditional div for sliding in from the right */}
            {open && (
                <div className={`fixed top-0 right-0 h-full w-56 bg-gray-800 text-white p-4 ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <a href="#" className="text-2xl cursor-pointer text-white" onClick={clickHandler}>
                        {open ? "✖" : "☰"}
                    </a>
                    <ul className={`md:flex text-semibold text-xl justify-center cursor-pointer ${open ? 'block' : 'hidden'}`}>
                        <li className="md:px-2">Home</li>
                        <li className="md:px-2">About</li>
                        <li className="md:px-2">Contact</li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
