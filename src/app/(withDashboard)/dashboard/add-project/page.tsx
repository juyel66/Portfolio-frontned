"use client";
import { addProject } from "@/app/utils/actions/projectManagement";
import Loader from "@/components/shared/Loader";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
interface projectFromData {
  title: string;
  live_link: string;
  client_link: string;
  server_link: string;
  short_description: string;
  long_description: string;
  technology:string;
  image: FileList;
}

export default function AddBlog() {
  const { register, handleSubmit, reset ,formState: { errors },} = useForm<projectFromData>();
  const [loading, setLoading] = useState(false);

  const { data } = useSession();
  // console.log("data=>",data);
  const user = data?.user;
  // console.log(user);

  const onSubmit: SubmitHandler<projectFromData> = async (data) => {
    // console.log(data);

    const {
      title,
      live_link,
      client_link,
      server_link,
      short_description,
      long_description,
      technology
    } = data;

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

      const projectData = {
        title,
        live_link,
        client_link,
        server_link,
        short_description,
        long_description,
        technology,
        image: imageUrl,
        author: {
          ...user,
        },
      };

      // console.log(projectData);

      // console.log(blogData);
      const res = await addProject(projectData);
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
    return (
      <Loader/>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col lg:flex-row p-4 gap-4 min-h-screen">
        {/* Left Side - Profile Card */}

        {/* Right Side - Content */}
        <div className="w-full mx-auto space-y-6 min-h-screen bg-gray-800 rounded-3xl  ">
          {/* Add Blog Post Section */}
          <div className=" rounded-lg shadow-lg min-h-screen  ">
            <h3 className="text-white text-lg font-semibold mb-4 lg:px-8 px-3 pt-4">
              Add New Project
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
                    placeholder="Enter project title"
                    {...register("title", { required: true })}
                  />
                </div>
                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 ">
                      Live Link
                    </label>
                    <input
                      type="url"
                      className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter project live link"
                      {...register("live_link", { required: true })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 ">
                      Frontend Code Link
                    </label>
                    <input
                      type="url"
                      className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter project live link"
                      {...register("client_link", { required: true })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 ">
                      Backend Code Link
                    </label>
                    <input
                      type="url"
                      className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter project live link"
                      {...register("server_link", { required: true })}
                    />
                  </div>
                </div>
                {/*  */}
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
                <div>
                  <label className="block text-gray-300 text-sm mb-2 ">
                    Technology
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter project title"
                    {...register("technology", { required: true })}
                  />
                </div>
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
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
