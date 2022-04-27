import React from 'react'
import Navbar from './Navbar'

function Dashboard() {
    return (
        <div className='Dashboard'>
            <Navbar />
            <div className="bg-sky-300 ">
                <div className="px-20 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Wellcome back : </h1>
                            <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                laudantium quod rem voluptatem eos accusantium cumque.</p>
                            <div className="mt-6">
                                <a href="#"
                                    className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                                    Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                        <img className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                            src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
