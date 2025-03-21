import { FiBook } from "react-icons/fi";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";

// Define the interfaces
interface Experience {
    createdAt: string;
    endYear: string;
    id: number;
    organization: string;
    role: string;
    startYear: string;
    updatedAt: string;
}

interface ExperienceResponse {
    message: string;
    experience: Experience[];
}

interface Education {
    createdAt: string;
    endYear: string;
    id: number;
    degree: string;
    institution: string;
    startYear: string;
    updatedAt: string;
}

interface EducationResponse {
    message: string;
    education: Education[];
}

const EducationAndExperience = () => {
    // Hardcoded experience data
    const experienceData: ExperienceResponse = {
        message: "Experience records fetched successfully",
        experience: [
            {
                createdAt: "2025-03-08T20:59:30.000Z",
                endYear: "2023-10-27",
                id: 1,
                organization: "Kylo Apps",
                role: "Full stack developer (Internship)",
                startYear: "2023-06-01",
                updatedAt: "2025-03-08T20:59:30.000Z"
            },
            {
                createdAt: "2025-03-08T21:00:31.000Z",
                endYear: "2024-06-29",
                id: 2,
                organization: "Translense Pvt Ltd",
                role: "Frontend Developer",
                startYear: "2024-01-11",
                updatedAt: "2025-03-08T21:02:32.000Z"
            },
            {
                createdAt: "2025-03-08T21:01:51.000Z",
                endYear: "2024-12-31",
                id: 3,
                organization: "Bangladeshi Software Ltd",
                role: "Full stack developer",
                startYear: "2024-10-01",
                updatedAt: "2025-03-08T21:01:51.000Z"
            }
        ]
    };

    // Placeholder for education data (to be filled in later)
    const educationData: EducationResponse = {
        message: "Education records fetched successfully",
        education: [
            // Add education data here if available
            {
                createdAt: "2025-03-08T21:01:51.000Z",
                endYear: "2024-12-31",
                id: 1,
                degree: "Bachelor of Science in Computer Science",
                institution: "University of Example",
                startYear: "2020-01-01",
                updatedAt: "2025-03-08T21:01:51.000Z"
            }
        ]
    };

    return (
        <div className="h-full text-black max-w-screen-xl mt-32 md:flex grid gap-x-8 w-full gap-y-4 px-2 md:px-0">
            {/* Experience Section */}
            <div className="p-8 space-y-4 bg-white rounded-xl w-full">
                <Heading className="text-3xl">Experience</Heading>
                <div className="border border-gray-200 rounded-xl">
                    {experienceData.experience.map((exp, index) => (
                        <div key={exp.id} className={`flex gap-x-4 ${experienceData.experience.length === index + 1 ? '' : 'border-b border-gray-200'} py-8`}>
                            <span className="p-2 bg-gray-100 h-10 ml-1 rounded-md">
                                <FiBook size={25} color={'#448C74'} />
                            </span>
                            <div className='space-y-2'>
                                <Paragraph className="">{exp.startYear} - {exp.endYear}</Paragraph>
                                <Heading className="text-xl">{exp.organization}</Heading>
                                <Paragraph className="">{exp.role}</Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="p-8 space-y-4 bg-white rounded-xl w-full">
                <Heading className="text-3xl">Education</Heading>
                <div className="border border-gray-200 rounded-xl">
                    {educationData.education.map((edc, index) => (
                        <div key={edc.id} className={`flex gap-x-4 ${educationData.education.length === index + 1 ? '' : 'border-b border-gray-200'} py-8`}>
                            <span className="p-2 bg-gray-100 h-10 ml-1 rounded-md">
                                <FiBook size={25} color={'#448C74'} />
                            </span>
                            <div className='space-y-2'>
                                <Paragraph className="">{edc.startYear} - {edc.endYear}</Paragraph>
                                <Heading className="text-xl">{edc.degree}</Heading>
                                <Paragraph className="">{edc.institution}</Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationAndExperience;