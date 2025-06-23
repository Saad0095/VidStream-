import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import type { SidebarProps } from "../utils/interfaces";

const sidebarLinks = [
  { name: "Home", href: "/", category: "New" },
  { name: "Trending", href: "/trending", category: "Trending" },
  { name: "Gaming", href: "/gaming", category: "Gaming" },
  { name: "Sports", href: "/sports", category: "Sports" },
  { name: "News", href: "/news", category: "News" },
  { name: "Education", href: "/education", category: "Education" },
  { name: "Shorts", href: "/shorts", category: "Shorts" },
];

const Sidebar = ({ isMenuOpen, setIsMenuOpen, selectedCategory, setSelectedCategory }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (category: string) => {
    setSelectedCategory(category)
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
    <div ref={sidebarRef} className={`fixed top-0 left-0 max-h-screen  w-72  scrollbar  scrollbar-thumb-gray-500 scrollbar-track-transparent bg-white dark:bg-gray-950 dark:text-white shadow shadow-gray-600 transition-all duration-300 ease-in-out transform z-10 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <FaXmark className="fixed top-5 right-5 text-3xl font-bold cursor-pointer" onClick={() => setIsMenuOpen(false)} />
      <div className="flex flex-col p-10 gap-6">
        {sidebarLinks.map((link, index) => (
          <p
            key={index}
            className={`text-lg font-bold p-4 rounded-full ${link.category === selectedCategory ? "bg-primaryColor text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
            onClick={() => handleLinkClick(link.category)}>
            {link.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
