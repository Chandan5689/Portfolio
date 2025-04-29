import React from "react";
import { FaCode, FaFigma } from "react-icons/fa";
import AnimatedSkillsGrid from "./AnimatedSkillsGrid";
import SkillsGrid from "./SkillsGrid";

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-6">
        <div className="text-center mb-16 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional toolkit includes design, development, and
            collaboration skills that help me create exceptional digital
            experiences.
          </p>
        </div>

        {/*Animated skills Grid*/}
        <AnimatedSkillsGrid />

        {/* skills Grid */}
        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillsGrid icon={"FaCode"} Title={"Design and AI Tools"} listItem1={'Figma'} listItem2={'Spline'}  listItem3={'Readdy'} listItem4={'V0'} listItem5={'Durable.ai'}/>
          <SkillsGrid icon={"FaCode"} Title={"Development"} listItem1={'HTML and CSS'} listItem2={'Javascript'}  listItem3={'React'} listItem4={'Tailwind CSS'} listItem5={'Responsive Design'}/>
          {/* <SkillsGrid icon={"FaCode"} Title={"Soft Skills"} listItem1={'Team Collaboration'} listItem2={'Communication'}  listItem3={'User Research'} /> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
