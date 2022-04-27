import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="block flex justify-between py-8 bg-black-500">
                <div className="flex items-center space-x-5 pl-20">
                    <h3 className="text-2xl font-medium text-blue-500">jwt auth</h3>
                    <div className="items-center hidden space-x-8 lg:flex">
                        <a href="/dashboard">Dashboard</a>
                    </div>
                </div>

                <div className="flex items-center space-x-2 pr-20">
                    <button className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                        Log out
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
