"use client";
import { DeleteBlog } from "@/app/utils/actions/blogManagement";
import { toast } from "sonner";

const DeleteBlogButton = (id: { id: string }) => {
  const handleDeleteButton = async (blogId: { id: string }) => {
    // console.log(blogId);
    const res = await DeleteBlog(blogId);
    toast.success(res.message, { duration: 2000 });
  };
  // console.log(id);

  return (
    <div>
      <button
        onClick={() => handleDeleteButton(id)}
        className="bg-gray-700 text-white px-4 py-2 rounded-md ml-2"
      >
        DELETE
      </button>
    </div>
  );
};

export default DeleteBlogButton;
