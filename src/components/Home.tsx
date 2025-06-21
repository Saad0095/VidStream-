import Videos from "./Videos"
import { fetchData } from "../utils/api";
import { useEffect, useState } from "react"
import type { HomeProps, Video } from "../utils/interfaces";

const Home = ({ selectedCategory }: HomeProps) => {

  const [videos, setVideos] = useState<Video[] |null>(null)
  const fetchVideos = async () => {
    try {
      const videos = await fetchData(`search?part=snippet&q=${selectedCategory}`)
      console.log(videos.items);
      setVideos(videos.items);
    } catch (error) {
      console.log("Error fetching videos: ", error);
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [selectedCategory])

  return (
    <div className="px-10 py-20">
      <h1 className="text-3xl dark:text-white font-bold py-5">{selectedCategory} <span className="text-primaryColor">Videos</span></h1>
      <Videos videos={videos}/>
    </div>
  )
}

export default Home
