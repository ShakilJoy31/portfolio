import Image from "next/image";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";


import logo1 from '../../assets/Logos/html.jpg'
import logo2 from '../../assets/Logos/css.jpg'
import logo3 from '../../assets/Logos/tailwind.jpg'
import logo4 from '../../assets/Logos/bootstrap.png'
import logo5 from '../../assets/Logos/javascript.jpg'
import logo6 from '../../assets/Logos/react.jpg'
import logo7 from '../../assets/Logos/react native.jpg'
import logo8 from '../../assets/Logos/Redux.jpg'
import logo9 from '../../assets/Logos/next.jpg'
import logo10 from '../../assets/Logos/node.jpg'
import logo11 from '../../assets/Logos/mysql.jpg'
import logo12 from '../../assets/Logos/mongodb.jpg'
import logo13 from '../../assets/Logos/stripe.jpg'
import logo14 from '../../assets/Logos/typescript.jpg'

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            proficiencyIn: "HTML",
            capability: 86,
            logo: logo1.src,
            createdAt: "2025-03-08T21:03:42.000Z",
            updatedAt: "2025-03-08T21:03:42.000Z",
        },
        {
            id: 2,
            proficiencyIn: "CSS",
            capability: 83,
            logo: logo2.src,
            createdAt: "2025-03-08T21:03:58.000Z",
            updatedAt: "2025-03-08T21:03:58.000Z",
        },
        {
            id: 3,
            proficiencyIn: "Bootstrap",
            capability: 68,
            logo: logo4.src,
            createdAt: "2025-03-08T21:04:14.000Z",
            updatedAt: "2025-03-08T21:04:14.000Z",
        },
        {
            id: 4,
            proficiencyIn: "Tailwind",
            capability: 87,
            logo: logo3.src,
            createdAt: "2025-03-08T21:04:34.000Z",
            updatedAt: "2025-03-08T21:04:34.000Z",
        },
        {
            id: 5,
            proficiencyIn: "Javascript",
            capability: 73,
            logo: logo5.src,
            createdAt: "2025-03-08T21:04:55.000Z",
            updatedAt: "2025-03-08T21:04:55.000Z",
        },
        {
            id: 6,
            proficiencyIn: "React.js",
            capability: 71,
            logo: logo6.src,
            createdAt: "2025-03-08T21:05:23.000Z",
            updatedAt: "2025-03-08T21:05:23.000Z",
        },
        {
            id: 7,
            proficiencyIn: "Next.js",
            capability: 78,
            logo: logo9.src,
            createdAt: "2025-03-08T21:05:52.000Z",
            updatedAt: "2025-03-08T21:05:52.000Z",
        },
        {
            id: 8,
            proficiencyIn: "Node.js",
            capability: 67,
            logo: logo10.src,
            createdAt: "2025-03-08T21:06:04.000Z",
            updatedAt: "2025-03-08T21:06:04.000Z",
        },
        {
            id: 9,
            proficiencyIn: "MySql",
            capability: 55,
            logo: logo11.src,
            createdAt: "2025-03-08T21:06:30.000Z",
            updatedAt: "2025-03-08T21:06:30.000Z",
        },
        {
            id: 10,
            proficiencyIn: "Mongoose",
            capability: 62,
            logo: logo12.src,
            createdAt: "2025-03-08T21:06:42.000Z",
            updatedAt: "2025-03-08T21:06:42.000Z",
        },
        {
            id: 11,
            proficiencyIn: "Stripe",
            capability: 45,
            logo: logo13.src,
            createdAt: "2025-03-08T21:07:14.000Z",
            updatedAt: "2025-03-08T21:07:14.000Z",
        },
        {
            id: 12,
            proficiencyIn: "Redux.js",
            capability: 60,
            logo: logo8.src,
            createdAt: "2025-03-08T21:07:24.000Z",
            updatedAt: "2025-03-08T21:07:24.000Z",
        },
        {
            id: 13,
            proficiencyIn: "React Native",
            capability: 35,
            logo: logo7.src,
            createdAt: "2025-03-08T21:08:00.000Z",
            updatedAt: "2025-03-08T21:08:00.000Z",
        },
        {
            id: 14,
            proficiencyIn: "C and Java",
            capability: 25,
            logo: "http://api.demo3.xdomainhost.com/71af424a599-DSC_1902-(2).JPG", // No local image provided
            createdAt: "2025-03-08T21:08:46.000Z",
            updatedAt: "2025-03-08T21:08:46.000Z",
        },
        {
            id: 15,
            proficiencyIn: "Typescript",
            capability: 65,
            logo: logo14.src,
            createdAt: "2025-03-08T21:10:10.000Z",
            updatedAt: "2025-03-08T21:10:10.000Z",
        },
    ]
    

    // Gradient colors based on skill category
    const getSkillGradient = (skillName: string) => {
        const frontend = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"];
        const backend = ["Node.js", "MySQL", "Mongoose"];
        const tools = ["Stripe", "Redux", "TypeScript"];

        if (frontend.includes(skillName)) return "from-purple-500 to-pink-500";
        if (backend.includes(skillName)) return "from-blue-500 to-cyan-400";
        if (tools.includes(skillName)) return "from-amber-500 to-orange-500";
        return "from-emerald-500 to-teal-400";
    };

    return (
        <section className="relative py-12 px-0 w-full overflow-hidden rounded-2xl my-4">
            {/* Full-width animated background elements */}
            <div className="absolute inset-0 overflow-hidden w-full">
                <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-40 -right-20 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-none">
                <div className="text-center mb-20 w-full px-4 sm:px-6">
                    
                    <Heading className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
                    </Heading>
                    <Paragraph className="text-lg text-white/80 max-w-3xl mx-auto">
                        The tools and technologies I wield to create digital magic
                    </Paragraph>
                </div>

                {/* Full-width container with horizontal scrolling on mobile */}
                <div className="w-full overflow-x-auto px-4 sm:px-6 hide-scrollbar">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 min-w-max sm:min-w-0 w-full max-w-[2000px] mx-auto">
                        {skillsData.map((skill) => (
                            <div
                                key={skill.id}
                                className="relative group perspective-1000 w-full "
                            >
                                {/* Glass morphism card */}
                                <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 group-hover:shadow-xl group-hover:shadow-purple-500/20 transform group-hover:-translate-y-2">
                                    <div className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${getSkillGradient(skill.proficiencyIn)}`}></div>

                                    <div className="relative p-6 flex flex-col items-center text-center">
                                        {/* Skill logo with gradient ring */}
                                        <div className={`relative mb-6 w-28 h-28 rounded-2xl flex items-center justify-center p-1 bg-gradient-to-br ${getSkillGradient(skill.proficiencyIn)}`}>
                                            <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center p-1">
                                                <Image
                                                    src={skill.logo}
                                                    alt={skill.proficiencyIn}
                                                    width={40}
                                                    height={40}
                                                    className="filter invert w-full h-full rounded-2xl"
                                                />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">{skill.proficiencyIn}</h3>

                                        {/* Animated progress circle */}
                                        <div className="relative w-24 h-24 mb-4">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    fill="none"
                                                    stroke="#2D3748"
                                                    strokeWidth="8"
                                                />
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    fill="none"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="8"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${2.5 * skill.capability} 250`}
                                                    transform="rotate(-90 50 50)"
                                                    className="transition-all duration-1000 ease-out"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-white">{skill.capability}%</span>
                                            </div>
                                        </div>

                                        {/* Skill level indicator */}
                                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                                            <div
                                                className={`h-1.5 rounded-full bg-gradient-to-r ${getSkillGradient(skill.proficiencyIn)}`}
                                                style={{ width: `${skill.capability}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SVG gradient definition */}
            <svg className="hidden">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Custom CSS for hiding scrollbar */}
            <style jsx>{`
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}</style>
        </section>
    );
};

export default Skills;