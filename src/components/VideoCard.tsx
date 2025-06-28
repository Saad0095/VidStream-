import { useNavigate } from 'react-router-dom'
import type { VideoCardProps } from '../utils/interfaces'

const VideoCard = ({ video }: VideoCardProps) => {
    const navigate = useNavigate()

    return (
        <div className="p-4 rounded cursor-pointer border border-gray-300 shadow shadow-gray-300 dark:shadow-gray-600 dark:border-gray-700"
            onClick={() => navigate(`/video/${video.id.videoId}`)}>
            <img src={video.snippet?.thumbnails?.high?.url} alt={video.snippet.title} />
            <h3 className="text-lg font-bold">{video.snippet.title}</h3>
            <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
        </div>
    )
}

export default VideoCard
