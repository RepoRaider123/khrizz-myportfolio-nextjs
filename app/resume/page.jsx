"use client";

// Importing necessary icon libraries for the resume
import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, 
  FaGit, FaGithub, FaGitlab, FaMicrosoft, FaPython, 
  FaBootstrap, FaWix 
} from "react-icons/fa";

import { 
  SiTailwindcss, SiNextdotjs, SiCanva, SiMysql, SiAsana, 
  SiWebflow, SiAnydesk 
} from "react-icons/si";

// About section data - Contains personal information and description
const about = {
  title: "About me",
  description: "Hi, I'm Khrizz, a passionate and motivated individual with a strong background in Information Technology. I specialize in creating responsive, user-friendly websites. My approach to development is focused on crafting clean, efficient code and delivering exceptional user experiences. I'm always eager to learn new technologies and am excited to bring my skills to new challenges.",
  info: [
    { fieldName: "Name", fieldValue: "Jan Khrizztiane Gaudiel" },
    { fieldName: "Phone", fieldValue: "(+63) 949 477 5263" },
    { fieldName: "Experience", fieldValue: "N/A" },
    { fieldName: "Address", fieldValue: "Imus, Cavite" },
    { fieldName: "Nationality", fieldValue: "Filipino" },
    { fieldName: "Email", fieldValue: "jkgaudielwork@gmail.com" },
    { fieldName: "Employment Status", fieldValue: "Unemployed" },
    { fieldName: "Languages", fieldValue: "English, Tagalog" },
  ]
};

// Experience section data - Contains work history and roles
const experience = {
  icon: "/assets/resume/badge.svg", // Experience badge icon
  title: "My experience",
  description: "As a recent graduate, I gained hands-on experience in front-end development through internships and personal projects, using HTML, CSS, and JavaScript to create responsive and user-friendly web applications.",
  items: [
    { company: "Elijah Hotel and Residences", position: "Technical Support / Audio Visual Tech.", duration: "August 2024 - October 2024" },
    { company: "DSWD - Imus", position: "Intern", duration: "April 2024 - July 2024" },
  ]
};

// Education section data - Contains education history and degrees earned
const education = {
  icon: "/assets/resume/cap.svg", // Education cap icon
  title: "My education",
  description: "Graduated in 2024 with a Bachelor of Science in Information Technology from Cavite State University - Imus Campus, with coursework in web development, front-end development, basic back-end development, and programming, and participated as an active member of the IT Society.",
  items: [
    { institution: "CVSU Imus - Campus", degree: "Bachelor of Science in Information Technology", duration: "2019 - 2024" },
    { institution: "AISAT College - Dasmariñas", degree: "Information Communications and Technology", duration: "2017 - 2019" },
  ]
};

// Skills section data - Lists the skills and tools the person is proficient in
const skills = {
  title: "My skills",
  description: "Skilled in HTML, CSS, JavaScript, Next.js, and tools like Figma, Git, and TailwindCSS, with a basic understanding of Python and Node.js. Experienced in version control, GitHub, and web development tools such as Webflow, Wix, and Bootstrap. Strong problem-solving, collaboration, communication, and adaptability skills, with a keen interest in learning new technologies and enhancing user experiences.",
  skillList: [
    { icon: <FaMicrosoft />, name: "Microsoft 365" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaGitlab />, name: "GitLab" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiAsana />, name: "Asana" },
    { icon: <SiWebflow />, name: "Webflow" },
    { icon: <FaWix />, name: "Wix" },
    { icon: <SiAnydesk />, name: "AnyDesk" },
  ]  
};

// Importing necessary UI components and animation libraries
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Main Resume component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state: hidden
      animate={{ 
        opacity: 1, // Final state: visible
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, // Animation details
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          {/* Tab triggers (buttons) for switching between sections */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Tab content - Displays corresponding content when each tab is selected */}
          <div className="min-h-[70vh] w-full">
            {/* Experience Section */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left" style={{ cursor: 'default' }}>
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 text-justify mx-auto xl:mx-0">{experience.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <li key={index} className="bg-[#232329] h-[184px] py-5 px-9 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left" style={{ cursor: 'default' }}>
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 text-justify mx-auto xl:mx-0">{education.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li key={index} className="bg-[#232329] h-[214px] py-5 px-9 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left" style={{ cursor: 'default' }}>
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 text-justify mx-auto xl:mx-0">{skills.description}</p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[50px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-sm text-white/60 pl-2 capitalize sm:hidden">{skill.name}</span>
                            </TooltipTrigger>
                            <TooltipContent className="hidden lg:block">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Me Section */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left" style={{ cursor: 'default' }}>
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 text-justify mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[1000px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-md">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
