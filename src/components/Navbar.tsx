import ThemeToggle from "./ThemeToggle"
import { RiMenu2Fill } from "react-icons/ri"
import { useState } from "react"
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="w-full fixed h-20 flex justify-between items-center px-10 bg-white dark:bg-gray-950 dark:text-white shadow shadow-gray-800">
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="flex gap-4 justify-center items-center">
                <RiMenu2Fill className="text-2xl font-bold cursor-pointer" onClick={() => setIsMenuOpen(true)} />
                {/* <img src={Logo} alt="" /> */}
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}><span className="text-primaryColor">Vid</span>Stream</h1>
            </div>
            <SearchBar />
            <ThemeToggle />
        </div>
    )
}

export default Navbar
