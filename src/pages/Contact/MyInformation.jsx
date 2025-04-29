import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot,} from "react-icons/fa6";
function MyInformation() {
  return (
    
      <div className="bg-white rounded-lg shadow-md p-6 ">
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <FaEnvelope color="#4f39f6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Email</p>
              <p className="text-sm text-gray-600">
                chandantiwari8889@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <FaPhoneAlt color="#4f39f6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Phone</p>
              <p className="text-sm text-gray-600">+9779817182911</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <FaLocationDot color="#4f39f6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Location</p>
              <p className="text-sm text-gray-600">Pokhara,Nepal</p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default MyInformation;
