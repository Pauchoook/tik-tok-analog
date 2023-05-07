import axios from "axios";
import { IVideo } from "@/utils/types";
import { FC } from "react";
import VideoCard from "@/components/VideoCard";

interface VideosProps {
  videos: IVideo[];
}

export const Videos: FC<VideosProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos ? (
        videos.map((video) => <VideoCard key={video._id} video={video} />)
      ) : (
        <h1>no result</h1>
      )}
    </div>
  );
};
