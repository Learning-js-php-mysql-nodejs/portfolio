import React, { useState, useEffect, useContext } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Project from '../Project';
import ContactUs from '../ContactUs';
import { Typewriter } from 'react-simple-typewriter';
import Banner from '@/components/Banner';
import Skill from '@/components/Skill';
import Description from '@/components/Description';
import ProjectSection from '@/components/ProjectSection';
import MoreSkills from '@/components/MoreSkills';
import { UserContext } from '@/context';
import ProjectList from '@/components/ProjectList';

function Dashboard() {

    const {activeTab} = useContext(UserContext);
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col transition-colors relative">
            {/* Header */}
           

            {/* Main Content */}
            <main className="flex-1 ">
                {activeTab === 'Home' && (
                    <>
                        {/* Carousel Section */}
                        <div className="grid grid-cols-1 justify-center mb-8 p-6">
                            <div className="col-span-1 w-full max-w-8xl mx-auto h-150">
                                <Banner />
                            </div>
                        </div>

                        {/* Description Section */}
                        <Description />

                        {/* Skills Section */}
                        <Skill />
                        <MoreSkills />

                        {/* Projects */}
                        <ProjectSection />

                        {/* Contact Section */}
                        
                    </>
                )}

                {activeTab === 'Projects' && <ProjectList />}

                {activeTab === 'Contact Us' && <ContactUs />}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 shadow-inner p-4 text-center text-sm text-gray-500 dark:text-gray-400 sticky bottom-0 z-50">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </footer>
        </div>
    );
}

export default Dashboard;
