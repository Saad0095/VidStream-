import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import type { SidebarProps } from "../utils/interfaces";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarLinks = [
  { name: "Home", href: "/", category: "" },
  { name: "Trending", href: "/trending", category: "Trending" },
  { name: "Gaming", href: "/gaming", category: "Gaming" },
  { name: "Fashion", href: "/fashion", category: "Fashion" },
  { name: "Sports", href: "/sports", category: "Sports" },
  { name: "News", href: "/news", category: "News" },
  { name: "Education", href: "/education", category: "Education" },
  { name: "Shorts", href: "/shorts", category: "Shorts" },
];

const Sidebar = ({ isMenuOpen, setIsMenuOpen}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLinkClick = (link: string) => {
    navigate(`${link}`)
    setIsMenuOpen(false)
  }

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target
    if (target instanceof Node && sidebarRef.current && !sidebarRef.current.contains(target)) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  return (
    <div ref={sidebarRef} className={`h-screen fixed top-0 left-0 max-h-screen overflow-auto w-72  scrollbar  scrollbar-thumb-gray-500 scrollbar-track-transparent bg-white dark:bg-gray-950 dark:text-white shadow shadow-gray-600 transition-all duration-300 ease-in-out transform z-10 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <FaXmark className="fixed top-5 right-5 text-3xl font-bold cursor-pointer" onClick={() => setIsMenuOpen(false)} />
      <ul className="flex flex-col p-10 gap-6">
        {sidebarLinks.map((link, index) => (
          <li
            key={index}
            className={`cursor-pointer text-lg font-bold p-4 rounded-full decoration-0 ${link.href === pathname ? "bg-primaryColor text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
            onClick={() => handleLinkClick(link.href)}>
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
