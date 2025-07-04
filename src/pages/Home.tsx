import Videos from "../components/Videos"
import { fetchData } from "../utils/api";
import { useEffect, useState } from "react"
import type { Video } from "../utils/interfaces";

const Home = () => {
  const [videos, setVideos] = useState<Video[] | null>(null)
  const fetchVideos = async () => {
    try {
      const videos = await fetchData(`search?part=snippet&q=/`)
      setVideos(videos.items);
    } catch (error) {
      console.log("Error fetching videos: ", error);
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <div className="px-5 md:px-10 py-20">
      <h1 className="text-2xl dark:text-white font-bold p-5"><span className="text-primaryColor">New </span>Videos</h1>
      <Videos videos={videos} />
    </div>
  )
}

export default Home
