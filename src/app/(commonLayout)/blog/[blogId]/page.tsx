/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft,} from 'lucide-react';

import { getAllBlog } from "@/app/utils/actions/blogManagement";

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const blogs = await getAllBlog();
  const blog = blogs?.data.find((blog: any) => blog._id === blogId);

  if (!blog) {
    return (
      <div className="flex h-[70vh] w-full flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold text-white">Blog not found</h1>
        <Link 
          href="/blog" 
          className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blogs
        </Link>
      </div>
    );
  }



  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link 
        href="/blog" 
        className="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all blogs</span>
      </Link>

      {/* Title and metadata */}
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
         
          
        
        </div>
      </div>

      {/* Featured image with gradient border */}
      <div className="relative mb-10 overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-1 shadow-xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-purple-500 prose-strong:text-white">
        <div className="text-white" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      
    </div>
  );
};

export default BlogDetailsPage;
