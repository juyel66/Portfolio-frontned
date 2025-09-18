import { getAllBlog } from "@/app/utils/actions/blogManagement";
import { authOptions } from "@/app/utils/authOptions";
import DeleteBlogButton from "@/components/shared/DeleteBlogButton";
import { TBlog } from "@/types/types";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Manage Blog",
  
};

const ManageBlogPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user?.email) {
    // console.log("No user found");
    return [];
  }

  const blogs = await getAllBlog();
  const matchBlog = blogs?.data?.filter(
    (blog: TBlog) => blog?.author?.email === user.email
  );

  //   console.log(matchBlog);

  return (
    <div>
      {/* Recent Activities Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-h-screen">
        <h3 className="text-white text-2xl font-semibold mb-4 text-center">
          Manage Your Blogs
        </h3>
        <div className="overflow-x-auto flex justify-center">
          <table className="lg:w-5/6 w-full bg-gray-700 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Action
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
                    className={`px-6 py-4 whitespace-nowrap text-sm flex items-center`}
                  >
                    <Link
                      href={`/dashboard/update-blog/${row?._id}`}
                      className="bg-gray-700 text-white px-4 py-2 rounded-md"
                    >
                      UPDATE
                    </Link>
                    <DeleteBlogButton id={row?._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogPage;
