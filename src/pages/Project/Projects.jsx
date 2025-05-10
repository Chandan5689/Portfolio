import React, { useState } from "react";
import MenuJs from "../../assets/Projects_images/menuJs.png";
import MenuJsMobile from "../../assets/Projects_images/MenuJsMobile.png"
// import parallaxHill from "../../assets/Projects_images/parallaxHill.png";
import Todo from '../../assets/Projects_images/Todo.png'
import TodoMobile from "../../assets/Projects_images/todoMobile.png"
import Eventora from "../../assets/Projects_images/eventora.png";
import EventoraMobile from "../../assets/Projects_images/eventoraMobile.png"
import MyPortfolio from "../../assets/Projects_images/MyPortfolio.png";
import MyPortfolioMobile from "../../assets/Projects_images/MyportfolioMobile.png"
import Recipe from "../../assets/Projects_images/Recipe.png"
import RecipeMobile from "../../assets/Projects_images/RecipeMobile.png"
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa6";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNavigateProject = (direction) => {
    if (selectedProject === null) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    } else {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    }
    setSelectedProject(projects[newIndex].id);
  };
  const projects = [
    {
      id: 1,
      title: "A Simple Recipe Web design",
      imageDeskTop:Recipe,
      imageMobile:RecipeMobile,
      description:
        "A simple, elegant and interactive recipe website of different dishes with differnt categories using latest technologies which has smooth and responsive effect",
        technologiesUsed: ["React", "Tailwind CSS",],
      link:'https://recipe-olive-xi.vercel.app/'
    },
    {
      id: 2,
      title: "Simple Todo list",
      imageDeskTop:Todo,
      imageMobile:TodoMobile,
      description:
        "A simple todo list where we can add tasks and delete them when completed",
        technologiesUsed: ["React", "Tailwind CSS",],
      link:'https://to-do-beta-dun.vercel.app/'
    },
    {
      id: 3,
      title: "A Event oriented website",
      imageDeskTop: Eventora,
      imageMobile:EventoraMobile,
      description:
        "A simple and elegant event viewing website that is occuring near your area",
        technologiesUsed: ["React", "CSS", "Tailwind CSS", ],
      link:'#'
    },
    {
      id: 4,
      title: "My personal Portfolio Web design",
      imageDeskTop:MyPortfolio,
      imageMobile:MyPortfolioMobile,
      description:
        "A simple, elegant and interactive portfolio website of myself using latest technologies which has smooth and responsive effect",
        technologiesUsed: ["React", "Tailwind CSS",],
      link:'https://portfolio-nine-tan-74.vercel.app/',
    },
    
    {
      id: 5,
      title: "Simple Menu page with filter system",
      imageDeskTop: MenuJs,
      imageMobile:MenuJsMobile,
      description:
        "A simple Menu page that has filtering system for different items which is responsive and smooth",
      technologiesUsed: ["HTML", "CSS","Tailwind CSS", "JS"],
      link:'#'
    },

  ];
  return (
    <>
      <section id="projects" className="min-h-screen py-20 bg-gray-50">
        <div className="mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of my recent work showcasing web development skills
              and web designs.
            </p>
            <div className="mt-8">
              <span className="px-4 py-2 rounded-md cursor-default whitespace-nowrap font-medium bg-indigo-600 text-white">
                Web Designs
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                
                <div className="h-50 overflow-hidden">
                  <img
                    src={project.imageMobile}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 md:hidden"
                  />
                  <img
                    src={project.imageDeskTop}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 hidden md:flex "
                  />
                  
                </div>
                <div className="p-6">
                  <h3 className=" text-xl font-semibold">{project.title}</h3>
                  <p className=" text-gray-600">{project.description}</p>
                  <div className="mt-2">
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                      View Details
                      <FaArrowRight className="ml-1 mt-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && selectedProject && (
        <div
          className="fixed top-[-8px] inset-0 z-100 overflow-y-auto "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-200 opacity-40  transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-5 right-4  z-50 flex space-x-4">
                <button
                  onClick={handleCloseModal}
                  className="bg-white hover:bg-gray-200 transition-all rounded-full p-2 cursor-pointer whitespace-nowrap"
                >
                  <AiOutlineClose color="red" size={19} className=""/>
                </button>
              </div>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {projects.find((p) => p.id === selectedProject) && (
                  <div className="space-y-6">
                    <div className="relative h-96 w-full">
                      <img
                        src={
                          projects.find((p) => p.id === selectedProject)?.imageMobile
                        }
                        alt={
                          projects.find((p) => p.id === selectedProject)?.title
                        }
                        className="w-full h-full object-cover rounded-lg  md:hidden"
                      />
                      <img
                        src={
                          projects.find((p) => p.id === selectedProject)?.imageDeskTop
                        }
                        alt={
                          projects.find((p) => p.id === selectedProject)?.title
                        }
                        className="w-full h-full object-cover rounded-lg hidden md:flex "
                      />
                      <button
                        onClick={() => handleNavigateProject("prev")}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <FaChevronLeft/>
                      </button>
                      <button
                        onClick={() => handleNavigateProject("next")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all duration-500 ease-linear cursor-pointer whitespace-nowrap "
                      >
                        <FaChevronRight/>
                      </button>
                    </div>
                    <div className="space-y-4 ">
                      <h3 className="relative text-2xl font-bold text-gray-900 z-200">
                        {projects.find((p) => p.id === selectedProject)?.title}
                      </h3>
                    </div>
                    <div className="">
                      <p className="text-black">
                        {
                          projects.find((p) => p.id === selectedProject)
                            ?.description
                        }
                      </p>
                      <h4 className="text-lg font-semibold mt-6 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects
                          .find((p) => p.id === selectedProject)
                          ?.technologiesUsed.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100  rounded-full text-sm"
                            >{tech}</span>
                          ))}
                      </div>
                    </div>
                    <div className="mt-2 cursor-pointer relative z-999 flex justify-end w-full">
                    <a href={
                          projects.find((p) => p.id === selectedProject)
                            ?.link
                        }>
                      <button className="text-indigo-800 font-medium hover:text-indigo-600 transition-colors flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                      View project
                      <FaArrowRight className="ml-1 mt-1" />
                    </button></a>
                    </div>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
