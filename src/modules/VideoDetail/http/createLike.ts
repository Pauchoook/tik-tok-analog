import { IVideo, ILike } from "@/utils/types";
import axios from "axios";

interface ILikeProps {
  userId: string;
  postId: string;
  like: boolean;
}

export const createLike = async ({ userId, postId, like }: ILikeProps) => {
  const { data } = await axios.put<IVideo>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/like`, { userId, postId, like });
  return data;
};
