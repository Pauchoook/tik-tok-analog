import VideoCard from "@/components/VideoCard";
import { IVideo } from "@/utils/types";
import { FC } from "react";

interface VideosProps {
  videos: IVideo[];
}

export const Videos: FC<VideosProps> = ({ videos }) => {
  return (
    <div className="flex gap-6 flex-wrap md:justify-start">
      {videos.length ? videos.map((video) => <VideoCard key={video._id} video={video} />) : <h1>no result</h1>}
    </div>
  );
};
