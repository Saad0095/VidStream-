import { useEffect, useState } from "react"
import Videos from "../components/Videos"
import type { Video } from "../utils/interfaces"
import { useParams } from "react-router-dom"
import { fetchData } from "../utils/api"

const SearchPage = () => {
    const [videos, setVideos] = useState<Video[] | null>([])
    const { searchTerm } = useParams()

    const fetchVideos = async () => {
        try {
            const videos = await fetchData(`search?part=snippet&q=${searchTerm}`)
            setVideos(videos.items)
        } catch (error) {
            console.log("Error fetching videos: ", error);
        }
    }

    useEffect(() => {
        fetchVideos();
    }, [searchTerm])

    return (
        <div className="px-10 py-20">
            <h1 className="text-2xl dark:text-white font-bold p-5">Search Results for <span className="text-primaryColor">{searchTerm ? searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) : ""} </span></h1>
            <Videos videos={videos} />
        </div>
    )
}

export default SearchPage
