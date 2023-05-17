import useUserStore from "@/store/userStore";
import { ILike } from "@/utils/types";
import { FC, useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

interface LikeButtonProps {
  handlerLike: () => void;
  handlerDislike: () => void;
  likes: ILike[] | null;
}

const LikeButton: FC<LikeButtonProps> = ({ handlerLike, handlerDislike, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useUserStore();

  const onLike = () => {
    handlerLike();
    setIsLiked(true);
  }

  const onDislike = () => {
    handlerDislike();
    setIsLiked(false);
  }

  useEffect(() => {
    const findLike = likes?.find(like => like._ref === user?._id);
    if (findLike) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, []);

  return (
    <div className="gap-6">
      <div className="mt-4 flex-col inline-flex items-center">
        {isLiked ? (
          <button className="bg-primary rounded-full p-2 md:p-4 text-[#f51997]" onClick={onDislike}>
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        ) : (
          <button className="bg-primary rounded-full p-2 md:p-4" onClick={onLike}>
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
