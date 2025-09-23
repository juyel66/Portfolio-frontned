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
    // Added min-h-screen to make it take full viewport height
    // Adjusted padding for better full-screen feel
    // Removed max-w-7xl mx-auto to allow full width usage, adjust if you prefer content constrained
    <div className="sm:px-6 px-4 pt-10 min-h-screen relative z-20"> {/* Added min-h-screen and adjusted padding */}
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-white relative border-b-2 border-[#64B5F6] inline-block pb-2"> {/* Added pb-2 for padding under border */}
          All{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Blogs
          </span>
        </h1>
      </div>

      {/* Description - added content here as it was empty */}
      <div className="w-full flex justify-center mb-8"> {/* Added justify-center and mb-8 */}
        <p className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center animate-fade-in delay-200 px-4">
          Explore my thoughts, insights, and technical guides on web development, programming, and other interesting topics.
        </p>
      </div>

      {/* Blog Cards Grid */}
      {/* Centering the grid within the full width container, using gap-6 for more space */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:mb-10 mb-5"> {/* Changed gap and added justify-items-center */}
        {blogData?.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;