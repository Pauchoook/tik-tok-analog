import { IUser, IVideo } from "@/utils/types";
import Image from "next/image";
import { FC, useState } from "react";
import { GoVerified } from "react-icons/go";
import { Videos } from "./Videos";

interface ProfileProps {
  user: IUser;
  myVideos: IVideo[];
  likedVideos: IVideo[];
}

export const Profile: FC<ProfileProps> = ({ user, myVideos, likedVideos }) => {
  const [isShowVideos, setIsShowVideos] = useState(true);

  const videosClasses = isShowVideos
    ? "before:absolute before:content=[''] before:h-[2px] before:bottom-[-2px] before:left-0 before:right-0 before:bg-black"
    : "text-gray-400";
  const likedVideosClasses = !isShowVideos
    ? "before:absolute before:content=[''] before:h-[2px] before:bottom-[-2px] before:left-0 before:right-0 before:bg-black"
    : "text-gray-400";

  return (
    <div className="pt-2 w-full">
      <div className="flex gap-6 md:gap-5 mb-4 bg-white w-full">
        <div className="relative w-[120px] h-[120px]">
          <Image src={user.image} fill alt="User avatar" className="rounded-full object-cover" />
        </div>
        <div>
          <p className="flex gap-1 items-center text-xl font-bold text-primary lowercase">
            {user.username.replaceAll(" ", "")}
            <GoVerified className="text-blue-400" />
          </p>
          <div className="capitalize text-gray-400 text-xs md:text-xl">{user.username}</div>
        </div>
      </div>

      <div>
        <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
          <button
            className={`relative text-xl font-semibold cursor-pointer ${videosClasses}`}
            onClick={() => setIsShowVideos(true)}
          >
            Videos
          </button>
          <button
            className={`relative text-xl font-semibold cursor-pointer ${likedVideosClasses}`}
            onClick={() => setIsShowVideos(false)}
          >
            Liked
          </button>
        </div>
        {isShowVideos ? <Videos videos={myVideos} /> : <Videos videos={likedVideos} />}
      </div>
    </div>
  );
};
