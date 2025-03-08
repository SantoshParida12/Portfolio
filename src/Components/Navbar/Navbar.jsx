import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="flex flex-wrap items-center justify-between text-white px-10 pt-6 md:px-20 bg-gray-900 h-16 relative">
            <span className="text-xl font-bold tracking-wide">Portfolio</span>

            {/* Menu List */}
            <ul className={`${menu ? "block" : "hidden"} md:flex gap-6 
                py-2 mt-4 font-semibold md:mt-0 bg-black px-4 rounded-xl 
                bg-opacity-30 md:border-none text-center md:bg-transparent md:static`}>
                <a href="#About"><li className="cursor-pointer hover:text-gray-400 transition-all duration-300">About</li></a>
                <a href="#Experience"><li className="cursor-pointer hover:text-gray-400 transition-all duration-300">Experience</li></a>
                <a href="#Projects"><li className="cursor-pointer hover:text-gray-400 transition-all duration-300">Projects</li></a>
                <a href="#Footer"><li className="cursor-pointer hover:text-gray-400 transition-all duration-300">Contact</li></a>
            </ul>

            {/* Menu Toggle Icons */}
            <div className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300">
                {menu ? (
                    <RiCloseLine size={30} onClick={() => setMenu(false)} />
                ) : (
                    <RiMenu2Line size={30} onClick={() => setMenu(true)} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
