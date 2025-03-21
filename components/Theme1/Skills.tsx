import Image from "next/image";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";

// Define the Skill interface
interface Skill {
    id: number;
    proficiencyIn: string;
    capability: number;
    logo: string;
    createdAt: string;
    updatedAt: string;
}

// Define the SkillsResponse interface
interface SkillsResponse {
    message: string;
    skills: Skill[];
}

const Skills = () => {
    // Hardcoded skills data
    const skillsData: SkillsResponse = {
        message: "Skills information retrieved successfully",
        skills: [
            {
                id: 1,
                proficiencyIn: "HTML",
                capability: 86,
                logo: "http://api.demo3.xdomainhost.com/1cd4eb3c159-DSC_1869-(2).JPG",
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 2,
                proficiencyIn: "CSS",
                capability: 83,
                logo: "http://api.demo3.xdomainhost.com/cd4eb3c159c-DSC_1014.JPG",
                createdAt: "2025-03-08T21:03:58.000Z",
                updatedAt: "2025-03-08T21:03:58.000Z"
            },
            {
                id: 3,
                proficiencyIn: "Bootstrap",
                capability: 68,
                logo: "http://api.demo3.xdomainhost.com/d4eb3c159cb-DSC_1902-(2).JPG",
                createdAt: "2025-03-08T21:04:14.000Z",
                updatedAt: "2025-03-08T21:04:14.000Z"
            },
            {
                id: 4,
                proficiencyIn: "Tailwind",
                capability: 87,
                logo: "http://api.demo3.xdomainhost.com/4eb3c159cb7-DSC_1902-(3).JPG",
                createdAt: "2025-03-08T21:04:34.000Z",
                updatedAt: "2025-03-08T21:04:34.000Z"
            },
            {
                id: 5,
                proficiencyIn: "Javascript",
                capability: 73,
                logo: "http://api.demo3.xdomainhost.com/eb3c159cb71-DSC_1902-(3).JPG",
                createdAt: "2025-03-08T21:04:55.000Z",
                updatedAt: "2025-03-08T21:04:55.000Z"
            },
            {
                id: 6,
                proficiencyIn: "React.js",
                capability: 71,
                logo: "http://api.demo3.xdomainhost.com/b3c159cb71a-DSC_1870-(2).JPG",
                createdAt: "2025-03-08T21:05:23.000Z",
                updatedAt: "2025-03-08T21:05:23.000Z"
            },
            {
                id: 7,
                proficiencyIn: "Next.js",
                capability: 78,
                logo: "http://api.demo3.xdomainhost.com/3c159cb71af-IMG_7010.jpg",
                createdAt: "2025-03-08T21:05:52.000Z",
                updatedAt: "2025-03-08T21:05:52.000Z"
            },
            {
                id: 8,
                proficiencyIn: "Node.js",
                capability: 67,
                logo: "http://api.demo3.xdomainhost.com/c159cb71af4-DSC_1902-(2).JPG",
                createdAt: "2025-03-08T21:06:04.000Z",
                updatedAt: "2025-03-08T21:06:04.000Z"
            },
            {
                id: 9,
                proficiencyIn: "MySql",
                capability: 55,
                logo: "http://api.demo3.xdomainhost.com/159cb71af42-DSC_1902-(3).JPG",
                createdAt: "2025-03-08T21:06:30.000Z",
                updatedAt: "2025-03-08T21:06:30.000Z"
            },
            {
                id: 10,
                proficiencyIn: "Mongoose",
                capability: 62,
                logo: "http://api.demo3.xdomainhost.com/59cb71af424-DSC_1870-(2).JPG",
                createdAt: "2025-03-08T21:06:42.000Z",
                updatedAt: "2025-03-08T21:06:42.000Z"
            },
            {
                id: 11,
                proficiencyIn: "Stripe",
                capability: 45,
                logo: "http://api.demo3.xdomainhost.com/9cb71af424a-DSC_1870-(2).JPG",
                createdAt: "2025-03-08T21:07:14.000Z",
                updatedAt: "2025-03-08T21:07:14.000Z"
            },
            {
                id: 12,
                proficiencyIn: "Redux.js",
                capability: 60,
                logo: "http://api.demo3.xdomainhost.com/cb71af424a5-DSC_1902-(2).JPG",
                createdAt: "2025-03-08T21:07:24.000Z",
                updatedAt: "2025-03-08T21:07:24.000Z"
            },
            {
                id: 13,
                proficiencyIn: "React Native",
                capability: 35,
                logo: "http://api.demo3.xdomainhost.com/b71af424a59-DSC_1902-(2).JPG",
                createdAt: "2025-03-08T21:08:00.000Z",
                updatedAt: "2025-03-08T21:08:00.000Z"
            },
            {
                id: 14,
                proficiencyIn: "C and Java",
                capability: 25,
                logo: "http://api.demo3.xdomainhost.com/71af424a599-DSC_1902-(2).JPG",
                createdAt: "2025-03-08T21:08:46.000Z",
                updatedAt: "2025-03-08T21:08:46.000Z"
            },
            {
                id: 15,
                proficiencyIn: "Typescript",
                capability: 65,
                logo: "http://api.demo3.xdomainhost.com/1af424a5996-DSC_1870-(2).JPG",
                createdAt: "2025-03-08T21:10:10.000Z",
                updatedAt: "2025-03-08T21:10:10.000Z"
            }
        ]
    };

    return (
        <div className="py-12 max-w-screen-xl">
            <Heading className="text-center md:mb-8 mb-4">Pro Skills</Heading>
            <Heading className="text-4xl text-center mb-12">Let’s Explore My Skills</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsData.skills.map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center p-3 rounded-xl border border-gray-300 hover:border-[#448C74] md:w-72 w-full">
                        <Image
                            src={skill.logo}
                            alt={skill.proficiencyIn}
                            className="h-16 w-16"
                            width={300}
                            height={200}
                            objectFit="cover"
                        />
                        <Paragraph className="text-lg font-medium my-4">{skill.proficiencyIn}</Paragraph>
                        <button className="bg-[#448C74] text-white flex items-center py-2 px-4 rounded-xl gap-x-2 w-full justify-center">
                            {skill.capability}%
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;