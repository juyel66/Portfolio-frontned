"use client";
import { addBlog } from "@/app/utils/actions/blogManagement";
import Loader from "@/components/shared/Loader";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
interface BlogFromData {
  title: string;
  short_description: string;
  long_description: string;
  image: FileList;
}



export default function AddBlog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFromData>();
  const [loading, setLoading] = useState(false);

  const { data } = useSession();
  // console.log("data=>",data);
  const user = data?.user;
  // console.log(user);

  const onSubmit: SubmitHandler<BlogFromData> = async (data) => {
    // console.log(data);

    const { short_description, long_description, title } = data;

    try {
      setLoading(true);
      const image = data.image[0]; // Ensure this is correct
      const newFormData = new FormData();
      newFormData.append("file", image); // Add the image file
      newFormData.append("upload_preset", "humayunkabir"); // Your upload preset
      newFormData.append("cloud_name", "dn7oeugls"); // Not necessary for the request

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dn7oeugls/image/upload",
        newFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log("Image uploade =>",response);
      const imageUrl = response.data.secure_url;

      // console.log(imageUrl);

      const blogData = {
        title,
        short_description,
        long_description,
        image: imageUrl,
        author: {
          ...user,
        },
      };

      // console.log(blogData);
      const res = await addBlog(blogData);
      // console.log(res);
      if (res?.success) {
        toast.success(res.message, {
          // id: toastId,
          duration: 2000,
        });
      }

      reset();

      setLoading(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col lg:flex-row p-4 gap-4 h-screen">
        {/* Left Side - Profile Card */}

        {/* Right Side - Content */}
        <div className="w-full mx-auto space-y-6 h-screen bg-gray-800 rounded-3xl">
          {/* Add Blog Post Section */}
          <div className=" rounded-lg shadow-lg h-screen ">
            <h3 className="text-white text-lg font-semibold mb-4 lg:px-8 px-3 pt-4">
              Add New Blog Post
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="min-h-screen  bg-gray-800 lg:px-8 px-3 rounded-3xl"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 ">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter blog title"
                    {...register("title", { required: true })}
                  />
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Short Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your blog description..."
                    {...register("short_description", {
                      required: "Blog description is required",
                      maxLength: {
                        value: 720,
                        message:
                          "Short Description cannot exceed 720 characters",
                      },
                    })}
                  />
                  {errors.short_description && (
                    <p className="text-red-500 text-sm">
                      {errors.short_description.message}
                    </p>
                  )}
                </div>
                {/* Long Description */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Long Description
                  </label>
                  {/* Long Description */}
                  <textarea
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-40 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your blog long description..."
                    {...register("long_description", {
                      required: "Long description is required",
                      maxLength: {
                        value: 2200,
                        message:
                          "Long description cannot exceed 2200 characters",
                      },
                    })}
                  />
                  {errors.long_description && (
                    <p className="text-red-500 text-sm">
                      {errors.long_description.message}
                    </p>
                  )}
                </div>

                {/* Image */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Image
                  </label>
                  {loading ? (
                    <p>Uploading, please wait...</p>
                  ) : (
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      accept="image/*"
                      className={`w-full px-4 py-2 text-white rounded-lg  border border-gray-700 focus:ring-blue-500 focus:outline-none focus:ring-2`}
                    />
                  )}
                </div>
              </div>
              <div className="mt-8 lg:mb-4 mb-2 text-center ">
                <button
                  type="submit"
                  className="lg:w-1/3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2  rounded-lg transition-colors"
                >
                  Publish Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
