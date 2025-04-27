import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Button } from './ui/button'
import sampleImage from '../assets/blogger.png';

function Banner() {
  return (
    <div className=" flex flex-row justify-around bg-gray-100 dark:bg-gray-700 p-6 rounded-lg flex flex-col items-center h-150">

    <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Software Developer
            <h2 className="text-green-700 dark:text-gray-300 text-center text-sm mt-5 " >
                Work Experiance More Then 2.5 Year
            </h2>
        </h1>
        <h2 className="text-gray-700 dark:text-gray-300 text-center text-2xl">
            
            <span className="text-blue-500 font-semibold text-4xl">
                <Typewriter
                    words={["HTML", "CSS"," JavaScript",'React', "React Native ", 'Next.js', 'Node.js', 'MongoDB', 'TypeScript',"Bootstrap", "Tailwind CSS"," Express.js", "Git", "shadcn/ui"]}
                    loop={0} // 0 = infinite
                    cursor
                    cursorStyle="|"
                    typeSpeed={10}
                    deleteSpeed={50}
                    delaySpeed={1000}   
                />
            </span>
        </h2>
        <div className="flex flex-row items-center gap-5">
            <Button variant="outline" className="bg-orange-400 text-white dark:bg-orange-400 dark:text-white">Hire</Button>
            <Button variant="outline" className="bg-blue-400 text-white dark:bg-blue-400 dark:text-white">Download Resume</Button>
        </div>

    </div>

    <img src={sampleImage} alt="Sample" className="rounded-lg mb-4" />
</div>
  )
}

export default Banner