import React from "react";
import { FaCheck } from "react-icons/fa6";
function SkillsGrid({icon ,Title,listItem1,listItem2,listItem3,listItem4,listItem5}) {
  
  return (
    
    <div className="bg-white rounded-xl p-8 shadow-lg">
    <div className="text-indigo-600 dark:text-indigo-400 mb-4">
      <span>{<icon/>}</span>
    </div>

    <h3 className="text-xl font-bold mb-4">{Title}</h3>

    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
      <li className="flex items-center ">
        <FaCheck color="#00c951" className="mr-2 text-green-500"/>
        {listItem1}
      </li>
      <li className="flex items-center">
      <FaCheck color="#00c951" className="mr-2 text-green-500"/>
        {listItem2}
      </li>
      <li className="flex items-center">
      <FaCheck color="#00c951" className="mr-2 text-green-500"/>
        {listItem3}
      </li>
      <li className="flex items-center">
      <FaCheck color="#00c951" className="mr-2 text-green-500"/>
        {listItem4}
      </li>
      <li className="flex items-center">
      <FaCheck color="#00c951" className="mr-2 text-green-500"/>
        {listItem5}
      </li>
    </ul>
  </div>
  );
}

export default SkillsGrid;
