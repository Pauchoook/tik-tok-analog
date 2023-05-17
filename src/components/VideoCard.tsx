import { useState, useRef } from "react";
import { IVideo } from "@/utils/types";
import { NextPage } from "next";
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import VideoCardHeader from "@/components/VideoCardHeader";

interface VideoCardProps {
  video: IVideo;
}

const VideoCard: NextPage<VideoCardProps> = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  const onVideoPres = () => {
    if (isPlaying) {
      ref.current?.pause();
      setIsPlaying(false);
    } else {
      ref.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <VideoCardHeader
        id={video.postedBy._id}
        image={video.postedBy.image}
        username={video.postedBy.username}
      />
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="rounded-3xl pr-4 lg:pr-0"
        >
          <Link href={`/detail/${video._id}`} className="block">
            <video
              ref={ref}
              loop
              className="lg:w-[700px] h-[300px] md:h-[400px] lg:h-[530px] w-full object-contain rounded-2xl bg-gray-100"
              src={video.video.asset.url}
            />
          </Link>
          {isHover && (
            <div className="absolute bottom-2 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
              {isPlaying ? (
                <button onClick={onVideoPres}>
                  <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPres}>
                  <BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
                </button>
              )}
              {isMuted ? (
                <button onClick={() => setIsMuted(false)}>
                  <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={() => setIsMuted(true)}>
                  <HiVolumeUp className="text-black text-2xl lg:text-4xl" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
