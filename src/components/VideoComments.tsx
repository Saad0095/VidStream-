import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';
import type { Comment, VideoCommentsProps } from '../utils/interfaces';

const VideoComments = ({ id }: VideoCommentsProps) => {
  const [comments, setComments] = useState<Comment[] | null>(null);

  const fetchComments = async () => {
    const res = await fetchData(`commentThreads?part=snippet&videoId=${id}`);
    setComments(res.items);
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  return (
    <div className="mt-10 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {comments?.map((comment) => {
        const c = comment.snippet.topLevelComment.snippet;
        return (
          <div key={comment.id} className="flex items-start gap-4 mb-6">
            <img
              src={c.authorProfileImageUrl}
              alt={c.authorDisplayName}
              className="rounded-full w-10 h-10"
            />
            <div>
              <div className='flex gap-2 items-center'>
                <p className="font-semibold">{c.authorDisplayName}</p>
                <p className="text-gray-300 text-sm">{new Date(c.publishedAt).toLocaleDateString()}</p>
              </div>
              <p className="mt-1">{c.textDisplay}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoComments;
