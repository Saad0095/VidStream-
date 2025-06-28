import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
    })

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            html.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDarkMode]);

    return (
        <div className="text-xl cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <FaSun className="text-white" /> : <FaMoon className="text-black" />}
        </div>
    )
}

export default ThemeToggle
