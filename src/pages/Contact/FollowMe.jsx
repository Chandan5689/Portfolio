import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function FollowMe() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Follow Me</h3>
      <div className="flex space-x-4">
        <a
          href="https://np.linkedin.com/" target="_blank"
          className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
        >
          <FaLinkedin/>
        </a>
        
        <a
          href="https://github.com/Chandan5689" target="_blank"
          className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
        >
          <FaGithub/>
        </a>
        <a
          href="https://www.facebook.com/" target="_blank"
          className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
        >
          <FaFacebook/>
        </a>
        <a
          href="https://www.instagram.com/?hl=en" target="_blank"
          className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
        >
          <FaInstagram/>
        </a>
      </div>
    </div>
  );
}

export default FollowMe;
