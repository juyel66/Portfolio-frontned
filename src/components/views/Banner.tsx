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
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-lg md:text-xl lg:text-2xl font-light text-gray-300"
            >
              It&apos;s Me
            </h3>

            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              MD. JUYEL RANA
            </h1>

            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200"
            >
              I&apos;m a{" "}
              <span className="text-blue-400">
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
              className="text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              I am a MERN Stack Web Developer skilled in Tailwind CSS,
              JavaScript, TypeScript, React.js, and Next.js. I have experience
              with Firebase, Node.js, Express.js, MongoDB, and Mongoose. I also
              use Redux, Ant Design, and ShadCN to build modern, responsive web
              apps. On the backend, I work confidently with both NoSQL
              (MongoDB, Mongoose) and SQL (PostgreSQL, Prisma, SQL) databases.
            </p>

            {/* Social Icons */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="pt-4 text-white flex justify-center lg:justify-start"
            >
              <SocialIcons />
            </div>

            {/* Button */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="pt-6 flex justify-center lg:justify-start"
            >
              <Link href="/contact">
                <button className="px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative h-[320px] w-[320px] md:h-[400px] md:w-[400px] rounded-full border-4 border-blue-500/40 overflow-hidden shadow-xl shadow-blue-500/20">
              <Image
                src="/juyel.jpeg"
                alt="JUYEL"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
