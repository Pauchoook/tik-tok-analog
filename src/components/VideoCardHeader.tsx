import Link from "next/link";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { FC } from "react";

interface VideoCardHeaderProps {
  id: string;
  image: string;
  username: string;
}

const VideoCardHeader: FC<VideoCardHeaderProps> = ({ id, image, username }) => {
  return (
    <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
      <div className="md:w-16 md:h-16 w-10 h-10">
        <Link href={`user/${id}`}>
          <Image
            src={image}
            alt="profile photo"
            width={62}
            height={62}
            className="rounded-full w-16 h-16 object-cover"
          />
        </Link>
      </div>
      <Link href="/">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 md:text-md font-bold text-primary">
            {username}
            <GoVerified className="text-blue-400 text-md" />
          </p>
          <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
            {username}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCardHeader;
