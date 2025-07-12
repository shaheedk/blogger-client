import { assets } from "../../assets/assets";
import type { BlogTableItemProps } from "../../types/BlogTypes";


const BlogTableItem = ({blog,fetchBlogs,index}:BlogTableItemProps) => {
    const {title, createdAt}=blog;
    const BlogData=new Date(createdAt)
  return (
    <tr className="border-y border-gray-300">
        <th className="px-2 py-4">{index}</th>
        <td className="px-2 py-4">{title}</td>
        <td className="px-2 py-4 max-sm:hidden">{BlogData.toDateString()}</td>
        <td className="px-2 py-4 max-sm:hidden">
            <p className={`${blog.isPublished? 'text-gray-600':'text-orange-700'}`}>
           {blog.isPublished? 'Published':'Unpublished'} </p>
           </td>
      <td className="px-2 py-4 flex text-xs gap-3">
        <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">  {blog.isPublished? 'Unpublish':'Publish'} </button>
        <img src={assets.cross_icon} alt="" className="w-8 hover:scale-110 translate-all cursor-pointer "/>
      </td>
    </tr>
  )
}

export default BlogTableItem
