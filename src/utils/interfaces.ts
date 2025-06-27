export interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Video {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface VideosProps {
  videos: Video[] | null;
}

export interface VideoDetailProps {
  title: string;
  description: string;
  channelTitle: string;
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

export interface VideoCardProps {
  video: Video;
}

export interface VideoCommentsProps {
  id: string | undefined;
}

export interface Comment {
  id: string;
  snippet: {
    topLevelComment: {
      id: string;
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
        publishedAt: string;
        likeCount: number;
      };
    };
  };
}
