import { FaSearch } from "react-icons/fa"
import Logo from "../assets/Logo.png"
import ThemeToggle from "./ThemeToggle"
import { RiMenu2Fill } from "react-icons/ri"
import { useState } from "react"
import Sidebar from "./Sidebar"
import type { NavbarProps } from "../utils/interfaces"

const Navbar = ({selectedCategory,setSelectedCategory}:NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="w-full fixed h-20 flex justify-between items-center px-10 bg-white dark:bg-gray-950 dark:text-white shadow shadow-gray-800">
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="flex gap-4 justify-center items-center">
                <RiMenu2Fill className="text-2xl font-bold cursor-pointer" onClick={() => setIsMenuOpen(true)} />
                <img src={Logo} alt="" />
            </div>
            <div className="searchbar flex h-10 items-center w-40 md:w-96">
                <input type="text" name="" id="" className="h-full w-4/5 p-4 outline-none border border-gray-300 rounded-l-full  dark:bg-white dark:text-black dark:border-none" placeholder="Search..." />
                <div className="h-full w-1/5 flex justify-center items-center border rounded-r-full bg-gray-200 border-gray-300  dark:bg-white dark:text-black  dark:border-none">
                    <FaSearch />
                </div>
            </div>
            <ThemeToggle />
        </div>
    )
}

export default Navbar
