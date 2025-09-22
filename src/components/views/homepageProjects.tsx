import { getAllProject } from "@/app/utils/actions/projectManagement";
import type { TProject } from "@/types/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "JUYEL | Projects",
};

const HomePageProjects = async () => {
  const projects = await getAllProject();
//   console.log({ projects });

  const threeProjects = projects?.data?.slice(0, 3);
//   console.log({threeProjects});

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with gradient underline */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-white relative border-b-2 border-[#64B5F6] inline-block">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
      </div>

      {/* Projects Grid - Single implementation for all screen sizes */}
      <div className="space-y-10 md:space-y-16 mb-10">
        {threeProjects?.map((project: TProject) => (
          <div
            key={project._id}
            className="group bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px]"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-5">
              {/* Project Image */}
              <div className="w-full lg:w-[35%] overflow-hidden rounded-lg">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    src={project?.image || "/placeholder.svg"}
                    alt={project?.title || "Project Image"}
                    height={800}
                    width={500}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-[65%] flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project?.title}
                  </h2>

                  {/* Project Links - Desktop */}
                  <div className="hidden md:flex flex-wrap gap-4 mb-4">
                    <ProjectLink
                      href={`/projects/${project?._id}`}
                      label="Details"
                    />
                    <ProjectLink
                      href={project?.live_link}
                      label="Live Site"
                      external
                    />
                    <ProjectLink
                      href={project.client_link}
                      label="Client Code"
                      external
                    />
                    <ProjectLink
                      href={project.server_link}
                      label="Server Code"
                      external
                    />
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project?.short_description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h3 className="text-white font-semibold mb-2">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project?.technology.split(",").map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links - Mobile */}
                <div className="flex md:hidden justify-between flex-wrap gap-y-2 mt-4 border-t border-gray-700 pt-4">
                  <ProjectLink
                    href={`/projects/${project?._id}`}
                    label="Details"
                    compact
                  />
                  <ProjectLink
                    href={project?.live_link}
                    label="Live"
                    external
                    compact
                  />
                  <ProjectLink
                    href={project.client_link}
                    label="Client"
                    external
                    compact
                  />
                  <ProjectLink
                    href={project.server_link}
                    label="Server"
                    external
                    compact
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mb-10">
        <Link href={"/projects"} className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          Show More
        </Link>
      </div>
    </div>
  );
};

// Reusable link component
const ProjectLink = ({
  href,
  label,
  external = false,
  compact = false,
}: {
  href: string;
  label: string;
  external?: boolean;
  compact?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className={`
        inline-flex items-center gap-1.5
        ${compact ? "text-sm" : "text-base"}
        text-blue-300 hover:text-blue-400 transition-colors duration-200
        ${compact ? "px-2 py-1" : "px-3 py-1.5"} 
        rounded-md hover:bg-blue-900/20
      `}
    >
      {label}
      <FaExternalLinkSquareAlt className={compact ? "text-xs" : "text-sm"} />
    </Link>
  );
};

export default HomePageProjects;
