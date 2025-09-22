/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { type FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import axios from "axios";

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const onSubmit = async (data: FieldValues) => {
    try {
      // Handle form submission logic here
      

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/message/send-message`,
        data
      );
      const result = await res.data;
      // console.log(result);

      reset()

      toast.success("Message sent successfully", { duration: 2000 });
      // reset()
    } catch (error) {
      toast.error("Failed to send message", { duration: 2000 });
    }
  };

  return (
    <div className="mb-5 lg:mb-10">
      <div className="flex items-center justify-center mb-4">
        <h1
          data-aos="zoom-in"
          className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block mb-5 lg:mb-10"
        >
          Contact <span className="text-[#64B5F6]">Me</span>
        </h1>
      </div>

      <div className="mx-auto text-white px-5 flex justify-center items-center">
        <div className="flex flex-col gap-10 md:flex-row w-full items-center h-auto justify-center">
          {/* Contact Information */}
          <div className="flex gap-7 flex-col w-full" data-aos="zoom-in">
            <div
              className="flex gap-2 items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <IoLogoWhatsapp className="text-xl text-[#64B5F6]" />
              <p>+8801747498166</p>
            </div>

            <div
              className="flex gap-2 items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaEnvelope className="text-xl text-[#64B5F6]" />
              <p>humayunkabir506034@gmail.com</p>
            </div>


            <div
              className="flex gap-2 items-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaLocationDot className="text-xl text-[#64B5F6]" />
               <p>Warless Gate, Mohakhali, Dhaka-1212</p>
            </div>

            <div
              className="flex gap-4 items-center mt-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              {/* Social Icons */}
              <SocialIcons />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full" data-aos="zoom-in">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-5"
            >
              <input
                data-aos="zoom-in"
                data-aos-delay="100"
                className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                required
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />

              <input
                data-aos="zoom-in"
                data-aos-delay="200"
                className="block px-3 py-2 w-full  col-span-2 lg:col-span-1 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                required
                type="number"
                {...register("phone", { required: true })}
                placeholder="Phone Number"
              />

              <select
                data-aos="zoom-in"
                data-aos-delay="300"
                className="block px-3 py-2 w-full col-span-2 lg:col-span-1  rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                defaultValue={""}
                {...register("subject", { required: true })}
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Bug Fixing">Bug Fixing</option>
                <option value="Consultation">Consultation</option>
              </select>

              <input
                data-aos="zoom-in"
                data-aos-delay="400"
                className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                required
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />

              <textarea
                data-aos="zoom-in"
                data-aos-delay="500"
                className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                required
                {...register("message", { required: true })}
                placeholder="Your Message"
              />

              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                className="flex col-span-2 justify-center items-center mt-2"
              >
                <button
                  type="submit"
                  className="px-8 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
