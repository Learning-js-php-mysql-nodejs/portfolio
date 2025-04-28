import React from 'react'

const Description = () => {
  return (
    <div className="grid grid-cols-1 justify-center mb-8 mt-20 p-6">
    <div className="col-span-1 w-full max-w-8xl mx-auto h-auto bg-gray-100 dark:bg-gray-700 p-8 rounded-lg flex flex-col  text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Work Experience
        </h2>

        <div className="text-gray-700 dark:text-gray-300 text-md leading-relaxed max-w-3xl space-y-4 text-center items-center mx-auto mb-4">
            <p>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend Project Lead</span> at
                <span className="font-semibold text-blue-600 dark:text-blue-400"> Eminence Infotech Pvt Ltd, Indore</span> —
                <span className="font-semibold text-green-600 dark:text-green-400"> 2.8 Years</span> experience.
            </p>
            
            
        </div>
        <p className='items-start text-start text-gray-700 dark:text-gray-300 '>
            Led frontend development for scalable projects, ensuring smooth user experiences and highly maintainable codebases.Optimized application load times by
            <span className="font-bold text-rose-600 dark:text-rose-400"> 50%</span> using advanced caching strategies and performance enhancements and using <span className="font-semibold text-purple-600 dark:text-purple-400"> lazy loading</span> .  Reduced unwanted API calls with
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400"> Redux Toolkit</span> and
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400"> Context API</span>.Implemented
                    for REST APIs, improving user experience and page speed scores.  Mentored junior developers, conducted code reviews, and ensured best practices across all frontend projects.
            </p>
    </div>
</div>
  )
}

export default Description