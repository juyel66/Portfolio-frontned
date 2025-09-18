"use client";

import { signOut } from "next-auth/react";

const SingOutButton = () => {
  const handleSignOut = () => {
    signOut(); 
  };

  return (
    <div>
      <button className="w-full" onClick={handleSignOut}>
        <div className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg cursor-pointer w-full">
          <span className="text-gray-300 text-sm">Logout</span>
        </div>
      </button>
    </div>
  );
};

export default SingOutButton;
