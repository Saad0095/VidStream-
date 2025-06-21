export interface NavbarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface HomeProps {
  selectedCategory: string;
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