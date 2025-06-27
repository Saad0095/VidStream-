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
        <form className="searchbar flex h-10 items-center w-40 md:w-96" onSubmit={handleSubmit}>
            <input
                type="text"
                name=""
                id=""
                value={searchTerm}
                className="h-full w-4/5 p-4 outline-none border border-gray-300 rounded-l-full  dark:bg-white dark:text-black dark:border-none" placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)} />
            <div className="h-full w-1/5 flex justify-center items-center border rounded-r-full bg-gray-200 border-gray-300 dark:bg-white dark:text-black  dark:border-none">
                <FaSearch />
            </div>
        </form>
    )
}

export default SearchBar
