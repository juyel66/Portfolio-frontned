import Banner from "@/components/views/Banner";
import ContactMe from "@/components/views/ContactMe";
import MyEducation from "@/components/views/MyEducation";
import MySkills from "@/components/views/MySkills";
import HomePageProjects from "@/components/views/homepageProjects";

export default async function Home() {
  return (
    <div className="container mx-auto">
     <Banner />
      {/* <AboutMe /> */}
      <MySkills />
      <MyEducation />
      <HomePageProjects/>

      <ContactMe />
    </div>
  );
}
