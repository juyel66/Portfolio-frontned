import { TMessage } from "@/types/types";
import axios from "axios";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
export const metadata: Metadata = {
  title: "My Messages",
  
};
const MyMessagePage = async () => {
  const res = await axios.get("https://blog-and-portfilio-backend.vercel.app/api/message");
  const allMessage = await res.data;
  //   console.log(allMessage);

  const session = await getServerSession();
  //   console.log(session);

  const myMessages = allMessage?.data.filter(
    (message: TMessage) => message?.email === session?.user?.email
  );

  //   console.log('My Messages =>', myMessages);

  return (
    <div>
      <div className="flex items-center justify-center pb-5 mb-10 pt-5">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block ">
          My <span className="text-[#64B5F6]">sending message</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:px-10 px-5">
        {myMessages?.map((message: TMessage) => (
          <div
            key={message?._id}
            className=" w-full  shadow-md overflow-hidden h-auto"
          >
          
            {/*  */}

            

            <div className="flex items-center space-x-3 bg-gray-800 text-white p-4 rounded-xl shadow-md w-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
      {/* Profile/Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt="profile"
            height={48}
            width={48}
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{message?.subject || "No Subject"}</h3>
        <p className="text-xs text-gray-300">{message?.message || "No Message Available"}</p>
      </div>
    </div>

            {/*  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMessagePage;
