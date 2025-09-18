import { getAllProject } from "@/app/utils/actions/projectManagement"
import type { TProject } from "@/types/types"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { ImCross } from "react-icons/im"

export const metadata: Metadata = {
  title: "Project Details",
}

interface IProps {
  params: Promise<{
    projectId: string
  }>
}

const ProjectDetailsPage = async ({ params }: IProps) => {
  const projects = await getAllProject()
  const projectId = (await params).projectId

  const matchProjects: TProject | undefined = projects?.data.find((project: TProject) => project._id === projectId)

  if (!matchProjects) {
    return <div className="flex items-center justify-center h-screen text-white text-xl">Project not found!</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 shadow-lg text-white rounded-lg overflow-hidden max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-900 p-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl text-center font-bold">
              Project <span className="text-blue-400">Details</span>
            </h1>
          </div>
          <Link href="/projects">
            <button className="p-2 rounded-full border border-gray-700 hover:bg-gray-700" aria-label="Close">
              <ImCross className="text-sm" />
            </button>
          </Link>
        </div>

        {/* Project Image */}
        <div className="w-full h-[300px] relative">
          {matchProjects.image ? (
            <Image
              className="object-cover"
              src={matchProjects.image || "/placeholder.svg"}
              alt="Project Image"
              fill
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">No Image Available</div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Project Title */}
          <h2 className="text-2xl font-bold mb-4">{matchProjects.title}</h2>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-6 pb-4 border-b border-gray-700">
            <Link
              href={matchProjects?.live_link}
              target="_blank"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Live Site
              <FaExternalLinkSquareAlt className="ml-1" />
            </Link>

            <Link
              href={matchProjects.client_link}
              target="_blank"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Client Code
              <FaExternalLinkSquareAlt className="ml-1" />
            </Link>

            <Link
              href={matchProjects.server_link}
              target="_blank"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Server Code
              <FaExternalLinkSquareAlt className="ml-1" />
            </Link>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <p className="text-gray-300">{matchProjects.long_description || matchProjects.short_description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <p className="font-semibold text-white">
              Technology Used: <span className="font-normal text-gray-300">{matchProjects?.technology}</span>
            </p>
          </div>

        
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
