import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import type { Comment } from "../../types/AdminComment";

type Props = {
  comment: Comment;
  fetchComments: () => void;
  index: number;
};

const CommentTableItem = ({ comment, fetchComments }: Props) => {
  const { blog, createdAt, _id } = comment;

  // const blogDate = new Date(createdAt);

const {axios}=useAppContext()

 const approveComment=async()=>{
  try {
    const {data}=await axios.post('/api/admin/approve-comment',{id:_id})
    if(data.success){
      toast.success(data.message)
      fetchComments()
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    if(error instanceof Error){
            toast.error(error.message)
          }
  }
 }

const deleteComment=async()=>{
  try {
    const confirm=window.confirm('Are you sure want to delete this comment?');
    if(!confirm) return
    const {data}=await axios.post('/api/admin/delete-comment',{id:_id})
    if(data.success){
      toast.success(data.message)
      fetchComments()
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    if(error instanceof Error){
            toast.error(error.message)
          }
  }
 }
  return (
    <tr className="border-b border-gray-300">
      <td className="px-4 py-4 text-sm text-gray-700">
        <p>
          <span className="font-semibold text-gray-600">Blog:</span>{" "}
          {blog.title}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Name:</span>{" "}
          {comment.name}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Comment:</span>{" "}
          {comment.content}
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
            onClick={approveComment}
              src={assets.tick_icon}
              alt="Approve"
              className="w-5 hover:scale-110 transition-transform cursor-pointer"
            />
          )}

          <img
          onClick={deleteComment}
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
