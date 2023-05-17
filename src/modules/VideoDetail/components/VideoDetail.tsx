import VideoInfo from "@/modules/VideoDetail/components/VideoInfo";
import VideoPlayer from "@/components/VideoPlayer";
import { IVideo } from "@/utils/types";
import { FC } from "react";

interface VideoDetailProps {
  video: IVideo;
}

export const VideoDetail: FC<VideoDetailProps> = ({ video }) => {
  return (
    <div className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
      <VideoPlayer video={video} />
      <VideoInfo video={video} />
    </div>
  );
};