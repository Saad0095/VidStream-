import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarLinks = [
  { name: "Home", href: "/" },
  { name: "Trending", href: "/trending" },
  { name: "Subscriptions", href: "/subscriptions" },
  { name: "Library", href: "/library" },
  { name: "History", href: "/history" },
  { name: "Watch Later", href: "/watch-later" },
  { name: "Liked Videos", href: "/liked" },
  { name: "Your Videos", href: "/your-videos" },
  { name: "Shorts", href: "/shorts" },
  { name: "Explore", href: "/explore" },
  { name: "Live", href: "/live" },
  { name: "Settings", href: "/settings" },
];

const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

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
    <div ref={sidebarRef} className={`fixed top-0 left-0 min-h-screen w-80 dark:bg-gray-950 dark:text-white shadow shadow-gray-600 transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <FaXmark className="fixed top-5 right-5 text-3xl font-bold cursor-pointer" onClick={() => setIsMenuOpen(false)} />
      <div className="flex flex-col justify-center p-10 gap-10">
        {sidebarLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className={`text-lg font-bold p-4 rounded-full ${link.href === pathname ? "bg-primaryColor text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
            onClick={() => setIsMenuOpen(false)}>
              {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
