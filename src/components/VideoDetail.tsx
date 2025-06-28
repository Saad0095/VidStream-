import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api'
import { useParams } from 'react-router-dom';
import type { Video, VideoDetailProps, } from '../utils/interfaces';
import Loading from './Loading';
import VideoCard from './VideoCard';
import VideoComments from './VideoComments';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState<VideoDetailProps | null>(null)
    const [videos, setVideos] = useState<Video[] | null>(null)
    const { videoId } = useParams()

    const fetchVideo = async () => {
        const video = await fetchData(`videos?part=snippet,statistics&id=${videoId}`);
        const item = video?.items[0];
        if (item) {
            const videoInfo: VideoDetailProps = {
                title: item.snippet.title,
                description: item.snippet.description,
                channelTitle: item.snippet.channelTitle,
                viewCount: item.statistics.viewCount,
                likeCount: item.statistics.likeCount,
                commentCount: item.statistics.commentCount,
            }
            setVideoDetail(videoInfo)
        }
    }

    const fetchRecommendedVideos = async () => {
        const videos = await fetchData(`search?part=id,snippet&relatedToVideoId=${videoId}`)
        setVideos(videos.items)
    }

    useEffect(() => {
        fetchVideo()
        fetchRecommendedVideos()
    }, [videoId])

    if (!videoDetail || !videos) return <Loading />

    const { title, channelTitle, viewCount } = videoDetail;

    return (
        <div className='flex flex-col md:flex-row w-full min-h-screen px-6 py-24 text-black dark:text-white'>
            <div className='w-full md:w-2/3 flex flex-col my-10 gap-2 md:gap-5'>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                    title="YouTube video player"
                    className="w-full rounded-lg shadow h-60 md:h-[450px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
                <div className=''>
                    <h1 className='text-2xl font-bold '>{title}</h1>
                    <h4 className='text-lg text-gray-400'>{channelTitle}</h4>
                    <p className='text-gray-700'>{parseInt(viewCount).toLocaleString()} views</p>

                </div>
                <VideoComments id={videoId} />
            </div>
            <div className='w-full md:w-1/3 flex flex-col gap-5'>
                {videos.map(video =>
                    <VideoCard key={video.id.videoId} video={video} />
                )}
            </div>
        </div>
    )
}

export default VideoDetail
