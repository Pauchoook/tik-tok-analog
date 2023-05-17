import { IVideo } from "@/utils/types";
import { useRouter } from "next/router";
import { FC, useState, useRef } from "react";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";

interface VideoPlayerProps {
  video: IVideo;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const router = useRouter();

  const handlerVideoPlay = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  };

  const handlerVideoMuted = () => {
    if (isMuted) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  };

  return (
    <div className="relative flex-2 w-full lg:w-9/12 flex justify-center items-center bg-black">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-2 lg:left-6 flex gap-6 z-50 text-white hover:text-[#f51997]"
      >
        <MdOutlineCancel className="text-[35px]" />
      </button>
      <div className="relative">
        <div className="lg:h-screen h-[60vh]">
          <video
            ref={videoRef}
            src={video.video.asset.url}
            className="w-full h-full object-fit-contain cursor-pointer"
            onClick={handlerVideoPlay}
          ></video>
        </div>
        <div className="absolute left-[calc(50%-48px)] top-[calc(50%-48px)]">
          {!isPlaying && (
            <button onClick={handlerVideoPlay} className="text-white hover:text-[#f51997]">
              <BsFillPlayFill className="text-6xl lg:text-8xl" />
            </button>
          )}
        </div>
      </div>
      <div className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 cursor-pointer">
        {isMuted ? (
          <button onClick={handlerVideoMuted} className="text-white hover:text-[#f51997]">
            <HiVolumeOff className="text-2xl lg:text-4xl" />
          </button>
        ) : (
          <button onClick={handlerVideoMuted} className="text-white hover:text-[#f51997]">
            <HiVolumeUp className="text-2xl lg:text-4xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
