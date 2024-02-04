import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
function Nav2() {
    return (
        <div className="min-h-screen bg-gray-200 w-full">
            <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm">
                <section className="flex items-center gap-10">
                    <img
                        src="https://dropdown-navigation-tau.vercel.app/_next/static/media/logo.56dd9ce1.svg"
                        alt=""
                    />
                    <div className="hidden md:flex items-center gap-4 transition-all">
                        <a className="relative group px-2 py-3 transition-all " href="">
                            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                                <span>Features</span>
                                <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                            </p>
                            {/* dropdown */}
                            <div className="absolute  right-0  top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                                <Link className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  ">
                                    <span className="whitespace-nowrap   pl-3 ">Hello</span>
                                </Link>
                                <Link className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  ">
                                    <span className="whitespace-nowrap   pl-3 ">Hello</span>
                                </Link>
                            </div>
                        </a>
                    </div>
                </section>
                <section></section>
            </div>
        </div>
    );
}

export default Nav2;
