import { useEffect } from "react";
import type { VideosProps } from "../utils/interfaces";

const Videos = ({ videos }: VideosProps) => {
    if (!videos) return <p className="text-white">Loading...</p>;
    useEffect(() => {
        console.log(videos);
        /* channelId
        : 
        "UC_vt34wimdCzdkrzVejwX9g"
        channelTitle
        : 
        "Geo News"
        description
        : 
        "Geo News 12AM Headlines #AsimMunir #USPakistanRelations #WhiteHouseMeeting #AsimMunirInUS #TrumpMeetsMunir ..."
        liveBroadcastContent
        : 
        "none"
        publishTime
        : 
        "2025-06-20T20:10:11Z"
        publishedAt
        : 
        "2025-06-20T20:10:11Z"
        thumbnails
        : 
        {default: {…}, medium: {…}, high: {…}}
        title
        : 
        "Iran-Israel War Latest Updates! - Headlines Geo News 12 AM (21th June 2025)" */
    }, [videos])
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
