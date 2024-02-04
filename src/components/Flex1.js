import React from 'react'

function Flex1() {
    return (
        <div className='h-screen flex justify-center items-center'>
            {/* <div class="flex bg-gray-200">
                <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    Short
                </div>
                <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    Medium length
                </div>
                <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    Significantly larger amount of content
                </div>
            </div> */}

            <div className="container grid grid-cols-2 gap-6 mx-auto w-fit bg-slate-200">
                <div className='h-24 w-24 bg-red-400 relative hover:rotate-90 hover:bg-orange-400 transition duration-300'></div>
                <div className='h-24 w-24  bg-orange-400'></div>
                <div className='h-24 w-24  bg-green-400 '></div>
                <div className='h-24 w-24  bg-pink-400 '></div>
            </div>
        </div>
    )
}

export default Flex1