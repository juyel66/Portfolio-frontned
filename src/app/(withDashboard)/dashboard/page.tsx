import { getAllBlog } from "@/app/utils/actions/blogManagement";
import { getAllProject } from "@/app/utils/actions/projectManagement";
import { authOptions } from "@/app/utils/authOptions";
import SingOutButton from "@/components/shared/SingOutButton";
import { TBlog, TProject } from "@/types/types";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
 
};
export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const salesData = [60, 80, 45, 90, 75]; // চার্টের উচ্চতা

  const blogs = await getAllBlog();
  const matchBlog = blogs?.data?.filter(
    (blog: TBlog) => blog?.author?.email === user?.email
  );

  const projects = await getAllProject()
  const matchProject = projects?.data?.filter(
    (project: TProject) => project?.author?.email === user?.email
  );



  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Left Side - Profile Card */}
        <div className="w-full lg:w-1/4 min-h-full ">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg  min-h-full ">
            <div className="flex flex-col items-center">
              <Image
                src={user?.image as string || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}
                alt="profile image"
                height={120}
                width={120}
                className="rounded-full"
              />

              <h2 className="text-white text-xl font-bold mb-2">
                {user?.name}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{user?.email}</p>

              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                  <span className="text-gray-300 text-sm">Your Blogs</span>
                  <span className="text-white font-bold">
                    {matchBlog.length}
                  </span>
                </div>
                <div className=" flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                  <span className="text-gray-300 text-sm">Your Projects</span>
                  <span className="text-white font-bold">{matchProject.length}</span>
                </div>

                <div className="flex  justify-between items-center gap-5">
                  <Link href={"/"} className="w-full flex-1">
                    <div className=" bg-gray-700 px-4 py-2 rounded-lg cursor-pointer ">
                      <span className="text-gray-300 text-sm">Home</span>
                    </div>
                  </Link>
                  <div className="flex-1">
                    <SingOutButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="w-full lg:w-3/4 space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-2">
                Total Blogs
              </h3>
              <p className={`text-2xl font-bold text-green-500`}>
                {blogs?.data?.length}
              </p>
              <p className="text-gray-400 text-sm"></p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-2">
                Total Projects
              </h3>
              <p className={`text-2xl font-bold text-green-500`}>
                {projects?.data?.length}
              </p>
              <p className="text-gray-400 text-sm"></p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-4">
              Monthly Performance
            </h3>
            <div className="h-64 w-full bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="bg-bg-gray-700 p-4 rounded-lg h-full w-full">
                {/* সিম্পল বার চার্ট */}
                <div className="h-full bg-gray-900  rounded-lg p-4">
                  <div className="flex h-full items-end justify-between">
                    {salesData.map((height, index) => (
                      <div
                        key={index}
                        className="w-12 bg-gray-700 mx-1 rounded-t-lg"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities Table */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-4">
              Recent Activities
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {matchBlog.map((row: TBlog) => (
                    <tr key={row?._id} className="cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        <div className="w-24 rounded-xl overflow-hidden">
                          <Image
                            src={row.image}
                            alt="Avatar"
                            width={96} // 24 * 4 = 96px
                            height={96}
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {row?.title}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm flex items-center text-green-300`}
                      >

                        Actived
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
