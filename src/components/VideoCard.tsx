import { useNavigate } from 'react-router-dom'
import type { Video, VideoCardProps } from '../utils/interfaces'

const VideoCard = ({ video }: VideoCardProps) => {
    const navigate = useNavigate()

    return (
        <div className="p-4 rounded cursor-pointer"
            onClick={() => navigate(`/video/${video.id.videoId}`)}>
            <img src={video.snippet?.thumbnails?.high?.url} alt={video.snippet.title} />
            <h3 className="text-lg font-bold">{video.snippet.title}</h3>
            <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
        </div>
    )
}

export default VideoCard
