const skills = [
    { label: "React", bgColor: "bg-blue-500", img: "/images/frontend.png" },
    { label: "React Native", bgColor: "bg-green-500", img: "/images/backend.png" },
    { label: "Node.js", bgColor: "bg-yellow-500", img: "/images/mobile.png" },
    { label: "MongoDB", bgColor: "bg-purple-500", img: "/images/cloud.png" },
    { label: "Next.js", bgColor: "bg-red-500", img: "/images/security.png" },
  ];
  
  export default function Skill() {
    return (
      <div className="flex flex-col justify-center mt-10 items-center">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
  
        <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 items-center w-full px-4">
          {skills.map((skill, index) => (
            <div
              key={`${skill.label}-${index}`}
              className={`flex flex-shrink-0 w-60 h-40 rounded-2xl shadow-md ${skill.bgColor} flex-col items-center justify-center p-6 transition-transform hover:scale-105`}
            >
              <img
                src={skill.img}
                alt={skill.label}
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-white text-lg font-semibold dark:text-gray-100">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  