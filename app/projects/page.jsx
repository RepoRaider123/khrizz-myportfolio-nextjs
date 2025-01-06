"use client";

import { motion } from "framer-motion"; // For animations
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // Swiper for carousel functionality
import "swiper/css"; // Swiper styles

import { BsArrowUpRight, BsGithub } from "react-icons/bs"; // Icons for buttons

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Tooltip components for showing extra information

import Link from "next/link"; // Next.js Link for navigation between pages
import Image from "next/image"; // Next.js Image component for optimized image rendering
import ProjectSliderBtns from "@/components/ProjectSliderBtns"; // Custom slider button component

// Project data to display in the portfolio section
const projects = [
  {
    num: "01",
    category: "to do list",
    title: "project 1",
    description:
      "A simple and efficient web app for managing daily tasks. Users can create, update, and delete tasks with an intuitive checkbox interface. Responsive design ensures seamless use across devices, making it easy to stay organized and productive.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/project1.jpg",
    live: "https://to-do-list-app-102314.netlify.app",
    github: "https://github.com/RepoRaider123/Todo-list-html-css-js",
  },
  {
    num: "02",
    category: "weather app",
    title: "project 2",
    description:
      "A responsive web application providing real-time weather updates and detailed forecasts. Users can search for cities to view current conditions and temperature trends. Dynamic visuals and a clean design enhance the user experience, adapting to different weather scenarios.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/project2.jpg",
    live: "https://weather-app-103123.netlify.app",
    github: "https://github.com/RepoRaider123/Weather-App-html-css-js",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "A visually appealing and responsive website showcasing modern design. Built with HTML, CSS, and JavaScript, it highlights clean layouts, smooth animations, and cross-device compatibility, demonstrating front-end development skills.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/project3.jpg",
    live: "https://tech-website-321309.netlify.app/",
    github: "https://github.com/RepoRaider123/TechWebsite-html-css-js",
  },
];

const Projects = () => {
  // State to keep track of the currently selected project
  const [project, setProject] = useState(projects[0]);

  // Function to handle slide change in the Swiper carousel
  const handleSlideChange = (swiper) => {
    const loopIndex = swiper.realIndex; // Get the index of the current slide
    setProject(projects[loopIndex]); // Update the project displayed based on the slide
  };

  return (
    <motion.section
      initial={{ opacity: 0 }} // Initial opacity for animation
      animate={{
        opacity: 1, // Final opacity to make the section visible
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, // Animation timing and delay
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left section: Display project details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none" style={{ cursor: 'default' }}>
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Display project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Display project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Display project description */}
              <p className="text-white/60 text-justify">{project.description}</p>
              {/* Display tech stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* Add a comma after tech stack items except the last one */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Divider for separating sections */}
              <div className="border border-white/20"></div>
              {/* Buttons for live project and GitHub repository */}
              <div className="flex items-center gap-4">
                {/* Button for live project */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="hidden sm:block">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Button for GitHub repository */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="hidden sm:block">
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right section: Project image carousel */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              loop={true} // Enable infinite looping through the slides
              spaceBetween={30} // Space between slides
              slidesPerView={1} // Show one slide at a time
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange} // Handle slide change and update project details
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Background overlay to darken the image */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Display project image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="Project image" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom slider buttons to navigate slides */}
              <ProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
