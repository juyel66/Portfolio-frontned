"use client";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MyProjects2 = () => {
  useEffect(() => {
    AOS.init();
  }, []); //
  return (
    <div>
      <div className="flex items-center justify-center  ">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block lg:pt-16 pt-8">
          My <span className="text-[#64B5F6]">Projects</span>
        </h1>
      </div>
      <div className="container mx-auto px-5 py-5">
        <div className="pt-10 flex gap-20 text-white flex-col">
          <div className="flex gap-12 flex-col lg:flex-row">
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="w-full lg:w-[30%] overflow-hidden rounded-xl flex items-center "
            >
              <Image
                className="object-cover rounded-xl hover:scale-105 duration-200 py-4"
                src="http://res.cloudinary.com/dn7oeugls/image/upload/v1739176886/z5mgsjali5vageynrdq1.png"
                alt="Medcamp Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="w-full lg:w-[70%]"
            >
              <div className="flex items-center gap-4 flex-col md:flex-row">
                <div className="flex items-center gap-5">
                  <h2 className="text-2xl text-center md:text-left font-semibold">
                    BookBazaar
                  </h2>
                  <p className="text-lg text-center md:text-left font-medium text-nowrap pt-1">
                    (E-Commerce Website)
                  </p>
                </div>
                <div className="flex text-blue-200 lg:gap-7 gap-4 lg:ml-7">
                  <Link
                    href="https://bookbazzar-online-ph-a4.vercel.app"
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Live Site{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                  <Link
                    href="https://github.com/HumayunKabirSobuj/b4a4-BookBazaar-client"
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Client Code{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                  <Link
                    href="https://github.com/HumayunKabirSobuj/b4a4-BookBazaar-server"
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Server Code{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
              <p className="text-justify pt-5">
                A feature-rich Book Shop Application designed for seamless
                browsing, purchasing, and managing books online. Users can
                register, log in securely (JWT authentication), and explore
                books with advanced search and filtering options. The platform
                includes a dynamic dashboard where users can view their orders,
                manage profiles, and securely update passwords. Admins have full
                control over user management, product inventory, and order
                processing (CRUD operations). The SSLCommerz payment gateway
                ensures a smooth and secure checkout experience. Built with a
                modern UI/UX, the platform is fully responsive, optimized, and
                user-friendly, providing real-time feedback through error
                handling, loaders, and toast notifications.
              </p>
              <p className="pt-2 font-semibold">
                Technology Used : React.js, Next.js, Tailwind CSS, Node.js,
                Express.js, MongoDB, Mongoose, JWT, Bcrypt.js, SSLCommerz .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects2;
