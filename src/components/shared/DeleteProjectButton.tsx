"use client";
import axios from "axios";
import { toast } from "sonner";

const DeleteProjectButton = (id: { id: string }) => {
  const handleDeleteButton = async (blogId: { id: string }) => {
    // console.log(blogId);
    try {
      const res = await axios.delete('https://blog-and-portfilio-backend.vercel.app/api/projects/delete-project', {
        data: blogId, // Pass the blogId as data in the request
      });
      // console.log(res.data);
      toast.success(res.data.message,{duration:2000})
      // Handle the response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // console.error("Error deleting the project:", error);
    }
  };

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

export default DeleteProjectButton;
