import { useEffect } from "react";
import type { VideosProps } from "../utils/interfaces";
import Loading from "./Loading";

const Videos = ({ videos }: VideosProps) => {
    useEffect(() => {
        console.log(videos);

    }, [videos])

    if (!videos) return <Loading />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => video.id.videoId && (
                <div key={video.id.videoId} className="p-4 rounded">
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                    <h3 className="text-lg font-bold">{video.snippet.title}</h3>
                    <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
                </div>
            ))}
        </div>
    );
};

export default Videos;
