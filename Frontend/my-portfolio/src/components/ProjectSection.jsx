import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from './ui/button';
import { Truck, ShoppingCart, Edit, Vote, Building2, HeartHandshake, FileText, Users, Bot } from 'lucide-react';
import dharti from "../assets/dhartidhorari.png";
import transport from "../assets/transport.png";
import election from "../assets/election.png";
import karan from "../assets/karan.png";
import lakhani from "../assets/trustlogo.png";




const projects = [
  {
    title: "Transport 360",
    description: "A responsive portfolio website built with React, Tailwind CSS, and Shadcn UI components.",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    image: transport
  },
  {
    title: "Dharti Dhora Ri",
    description: "A full-stack e-commerce application with user authentication, cart management, and payment integration.",
    color: "bg-gradient-to-r from-green-400 to-teal-500",
    image: dharti
  },
  {
    title: "Dharti Dhorari App",
    description: "A blogging platform where users can create, edit, and delete posts, with a rich text editor.",
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
    image: dharti
  },
  {
    title: "Election Easy",
    description: "An election management app to simplify voter registration and candidate profiling.",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    image: election
  },
  {
    title: "Karan Group",
    description: "A corporate website showcasing projects, team, and services for the Karan Group.",
    color: "bg-gradient-to-r from-purple-500 to-fuchsia-600",
    image: karan
  },
  {
    title: "Lakhani Charitable Trust",
    description: "A donation management platform with donor dashboards and event management features.",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    image: lakhani
  },
  {
    title: "Agreement Paper",
    description: "A legal document signing platform with online verification and templates.",
    color: "bg-gradient-to-r from-red-500 to-pink-600",
    icon: FileText
  },
  {
    title: "Batlagao",
    description: "A social networking platform focused on positive discussions and topic-based communities.",
    color: "bg-gradient-to-r from-lime-400 to-green-500",
    icon: Users
  },
  {
    title: "Get AI",
    description: "An AI tools marketplace offering services like text generation, image editing, and chatbots.",
    color: "bg-gradient-to-r from-emerald-400 to-teal-500",
    icon: Bot
  }
];

function ProjectSection() {
  return (
    <div className="flex flex-col justify-center mt-20 items-center">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white mb-10 tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const Image = project.image;
          return (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-transform hover:scale-105 hover:shadow-2xl duration-300 rounded-2xl overflow-hidden"
            >
              <div className={`${project.color} h-2 w-full`} />
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mb-2">
                 {Icon &&  <Icon className="h-8 w-8 text-primary" />}
                   {Image &&  <img src={Image} alt="Project Icon" className="h-8 w-8 rounded-full" />}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
