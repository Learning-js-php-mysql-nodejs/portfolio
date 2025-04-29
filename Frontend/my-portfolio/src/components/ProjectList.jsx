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
import dhartidhorari1 from "../assets/dhartidhorari1.png";
import dhartidhorari2 from "../assets/dhartidhorari2.png";
import dhartidhorari3 from "../assets/dhartidhorari3.png";
import dhartidhorariapp1 from "../assets/dhartidhorariapp1.png";
import dhartidhorariapp2 from "../assets/dhartidhorariapp2.png";
import electioneasy from "../assets/electioneasy.png";
import agreementPaper from "../assets/agreementPaper.png";
import agreementPaper2 from "../assets/agreementPaper2.png";
import agreementPaper1 from "../assets/agreementPaper1.png";
import getai from "../assets/getai.png";
import getai2 from "../assets/getai2.png";
import getai1 from "../assets/getai1.png";
import { Button } from './ui/button';
import betlagao1 from "../assets/betlagao1.png";
import betlagao2 from "../assets/betlagao2.png";
import betlagao3 from "../assets/betlagao3.png";
import betlagao4 from "../assets/betlagao4.png";
import betlagao5 from "../assets/betlagao5.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
    {
        title: "Transport 360",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Present",
        techStack: "React, Redux Toolkit, Html, css, Node.js",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            " Built a full-stack logistics web app using React.js (frontend) and Node.js (backend)",
            "Implemented trip management system with support for multiple LR selection and multi-location routing",
            "Developed a dynamic bid system to enable competitive rate selection for optimal logistics pricing",
            "Used lazy loading and caching to improve performance and reduce load times",
            "Utilized Redux Toolkit and Context API for scalable and efficient state management",
            "Created custom and reusable components, including inputs, dropdowns, and modals, to enhance development speed and maintainability",
            "Developed infinite scroll dropdowns with real-time API-based search and an add button for new entries",
            "Leveraged React Hooks and custom hooks for clean, modular business logic",
            "Integrated Google Maps for real-time location tracking and trip route visualization",
            "Focused on a responsive, user-friendly UI with robust error handling across all modules"
        ],
        demoLink: "https://transport360.urja360.com",
        githubLink: "#",
        image: transport,
        imageUrls: [
            transport1,
            transport2,
            transport3
        ]

    },
    {
        title: "Dharti Dhora Ri ",
        projectType: "Event And Hotal Management System",
        timeline: "Jan 2025 - Present",
        techStack: "React, Redux Toolkit, Html, css, Pythan",
        description: "Hotel & Event Management System – Web App.",
        detailedPoints: [
            "Developed a mobile application using React Native for seamless hotel and event management.",
            "Implemented features like guest room booking, check-in/check-out, and digital key allotment.",
            "ntegrated WhatsApp-based verification for secure and user-friendly access.",
            "Designed and built reusable components and custom hooks to streamline functionality and maintain clean code.",
            "Applied a custom theme color system for brand consistency and UI personalization.",
            "Created dynamic custom modals for user interactions and confirmations.",

        ],
        demoLink: "https://cms.dhartidhorari.com/",
        githubLink: "https://github.com/virendrauikey",
        image: dharti,
        imageUrls: [dhartidhorari1, dhartidhorari2, dhartidhorari3]
    }, {
        title: "Dharti Dhora Ri App",
        projectType: "Event And Hotal Management App",
        timeline: "Jan 2025 - Present",
        techStack: "React Native, Redux Toolkit, Html, css, Pythan",
        description: "Hotel & Event Management System – Mobile App.",
        detailedPoints: [
            "Developed a mobile application using React Native for seamless hotel and event management.",
            "Implemented features like guest room booking, check-in/check-out, and digital key allotment.",
            "ntegrated WhatsApp-based verification for secure and user-friendly access.",
            "Designed and built reusable components and custom hooks to streamline functionality and maintain clean code.",
            "Applied a custom theme color system for brand consistency and UI personalization.",
            "Created dynamic custom modals for user interactions and confirmations.",
            "Ensured a responsive, smooth, and intuitive user experience across Android and iOS devices"
        ],
        demoLink: "#",
        githubLink: "https://github.com/virendrauikey",
        image: dharti,
        imageUrls: [dhartidhorariapp1, dhartidhorariapp2]
    }, {
        title: "Election Easy",
        projectType: "Election Easy – Voter Management Web Application",
        timeline: "Mar 2024 - Nov 2024",
        techStack: "React, Redux toolkit,Pythan ,Html ,Css",
        description: "Election Easy – Voter Management Web Application",
        detailedPoints: [
            "Built a scalable voter management platform for local political parties using React.js",
            "Managed large-scale voter data with detailed assembly-wise and booth-wise segmentation",
            "Integrated voter relationship tracking for personalized outreach and engagement",
            "Utilized React Query for efficient REST API integration, caching, and background updates.",
            "Applied Context API for shared state management across components.",
            "Created reusable UI components (inputs, tables, filters) for consistent design and development speed.",
            "Developed custom hooks to abstract logic and promote code reusability",
            "Designed an intuitive UI for managing voter lists, relationships, and real-time updates",
            "Ensured responsive performance and usability in field operations with large datasets"
        ],
        demoLink: "https://electioneasy.in",
        githubLink: "https://github.com/virendrauikey",
        image: election,
        imageUrls: [electioneasy]
    }, {
        title: "Karan Group",
        projectType: "Transport Management System",
        timeline: "Jan 2023 - Jan 2024",
        techStack: "React, Redux toolkit,Pythan ,Html ,Css",
        description: "Karan Group eLogistic Web Application",
        detailedPoints: [
            "Developed a scalable logistics management system using React.js",
            "Implemented order and fleet management modules to streamline operations.",
            "Integrated Google Maps API for real-time fleet tracking and location visualization.",
            "Utilized React Query for efficient data fetching, lazy loading, and caching.",
            "Applied Redux for centralized state management across the application.",
            "Built reusable and customizable UI components for inputs, dropdowns, etc.",
            "Created custom React hooks to encapsulate and manage business logic",
            "Enhanced performance using lazy loading and component-level optimization",
            "Ensured robust error handling and a clean user experience throughout"
        ],
        demoLink: "https://app.karanfms.com/login",
        githubLink: "https://github.com/virendrauikey",
        image: karan,
        imageUrls: []
    }, {
        title: "Lakhani Charitable Trust",
        projectType: "Transport Management System",
        timeline: "April 2025 - Present",
        techStack: "React, Redux toolkit,Pythan ,Html ,Css",
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
        timeline: "Aug 2023 - Aug 2024",
        techStack: "React, Redux toolkit,Pythan ,Html ,Css",
        description: "A modern logistics platform to streamline transportation management.",
        detailedPoints: [
            "Developed AgreementPaper, a digital contract management platform enabling seamless online creation, editing, and signing of legal agreements..",
            "Implemented secure user authentication and role-based access control using JWT and OAuth protocols.",
            "Designed and integrated dynamic form generation to support customizable legal templates and input validation.",
            "Enabled real-time document tracking and status updates using WebSockets for improved collaboration and transparency.",
            "Built responsive, user-friendly UI with React, ensuring optimal user experience across devices.",
            "Optimized back-end performance using Pythan, reducing API response times by 30%.",
            "Integrated e-signature workflows and automated audit trails for legally compliant agreement execution."
        ],
        demoLink: "https://app.agreementpaper.com/",
        githubLink: "https://github.com/example",
        icon: HeartHandshake,
        imageUrls: [agreementPaper, agreementPaper2, agreementPaper1]
    }, {
        title: "BetLagao",
        projectType: "Transport Management System",
        timeline: "Aug 2022 - Dec 2023",
        techStack: "React, Redux ,Node.js ,Html ,Css",
        description: "Bet Lagao – Fantasy Gaming Web Application",
        detailedPoints: [
            "Contributed to a fantasy web application for games by fixing critical bugs and enhancing stability",
            "Worked on both frontend (React.js) and backend (Node.js) for full-stack improvements",
            " Developed and optimized reusable UI components for consistent user experience",
            " Integrated real-time game score updates for an engaging and dynamic interface",
            "Focused on improving performance, code quality, and overall user interactivity",

        ],
        demoLink: "https://user.betlagao.com/",
        githubLink: "https://github.com/virendrauikey",
        icon: Users,
        imageUrls: [betlagao1, betlagao2, betlagao3, betlagao4, betlagao5]
    },
    {
        title: "GetAi",
        projectType: "Social media with Ai",
        timeline: "Dec 2023 - april 2024",
        techStack: "React, Redux toolkit,Pythan ,Html ,Css",
        description: "a platform dedicated to providing innovative AI tools and resources designed to enhance productivity",
        detailedPoints: ["a platform dedicated to providing innovative AI tools and resources designed to enhance productivity",
            "streamline tasks, and bring smarter solutions to both personal and professional challenges.",
            "Whether you're looking for automation, insights, or cutting-edge AI applications",
            "this platform could be your go-to resource for leveraging the power of AI."
        ],
        demoLink: "https://getai.life/",
        githubLink: "https://github.com/example",
        icon: Bot,
        imageUrls: [getai, getai1, getai2]
    },

];

function ProjectList() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

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

                                        {project?.imageUrls?.length > 0 && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                {project.imageUrls.map((imgUrl, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                                                        onClick={() => openModal(imgUrl)}
                                                    >
                                                        <img
                                                            src={imgUrl}
                                                            alt={`Project Image ${idx + 1}`}
                                                            className="w-full h-48 object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Single Dialog */}
                                        {/* Custom Fullscreen Modal */}
                                        {isModalOpen && (
                                            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                                                <button
                                                    onClick={closeModal}
                                                    className="absolute top-5 right-5 text-white text-3xl font-bold"
                                                >
                                                    &times;
                                                </button>
                                                <img
                                                    src={selectedImage}
                                                    alt="Full View"
                                                    className="max-w-400 max-h-full object-contain rounded-md"
                                                />
                                            </div>
                                        )}
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
