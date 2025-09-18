"use client";

import Loader from "@/app/(withDashboard)/loading";
import { TProject } from "@/types/types";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProjectFromData {
  title: string;
  short_description: string;
  long_description: string;
  live_link: string;
  client_link: string;
  server_link: string;
}

export default function ProjectUpdateFrom(
  projectData: Record<string, unknown>
) {
  const project = projectData?.projectData as TProject;

  const { register, handleSubmit ,formState: { errors }} = useForm<ProjectFromData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ProjectFromData> = async (data) => {
    // console.log(data);

    const {
      short_description,
      long_description,
      title,
      live_link,
      client_link,
      server_link,
    } = data;

    try {
      setLoading(true);

      const projectData = {
        projectId: project._id,
        projectInfo: {
          title,
          short_description,
          long_description,
          live_link,
          client_link,
          server_link,
        },
      };

      // console.log(blogData);

      await axios.put(
        "https://blog-and-portfilio-backend.vercel.app/api/projects/update-project",
        projectData
      );
      //   console.log(res.data);

      setLoading(false);
      toast.success("Project Updated Successfully ..", { duration: 2000 });
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
        <div className="w-full mx-auto space-y-6  bg-gray-800 rounded-3xl">
          {/* Add Blog Post Section */}
          <div className=" rounded-lg shadow-lg  h-screen">
            <h3 className="text-white text-lg font-semibold mb-4 lg:px-8 px-3 pt-4">
              Update Your Project
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  bg-gray-800 lg:px-8 px-3 rounded-3xl"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 ">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full  text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter blog title"
                    defaultValue={project?.title}
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 ">
                      Live Link
                    </label>
                    <input
                      type="url"
                      className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter project live link"
                      defaultValue={project?.live_link}
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
                      defaultValue={project?.client_link}
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
                      defaultValue={project?.server_link}
                      {...register("server_link", { required: true })}
                    />
                  </div>
                </div>

                 {/* Short Description */}
                 <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Short Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your blog description..."
                    defaultValue={project?.short_description}
                    {...register("short_description", {
                      required: "Blog description is required",
                      maxLength: {
                        value: 720,
                        message:
                          "Short Description cannot exceed 720 characters",
                      },
                    })}
                  ></textarea>
                  {errors.short_description && (
                    <p className="text-red-500 text-sm">
                      {errors.short_description.message}
                    </p>
                  )}
                </div>




                {/* Long */}

                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Long Description
                  </label>
                  {/* Long Description */}
                  <textarea
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-40 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your blog long description..."
                    defaultValue={project?.long_description}
                    {...register("long_description", {
                      required: "Long description is required",
                      maxLength: {
                        value: 2200,
                        message:
                          "Long description cannot exceed 2200 characters",
                      },
                    })}
                  ></textarea>
                  {errors.long_description && (
                    <p className="text-red-500 text-sm">
                      {errors.long_description.message}
                    </p>
                  )}
                </div>
                
              </div>
              <div className="mt-8  mb-2 text-center ">
                <button
                  type="submit"
                  className="lg:w-1/3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2  rounded-lg transition-colors"
                >
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
