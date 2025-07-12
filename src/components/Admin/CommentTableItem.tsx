
import { assets } from "../../assets/assets";
import type { Comment } from "../../types/AdminComment";

type Props = {
  comment: Comment;
  fetchComments: () => void;
  index: number;
};

const CommentTableItem = ({ comment, fetchComments }: Props) => {
  const { blog, createdAt, _id } = comment;


  const blogDate=new Date(createdAt)
  return (
    <tr className="border-b border-gray-300">
  <td className="px-4 py-4 text-sm text-gray-700">
    <p>
      <span className="font-semibold text-gray-600">Blog:</span> {blog.title}
    </p>
    <p>
      <span className="font-semibold text-gray-600">Name:</span> {comment.name}
    </p>
    <p>
      <span className="font-semibold text-gray-600">Comment:</span> {comment.content}
    </p>
  </td>

  <td className="px-6 py-4 text-sm text-gray-700 max-sm:hidden">
    {new Date(createdAt).toLocaleDateString()}
  </td>

  <td className="px-6 py-4">
    <div className="flex items-center gap-4">
      {comment.isApproved ? (
        <p className="text-xs border border-green-600 bg-green-100 text-green-700 rounded-full px-3 py-1">
          Approved
        </p>
      ) : (
        <img
          src={assets.tick_icon}
          alt="Approve"
          className="w-5 hover:scale-110 transition-transform cursor-pointer"
        />
      )}

      <img
        src={assets.bin_icon}
        alt="Delete"
        className="w-5 hover:scale-110 transition-transform cursor-pointer"
      />
    </div>
  </td>
</tr>

  );
};

export default CommentTableItem;
