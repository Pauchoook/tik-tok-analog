import { IComment, IVideo } from "@/utils/types";
import axios from "axios";

interface ICreateCommentProps {
  userId: string;
  postId: string;
  comment: string;
}

export const createComment = async ({ userId, postId, comment }: ICreateCommentProps) => {
  const { data } = await axios.put<IVideo>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/post/${postId}`, { userId, comment });
  return data;
};
