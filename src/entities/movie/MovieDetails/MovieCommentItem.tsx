import { Comment } from "../types/types";

type Props = {
  comment: Comment;
};
export function MovieCommentItem({ comment }: Props) {
  return (
    <li
      className="bg-neutral-800 p-4 rounded-lg shadow"
      key={comment.id}>
      <p className="text-sm text-gray-400 mb-1">{comment.name}</p>
      <p className="text-white text-sm">{comment.text}</p>
    </li>
  );
}
