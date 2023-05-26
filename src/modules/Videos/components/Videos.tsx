import { IVideo } from "@/utils/types";
import { FC } from "react";
import VideoCard from "@/components/VideoCard";
import { NoResult } from "@/components/NoResult";

interface VideosProps {
  videos: IVideo[];
}

export const Videos: FC<VideosProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-10 videos h-full py-20">
      {videos.length ? (
        videos.map((video) => <VideoCard key={video._id} video={video} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
};
