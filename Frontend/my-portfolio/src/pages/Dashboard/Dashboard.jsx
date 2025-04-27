import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Project from '../Project';
import ContactUs from '../ContactUs';

import { Typewriter } from 'react-simple-typewriter';
import Banner from '@/components/Banner';
import Skill from '@/components/Skill';

function Dashboard() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const tabs = ['Home', 'Projects', 'Contact Us'];

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
            {/* Header */}
            <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6 sticky top-0 z-50 w-full transition-colors">
                {/* Title */}
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
                </div>

                {/* Tabs */}
                <div className="hidden md:flex items-center gap-6">
                    {tabs.map((tab) => (
                        <Button
                            key={tab}
                            variant={activeTab === tab ? 'default' : 'outline'}
                            onClick={() => setActiveTab(tab)}
                            className="text-sm font-medium"
                        >
                            {tab}
                        </Button>
                    ))}
                </div>

                {/* Right Side: Buttons */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" onClick={toggleDarkMode}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                    <Button variant="outline">Login</Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {activeTab === 'Home' && (
                    <>
                        {/* Carousel Section */}
                        <div className="grid grid-cols-1 justify-center mb-8">
                            <div className="col-span-1 w-full max-w-8xl mx-auto h-150">
                                <Banner/>
                            </div>
                        </div>

                        {/* Stats Cards Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors">
                                <CardHeader>
                                    <CardTitle>Users</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold">1,245</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Active users today</p>
                                </CardContent>
                            </Card>

                            {/* Card 2 */}
                            <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors">
                                <CardHeader>
                                    <CardTitle>Sales</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold">$12,345</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Revenue this month</p>
                                </CardContent>
                            </Card>

                            {/* Card 3 */}
                            <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors">
                                <CardHeader>
                                    <CardTitle>New Orders</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold">320</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Orders this week</p>
                                </CardContent>
                            </Card>
                        </div>
                        {/* Skills Section */}
<Skill/>

                    </>
                )}

                {/* Projects Tab */}
                {activeTab === 'Projects' && <Project />}

                {/* Contact Us Tab */}
                {activeTab === 'Contact Us' && <ContactUs />}
            </main>
        </div>
    );
}

export default Dashboard;
