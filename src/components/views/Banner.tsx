"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import Link from "next/link";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full  bg-gray-900 py-10">
        <div className="container mx-auto px-4 md:px-8 text-white flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content - Text */}
          <div className="w-full flex-1 space-y-6">
            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            >
              It&apos;s Me
            </h3>

            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              MD. HUMAYUN KABIR SOBUJ
            </h1>

            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl md:text-2xl lg:text-3xl font-semibold"
            >
              I&apos;m a{" "}
              <span className="text-blue-300">
                <Typewriter
                  words={[
                    "Full-Stack Developer_",
                    "Node Js Developer_",
                    "MERN Stack Developer_",
                  ]}
                  loop={true}
                  cursorStyle="_"
                  cursorColor="#2196F3"
                />
              </span>
            </h3>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-base md:text-lg font-light leading-relaxed"
            >
              I am a MERN Stack Web Developer skilled in Tailwind CSS,
              JavaScript, TypeScript, React.js, and Next.js. I have experience
              with Firebase, Node.js, Express.js, MongoDB, and Mongoose. I also
              use Redux, Ant Design, and ShadCN to build modern, responsive web
              apps. On the backend, I work confidently with both NoSQL (MongoDB,
              Mongoose) and SQL (PostgreSQL, Prisma, SQL) databases.
            </p>

            <div data-aos="fade-up" data-aos-duration="1000" className="pt-4">
              <SocialIcons />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="pt-4">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Link href={"/contact"}>Hire Me</Link>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full  flex-1 justify-center items-center"
          >
            <div className="text-center">
              <div className="h-72 w-72 mx-auto mb-6 relative overflow-hidden rounded-full border-4 border-blue-500/30">
                <Image
                  src="/profile.jpg"
                  alt="Humayun Kabir Sobuj"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
