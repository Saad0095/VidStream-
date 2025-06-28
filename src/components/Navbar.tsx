import ThemeToggle from "./ThemeToggle"
import { RiMenu2Fill } from "react-icons/ri"
import { useState } from "react"
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="w-full fixed h-20 flex justify-between items-center px-10 bg-gray-50 dark:bg-black dark:text-white shadow-md dark:shadow-zinc-900">
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="flex gap-4 justify-center items-center">
                <RiMenu2Fill className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(true)} />
            </div>
            <SearchBar />
            <ThemeToggle />
        </div>
    )
}

export default Navbar
