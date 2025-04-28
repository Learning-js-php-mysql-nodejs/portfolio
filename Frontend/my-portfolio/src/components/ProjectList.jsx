import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import { Truck, ShoppingCart, Edit, Vote, Building2, HeartHandshake, FileText, Users, Bot, Icon } from 'lucide-react';
import dharti from "../assets/dhartidhorari.png";
import transport from "../assets/transport.png";
import election from "../assets/election.png";
import karan from "../assets/karan.png";
import lakhani from "../assets/trustlogo.png";
import transport1 from "../assets/transport1.png";
import transport2 from "../assets/transport2.png";
import transport3 from "../assets/transport3.png";
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
    {
        title: "Transport 360",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Redux Toolkit, Html, css, Node.js",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Developed a modern logistics platform to streamline transportation management, improve operational efficiency, and reduce costs through UX-first development.",
            "Built a trip management system capable of handling multiple LRs (Lorry Receipts), live location tracking, and automated trip reporting.",
            "Led the design and implementation of a bid management system for trip bidding by drivers and transport owners.",
            "Integrated Google Maps API for real-time vehicle tracking and intelligent route planning.",
            "Engineered a scalable frontend using React.js, with custom hooks, reusable components, and a clean import/export architecture.",
            "Implemented lazy loading, code-splitting, React.memo, and Context API for global state and rendering optimization.",
            "Managed complex UI flows with multiple modals, scroll-based dropdowns, dynamic options, and minimized redundant API calls."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "#",
        image: transport,
        imageUrls: [
            transport1,
            transport2,
            transport3
        ]
        // imageUrls: [
        //     "../assets/transport1.png",
        //     "../assets/transport2.png",

        //   ]
    },
    {
        title: "Dharti Dhora Ri ",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        image: dharti,
        imageUrls: []
    }, {
        title: "Dharti Dhora Ri App",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        image: dharti,
        imageUrls: []
    }, {
        title: "Election Easy",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        image: election,
        imageUrls: []
    }, {
        title: "Karan Group",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        image: karan,
        imageUrls: []
    }, {
        title: "Lakhani Charitable Trust",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        image: lakhani,
        imageUrls: []
    }, {
        title: "Agreement Paper",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        icon: HeartHandshake,
        imageUrls: []
    }, {
        title: "BetLagao",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Developed a modern logistics platform to streamline transportation management,improve operational efficiency, and reduce costs through UX-first development.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        icon: Users,
        imageUrls: []
    },
    {
        title: "GetAi",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Tailwind CSS, Shadcn UI",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Built a Trip Management System handling multiple Lorry Receipts (LRs), live tracking, automated trip reporting.",
            "Led Bid Management System design for trip bidding by drivers and owners.",
            "Integrated Google Maps API for real-time vehicle tracking and smart route planning.",
            "Engineered scalable frontend using custom hooks, reusable components, and clean import/export structure.",
            "Optimized app using lazy loading, code-splitting, React.memo, and Context API.",
            "Handled complex UI flows: modals, scroll dropdowns, dynamic options, minimized API redundancy."
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "https://github.com/example",
        icon: Bot,
        imageUrls: []
    },

];

function ProjectList() {

    const [selectedImage, setSelectedImage] = useState(null);
   
    return (
        <div className="flex flex-col justify-center items-center min-h-screen mt-0 w-full p-0">
            <div className='flex justify-center items-center h-24 bg-white dark:bg-gray-800 shadow  sticky top-16 z-50 w-full transition-colors mb-5 border-t-4 border-grey-900 '>
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight text-center">
                    My Projects
                </h2>
            </div>

            <div className="w-full max-w-7xl px-4">
                <Accordion type="single" collapsible>
                    {projects.map((project, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden mb-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
                            <AccordionTrigger className="cursor-pointer p-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center space-x-4">
                                        {project.image && (
                                            <img src={project.image} alt={project.title} className="h-12 w-12 rounded-full object-cover" />
                                        )}
                                        {/* {project.icon &&  (<Icon className="h-8 w-8 text-primary" />)} */}
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white no-underline hover:no-underline focus:no-underline">{project.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 no-underline hover:no-underline focus:no-underline">{project.projectType}</p>
                                        </div>
                                    </div>
                                    <Button variant="link" size="sm" className="text-primary">
                                        View Demo
                                    </Button>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-b-lg">
                                <div className="space-y-6">
                                    {/* Project Timeline */}
                                    <div className="p-4 rounded-md bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-md">
                                        <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">📅 Project Timeline</h4>
                                        <p className="text-sm text-gray-800 dark:text-gray-200">{project.timeline}</p>
                                    </div>

                                    {/* Technology Used */}
                                    <div className="p-4 rounded-md bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 shadow-md">
                                        <h4 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">🛠️ Technology Used</h4>
                                        <p className="text-sm text-gray-800 dark:text-gray-200">{project.techStack}</p>
                                    </div>

                                    {/* Short Description */}
                                    <div className="p-4 rounded-md bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 shadow-md">
                                        <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">📝 Short Description</h4>
                                        <p className="text-sm text-gray-800 dark:text-gray-200">{project.description}</p>
                                    </div>

                                    {/* Key Responsibilities / Highlights */}
                                    <div className="p-4 rounded-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 shadow-md">
                                        <h4 className="text-lg font-semibold text-pink-700 dark:text-pink-300 mb-4">⭐ Key Responsibilities / Highlights</h4>
                                        <ul className="pl-5 space-y-2 text-sm text-gray-800 dark:text-gray-200 list-disc list-inside">
                                            {project.detailedPoints.map((point, idx) => (
                                                <li key={idx}>
                                                    <span className="font-medium text-gray-900 dark:text-white">
                                                        {point.split(":")[0]}
                                                    </span>
                                                    {point.includes(":") ? ": " + point.split(":").slice(1).join(":") : ""}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Multiple Project Demo Images */}
                                    <div className="p-4 rounded-md bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 shadow-md">
                                        <h4 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-4">🖼️ Project Demo</h4>

                                        {project?.imageUrls?.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {console.log(project)}
                                            {project.imageUrls.map((imgUrl, idx) => (
                                                <Dialog key={idx}>
                                                    <DialogTrigger asChild>
                                                        <div
                                                            className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                                                            onClick={() => setSelectedImage(imgUrl)}
                                                        >
                                                            <img
                                                                src={imgUrl}
                                                                alt={`Project Image ${idx + 1}`}
                                                                className="w-full h-48 object-cover"
                                                            />
                                                        </div>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-4xl p-0 overflow-hidden " >
                                                        {selectedImage && (
                                                            <img
                                                                src={selectedImage}
                                                                alt="Full View"
                                                                className="w-full h-auto max-h-[90vh] object-contain rounded-md"
                                                            />
                                                        )}
                                                    </DialogContent>
                                                </Dialog>
                                            ))}
                                        </div>}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex space-x-4 mt-6">
                                        <Button
                                            variant="default"
                                            size="sm"
                                            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white"
                                            onClick={() => window.open(project.demoLink, '_blank')}
                                        >
                                            🚀 View Demo
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            onClick={() => window.open(project.githubLink, '_blank')}
                                        >
                                            🔗 GitHub
                                        </Button>
                                    </div>
                                </div>
                            </AccordionContent>




                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>

    );
}

export default ProjectList;
