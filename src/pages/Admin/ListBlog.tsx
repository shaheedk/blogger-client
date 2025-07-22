import { useEffect, useState } from "react"
import type{ BlogTypes } from "../../types/BlogTypes"
import BlogTableItem from "../../components/Admin/BlogTableItem"
import { useAppContext } from "../../context/AppContext"
import toast from "react-hot-toast"


const ListBlog = () => {

  const [blogs,setBlogs]=useState<BlogTypes[]>([])
  const {axios}=useAppContext()

  const fetchBlogs=async()=>{
try {
  const {data}=await axios.get('/api/admin/blogs')
  if(data.success){
    setBlogs(data.blogs)
  }else{
    toast.error(data.message)
  }
      
} catch (error) {
  if(error instanceof Error){
    toast.error(error.message)

  }
}
  }

  useEffect(()=>{
fetchBlogs()
  },[])

  return (
    <div className="felx-1 h-screen w-full pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50 overflow-scroll">
      <h1>All Blogs</h1>
      <div className="relative max-w-4xl mb-4 overflow-x-auto shadow rounded-lg scrollbar-hide  bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-2 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-2">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-2 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-2  max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody >
              {blogs.map((blog:BlogTypes, index:number) => {
                return (
                  <BlogTableItem
                    key={index}
                    blog={blog}
                    fetchBlogs={fetchBlogs}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ListBlog
