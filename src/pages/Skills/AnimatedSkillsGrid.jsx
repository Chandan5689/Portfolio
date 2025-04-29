import React from 'react'
import { useState, useEffect ,useRef  } from "react";
import { FaCode, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaMobileScreen, FaJs, FaPenRuler,FaReact } from "react-icons/fa6";
function AnimatedSkillsGrid() {
    const [animatedSkills, setAnimatedSkills] = useState([]);
  const animatedSkillsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = Number(
              entry.target.getAttribute("data-skill-index")
            );
            if (
              !isNaN(skillIndex) &&
              !animatedSkillsRef.current.includes(skillIndex)
            ) {
              animatedSkillsRef.current.push(skillIndex);
              setAnimatedSkills([...animatedSkillsRef.current]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    const skillElements = document.querySelectorAll(".skill-circle");
    skillElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [animatedSkills]);

  const skills = [
    { name: "HTML/CSS", level: 95, icon: FaCode },
    { name: "JavaScript", level: 80, icon: FaJs },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
    { name: "React", level: 60, icon: FaReact },
    // { name: "UI/UX Design", level: 85, icon:FaPenRuler },
    { name: "Figma", level: 90, icon: FaFigma },
    { name: "Responsive Design", level: 95, icon: FaMobileScreen },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
            >
              <div className='mb-2 text-indigo-900'>
              <span className=" ">{<skill.icon size={20}/>}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-600">{skill.name}</h3>
              <div
                className="relative w-24 h-24 skill-circle transition-all duration-700 ease-in-out"
                data-skill-index={index}
              >
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${
                      2 *
                      Math.PI *
                      36 *
                      (1 -
                        (animatedSkills.includes(index) ? skill.level : 0) /
                          100)
                    }`}
                    className="text-indigo-600 transition-all duration-700 ease-in-out "
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default AnimatedSkillsGrid