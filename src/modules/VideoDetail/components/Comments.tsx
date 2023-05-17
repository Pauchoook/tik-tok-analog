import { IComment } from "@/utils/types";
import { BiCommentX } from "react-icons/bi";
import { FC } from "react";
import { CommentItem } from "./CommentItem";

interface CommentsProps {
  comments: IComment[];
}

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="my-2 border-t-2 border-gray-200 py-4 px-10 bg-[#f8f8f8] border-b-2 flex-1 overflow-scroll max-h-[300px]">
      <div>
        {comments.length ? (
          comments.map(comment => (
            <CommentItem key={comment._key} comment={comment} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <BiCommentX className="text-8xl" />
            <p className="text-md font-medium">There are no comments yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
