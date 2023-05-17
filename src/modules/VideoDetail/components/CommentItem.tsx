import { IComment } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CommentItemProps {
  comment: IComment;
}

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <Link
    href={`/user/${comment.postedBy._id}`}
    className="flex items-start gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded"
    >
      <Image
        src={comment.postedBy.image}
        alt="User avatar"
        width={34}
        height={34}
        className="rounded-full object-cover"
      />
      <div>
        <p className="gap-2 md:text-md font-bold text-primary">{comment.postedBy.username}</p>
        <p className="text-gray-500 max-w-[80%]">{comment.comment}</p>
      </div>
    </Link>
  );
};
