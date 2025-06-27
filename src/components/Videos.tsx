import type { VideosProps } from "../utils/interfaces";
import Loading from "./Loading";
import VideoCard from "./VideoCard";

const Videos = ({ videos }: VideosProps) => {
    if (!videos) return <Loading />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => video.id.videoId && (
                <VideoCard key={video.id.videoId} video={video} />
            ))}
        </div>
    );
};

export default Videos;
