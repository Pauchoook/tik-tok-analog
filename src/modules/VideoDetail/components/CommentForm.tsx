import { FC, useState, ChangeEvent, SyntheticEvent } from "react";

interface CommentFormProps {
  postId: string;
  addComment: (postId: string, comment: string) => void;
}

const CommentForm: FC<CommentFormProps> = ({ postId, addComment }) => {
  const [isPosting, setIsPosting] = useState(false);
  const [comment, setComment] = useState("");

  const handlerAddComment = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (comment) {
      setIsPosting(true);
      
      await addComment(postId, comment);
      
      setIsPosting(false);
      setComment("");
    }
  };

  return (
    <div className="px-2 pb-2">
      <form onSubmit={handlerAddComment} className="flex w-full">
        <input
          value={comment}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
          placeholder="Your comment"
          type="text"
          className="bg-primary px-6 py-4 text-md font-medium border-2 w-full border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
        />
        <button
          className="text-md text-white bg-[#f51997] px-3 ml-3 rounded-lg font-bold border-2 border-[#f51997] border-solid hover:bg-inherit hover:text-[#f51997]"
          onClick={() => {}}
        >
          {isPosting ? "Commenting..." : "Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
