import React, { useState } from 'react'

function SlideOver() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSlideover = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div
                // onClick={toggleSlideover}
                className="cursor-pointer px-5 py-2 text-sm border text-gray-500 hover:bg-gray-100 rounded border-gray-300"
            >
                Toggle Slide-over
            </div>

            <div id="slideover-container" className={`w-full h-full fixed inset-0 `}>
                {/* black  */}
                <div
                    onClick={toggleSlideover}
                    className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
                ></div>
                <div
                    onClick={toggleSlideover}
                    className={`w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all ${isOpen ? '' : 'translate-x-full'}`}
                >
                    <a
                        href="#"
                        className="text-2xl cursor-pointer absolute text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
                        onClick={toggleSlideover}
                    >
                        {isOpen ? "✖" : "☰"}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SlideOver