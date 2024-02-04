import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
const Accordion = () => {
    const data = {
        title: "Accordion Title",
        content: "Accordion Content",
    };
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="p-2">
            <div className="p-2 border-2">
                <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full focus:outline-none items-center"
                >
                    <div>{data.title}</div>
                    <div>
                        {accordionOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </button>
                <div
                    className={` ${accordionOpen ? "mt-3 duration-300 overflow-hidden ease-in-out  text-slate-600 text-sm" : "h-0 overflow-hidden duration-500 ease-in-out text-slate-300 text-sm"
                        }`}
                >
                    <div className="overflow-hidden">{data.content}</div>
                </div>
            </div>
            {/* <h1>Accordion</h1> */}
        </div>
    );
};

export default Accordion;
