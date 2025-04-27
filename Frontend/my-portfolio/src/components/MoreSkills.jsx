import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Example icons

function MoreSkills() {
    const skillsFrontend = [
        { name: 'React', level: 85, icon: <FaReact className="text-2xl" /> },
        { name: 'HTML', level: 90, icon: <FaHtml5 className="text-2xl" /> },
        { name: 'CSS', level: 80, icon: <FaCss3Alt className="text-2xl" /> },
        { name: 'JavaScript', level: 75, icon: <FaJsSquare className="text-2xl" /> },
        { name: 'TypeScript', level: 70, icon: <FaJsSquare className="text-2xl" /> },
    ];

    const skillsBackend = [
        { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-2xl" /> },
        { name: 'Express.js', level: 75, icon: <FaNodeJs className="text-2xl" /> },
        { name: 'MongoDB', level: 70, icon: <FaDatabase className="text-2xl" /> },
        { name: 'GraphQL', level: 60, icon: <FaDatabase className="text-2xl" /> },
        { name: 'API Development', level: 85, icon: <FaNodeJs className="text-2xl" /> },
    ];

    const getProgressBarColor = (level) => {
        if (level >= 80) return 'bg-green-500';  // High skill level
        if (level >= 60) return 'bg-yellow-500'; // Medium skill level
        return 'bg-red-500'; // Low skill level
    };

    const renderSkills = (skills) => {
        return skills.map((skill) => (
            <div key={skill.name} className="mb-6">
                <div className="flex justify-between items-center text-sm mb-2">
                    <div className="flex items-center">
                        {skill.icon}
                        <span className="ml-2">{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className={`h-3 rounded-full ${getProgressBarColor(skill.level)} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                    />
                </div>
            </div>
        ));
    };

    return (
        <div className=" mt-20 items-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white mb-10 tracking-tight">
          Skills
        </h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Frontend Skill Card */}
        
     
            <Card className="shadow-lg bg-gradient-to-r from-blue-100 to-blue-300">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-800">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                    {renderSkills(skillsFrontend)}
                </CardContent>
            </Card>

            {/* Backend Skill Card */}
            <Card className="shadow-lg bg-gradient-to-r from-green-100 to-green-300">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-800">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                    {renderSkills(skillsBackend)}
                </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-r from-blue-100 to-blue-300">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-800">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                    {renderSkills(skillsFrontend)}
                </CardContent>
            </Card>

            {/* Backend Skill Card */}
            <Card className="shadow-lg bg-gradient-to-r from-green-100 to-green-300">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-800">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                    {renderSkills(skillsBackend)}
                </CardContent>
            </Card>
        </div>
        </div>
        
    );
}

export default MoreSkills;
