import { blogCategories } from "../../assets/assets"

const BlogList = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
{
  blogCategories.map((item,index)=>(
<div className="relative" key={index}>
  <button>{item}</button>
</div>
  ))
}
      </div>
      <div>
        {/* ----- blog cards ---- */}

      </div>
    </div>
  )
}

export default BlogList
