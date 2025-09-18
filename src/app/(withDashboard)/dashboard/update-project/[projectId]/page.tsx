import { getAllProject } from "@/app/utils/actions/projectManagement";
import ProjectUpdateFrom from "@/components/shared/ProjectUpdateForm";
import { TProject } from "@/types/types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Update Project",
  
};

interface IProps {
  params: Promise<{
    projectId: string;
  }>;
}
const UpdateProject = async ({ params }: IProps) => {
    
  // console.log(await params);

  const projects = await getAllProject();
  // console.log(blogs?.data);

  const projectId= (await params).projectId
  const matchProject = projects?.data?.find(
    (project: TProject) => project._id === projectId
  );

//   console.log(matchProject);
  return (
    <div>
      <ProjectUpdateFrom projectData={matchProject} />
    </div>
  );
};

export default UpdateProject;
