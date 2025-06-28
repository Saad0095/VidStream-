import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm("")
        }
    }

    return (
        <form className="flex h-full w-full items-center text-black dark:text-white px-8 md:px-14 space-x-4" onSubmit={handleSubmit}>
            <FaSearch />
            <input
                type="text"
                name=""
                id=""
                value={searchTerm}
                className="h-full w-full p-4 outline-none border-none placeholder-black dark:placeholder-white" placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    )
}

export default SearchBar
