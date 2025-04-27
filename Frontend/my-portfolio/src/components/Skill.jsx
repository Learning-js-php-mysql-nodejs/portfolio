import reactIcon from "../assets/react.png"
import reactNativeIcon from "../assets/react.png"
import nodeIcon from "../assets/node.png"
import javascriptIcon from "../assets/javascriptsmall.png"
import htmlIcon from "../assets/HTML5.png"
import cssIcon from "../assets/CSS3-01.png"
// import tailwindIcon from "../assets/tailwind.png"
// import bootstrapIcon from "../assets/bootstrap.png"
import expressIcon from "../assets/express.png"
import mongodbIcon from "../assets/mongodbs.png"
import nextIcon from "../assets/Nextjs.png"
import typescriptIcon from "../assets/typescrip.png"
import bootstrap from "../assets/bootstrapsmall.png"
import gitIcon from "../assets/git.png"
// import githubIcon from "../assets/github.png"

const skills = [
  { label: "HTML", bgColor: "bg-orange-200", img: htmlIcon },
  { label: "CSS", bgColor: "bg-pink-200", img: cssIcon },
  { label: "Javascript", bgColor: "bg-yellow-200", img: javascriptIcon },
  { label: "React", bgColor: "bg-blue-200", img: reactIcon },
  { label: "React Native", bgColor: "bg-green-200", img: reactNativeIcon },
  { label: "Node.js", bgColor: "bg-lime-200", img: nodeIcon },
  { label: "Express", bgColor: "bg-cyan-200", img: expressIcon },
  { label: "MongoDB", bgColor: "bg-purple-200", img: mongodbIcon },
  { label: "Next.js", bgColor: "bg-rose-200", img: nextIcon },
  { label: "TypeScript", bgColor: "bg-indigo-200", img: typescriptIcon },
  { label: "Bootstrap", bgColor: "bg-teal-200", img: bootstrap },
  { label: "Git", bgColor: "bg-amber-200", img: gitIcon },
];
  
  export default function Skill() {
    return (
      <div className="flex flex-col justify-center mt-20 items-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-extrabold text-gray-900 dark:text-white mb-10">Technical Skills</h2>
  
        <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 items-center w-full px-4 align-center">
          {skills.map((skill, index) => (
            <div
              key={`${skill.label}-${index}`}
              className={`flex flex-shrink-0 w-60 h-40 rounded-2xl shadow-md ${skill.bgColor} flex-col items-center justify-center p-6 transition-transform hover:scale-105`}
            >
              <img
                src={skill.img}
                alt={skill.label}
                className="w-24 h-24 object-contain mb-4"
              />
              <span className="text-black text-lg font-semibold dark:text-white-100">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  