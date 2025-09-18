import { getAllBlog } from "@/app/utils/actions/blogManagement";
import BlogCard from "@/components/shared/BlogCard";

export type TBlog = {
  _id: string;
  image: string;
  title: string;
  content: string;
};

const BlogPage = async () => {
  const data = await getAllBlog();
  const blogData = data?.data;

  return (
    <div className="sm:px-16 px-6 pt-5 max-w-7xl mx-auto relative z-0">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-white relative border-b-2 border-[#64B5F6] inline-block">
          All{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Blogs
          </span>
        
        </h1>
      </div>

      {/* Description */}
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  animate-fade-in delay-200"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData?.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
