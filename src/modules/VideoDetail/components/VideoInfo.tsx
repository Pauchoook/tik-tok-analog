import { IComment, ILike, IVideo } from "@/utils/types";
import { FC, useState } from "react";
import VideoCardHeader from "@/components/VideoCardHeader";
import useUserStore from "@/store/userStore";
import CommentForm from "./CommentForm";
import { createLike } from "../http/createLike";
import LikeButton from "@/components/LikeButton";
import Comments from "./Comments";
import { createComment } from "../http/createComment";
import axios from "axios";

interface VideoInfoProps {
  video: IVideo;
}

const VideoInfo: FC<VideoInfoProps> = ({ video }) => {
  const [likes, setLikes] = useState<ILike[]>(video.likes);
  const [comments, setComments] = useState<IComment[]>(video.comments);
  const { user } = useUserStore();

  const handleLike = async (like: boolean) => {
    if (user) {
      const data: IVideo = await createLike({ userId: user._id, postId: video._id, like });
      setLikes(data.likes);
    }
  };

  const handleAddComment = async (postId: string, comment: string) => {
    await createComment({ userId: user!._id, postId, comment });
    const { data } = await axios.get<IVideo>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/post/${video._id}`);
    setComments(data.comments);
  };

  return (
    <div className="relative w-full lg:w-[700px]">
      <div className="lg:mt-0 mt-10 flex flex-col lg:h-screen">
        <VideoCardHeader id={video.postedBy._id} image={video.postedBy.image} username={video.postedBy.username} />
        <p className="px-10 text-md text-gray-600">{video.caption}</p>
        <div className="px-10">
          {user && (
            <LikeButton handlerLike={() => handleLike(true)} handlerDislike={() => handleLike(false)} likes={likes} />
          )}
        </div>
        <Comments comments={comments || []} />
        <CommentForm postId={video._id} addComment={handleAddComment} />
      </div>
    </div>
  );
};

export default VideoInfo;
