import { useEffect, useState } from "react"
import Videos from "../components/Videos"
import type { Video } from "../utils/interfaces"
import { useParams } from "react-router-dom"
import { fetchData } from "../utils/api"

const Category = () => {
    const [videos, setVideos] = useState<Video[] | null>([])
    const { category } = useParams()

    const fetchVideos = async () => {
        try {
            const videos = await fetchData(`search?part=snippet&q=${category}`)
            setVideos(videos.items)
        } catch (error) {
            console.log("Error fetching videos: ", error);
        }
    }

    useEffect(() => {
        fetchVideos();
    }, [category])

    return (
        <div className="px-5 md:px-10 py-20">
            <h1 className="text-2xl dark:text-white font-bold p-5"><span className="text-primaryColor">{category ? category.charAt(0).toUpperCase() + category.slice(1) : ""} </span>Videos</h1>
            <Videos videos={videos} />
        </div>
    )
}

export default Category
