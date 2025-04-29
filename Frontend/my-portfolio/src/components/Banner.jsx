import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import sampleImage from '../assets/blogger.png';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import ContactForm from './ContactForm';

function Banner() {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-700 dark:to-gray-900 p-10 rounded-2xl shadow-lg h-auto md:h-[600px]">

      {/* Left Side Content */}
      <div className="flex flex-col items-center md:items-start gap-8">

        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-center md:text-left text-gray-800 dark:text-white">
          Virendra Uikey
        </h1>

        {/* Subheading */}
        <h2 className="text-green-600 dark:text-green-300 text-center md:text-left text-lg font-medium">
          Work Experience: Over 2.5 Years as a Software Engineer
        </h2>

        {/* Typewriter Skills */}
        <h2 className="text-center md:text-left text-gray-700 dark:text-gray-300 text-2xl font-semibold">
          <span className="text-blue-600 dark:text-blue-400">
            <Typewriter
              words={[
                "HTML", "CSS", "JavaScript", "React", "React Native",
                "Next.js", "Node.js", "MongoDB", "TypeScript",
                "Bootstrap", "Tailwind CSS", "Express.js", "Git", "shadcn/ui"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-row gap-6">
          <Button onClick={toggleForm} variant="outline" className="bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-500 dark:hover:bg-orange-600 cursor-pointer">
            Hire Me
          </Button>
          <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer"  >
            <a
              href="/React&native.pdf"
              download

            >   Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0">
        <img
          src={sampleImage}
          alt="Virendra Uikey"
          className="w-[300px] md:w-[400px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {showForm && (
        <ContactForm showForm ={showForm} toggleForm={toggleForm}/>
        

      )}
    </div>
  );
}

export default Banner;
