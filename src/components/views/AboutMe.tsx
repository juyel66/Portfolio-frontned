import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import profileImage from "../../../public/profile.jpg";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div>
      <div className="flex items-center justify-center pb-5 ">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
          About <span className="text-[#64B5F6]">Me</span>
        </h1>
      </div>

      <div className=" mx-auto px-5 lg:px-20 py-20 lg:min-h-screen flex flex-col justify-evenly items-center">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div
            // data-aos-duration="1000"
            // data-aos="fade-right"
            className="w-full lg:w-1/2"
          >
            <div className=" w-[100%] lg:w-[70%] pb-8 md:pb-0 rounded-xl bg-transparent flex justify-center items-center flex-col gap-5 text-white">
              <div className="">
                <div className=" h-72 w-72 pt-5  p-4">
                  <Image
                    className="rounded-full"
                    src={profileImage}
                    alt="Humayun"
                    height={600}
                    width={600}
                  />
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-center text-3xl">
                  MD. HUMAYUN KABIR SOBUJ
                </h1>
                <p className="font-medium text-center text-xl mt-4">
                  Web Developer
                </p>
              </div>
            </div>
          </div>
          <div
            // data-aos-duration="1000"
            // data-aos="fade-left"
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-semibold text-white">Who I Am?</h2>
            <p className="font-medium text-white mt-3 text-justify">
            I am a highly skilled Full-Stack Web Developer with expertise in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, and Next.js. I have a strong foundation in Firebase, Node.js, Express.js, MongoDB, Mongoose, Redux, Ant Design, and ShadCN. My experience includes developing dynamic, interactive, and responsive web applications, ensuring high performance and scalability. I excel at integrating modern technologies to deliver efficient, user-friendly solutions, making me a valuable asset in web development.
            </p>
            <div className="flex gap-3 items-center pt-10">
              <p className=" text-white font-semibold text-xl">
                Let&apos;s Connect -{" "}
              </p>
              <div>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
