import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <>
            <div className='bg-slate-800'>

                <Navbar />
                <div className=' mt-12 h-screen flex justify-center items-center'>
                    <h1 className='text-white font-bold text-6xl'>NAVBAR</h1>
                </div>
            </div>

        </>
    )
}

export default Home