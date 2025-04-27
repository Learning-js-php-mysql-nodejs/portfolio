import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaGithub, FaGitlab, FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiReactrouter, SiRedux, SiPostman, SiAxios, SiReactquery, SiMaterialformkdocs, SiShadcnui } from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { MdOutlineDownloading, MdOutlineCallSplit } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

function MoreSkills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'JavaScript', icon: <RiJavascriptFill className="text-yellow-500" /> },
        { name: 'TypeScript', icon: <BiLogoTypescript className="text-blue-500" /> }
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
        { name: 'API Creation', icon: <TbApi className="text-purple-500" /> },
      ],
    },
    {
      title: "Routing, State & Performance",
      skills: [
        { name: 'React Router', icon: <SiReactrouter className="text-red-500" /> },
        { name: 'Redux Toolkit', icon: <SiRedux className="text-pink-500" /> },
        { name: 'Context API', icon: <TbApi className="text-indigo-500" /> },
        { name: 'Lazy Loading', icon: <MdOutlineDownloading className="text-blue-500" /> },
        { name: 'Code Splitting', icon: <MdOutlineCallSplit className="text-orange-500" /> },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: 'React Native', icon: <TbBrandReactNative className="text-blue-400" /> },
      ],
    },
    {
      title: "Version Control & Tools",
      skills: [
        { name: 'Git', icon: <FaGit className="text-red-600" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
        { name: 'GitLab', icon: <FaGitlab className="text-orange-600" /> },
        { name: 'VS Code', icon: <VscVscode className="text-blue-600" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      title: "API Integration",
      skills: [
        { name: 'Axios', icon: <SiAxios className="text-teal-500" /> },
        { name: 'Fetch', icon: <SiReactrouter className="text-red-500" /> },
        { name: 'React Query', icon: <SiReactquery className="text-orange-500" /> },
        { name: 'REST APIs', icon: <TbApi className="text-purple-600" /> },
      ],
    },
    {
      title: "UI & Styling",
      skills: [
        { name: 'HTML5, CSS3 & SCSS', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'Material UI', icon: <SiMaterialformkdocs className="text-blue-800" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
        { name: 'Tailwind', icon: <RiTailwindCssFill className="text-cyan-500" /> },
        { name: 'Shadcn', icon: <SiShadcnui className="text-indigo-700" /> },
      ],
    },
  ];

  const renderSkills = (skills) => (
    skills.map((skill) => (
      <div key={skill.name} className="mb-6 flex items-center">
        <div className="text-xl mr-4">
          {skill.icon}
        </div>
        <div className="text-sm">
          <span>{skill.name}</span>
        </div>
      </div>
    ))
  );

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-extrabold mb-10 tracking-tight text-gray-900 dark:text-white text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 gap-6 mt-10">
        {skillCategories.map((category) => (
          <Card key={category.title} className="shadow-lg bg-white dark:bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderSkills(category.skills)}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MoreSkills;
