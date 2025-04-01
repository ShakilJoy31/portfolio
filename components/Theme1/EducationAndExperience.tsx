import { FiBook } from "react-icons/fi";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import CustomButton from "./Button";
import Image from "next/image";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import kyloApps1 from "../../assets/Screenshot (518).png";
import kyloApps2 from "../../assets/Screenshot (519).png";
import kyloApps3 from "../../assets/Screenshot (520).png";
import kyloApps4 from "../../assets/Screenshot (521).png";
import kyloApps5 from "../../assets/Screenshot (522).png";

import translense1 from "../../assets/Screenshot (523).png";
import translense2 from "../../assets/Screenshot (524).png";
import certifcate6 from '../../assets/Certificates/IMG-20250401-WA0018.jpg';
import certifcate7 from '../../assets/Certificates/IMG-20250401-WA0019.jpg';
import certifcate8 from '../../assets/Certificates/IMG-20250401-WA0020.jpg';


// Define the interfaces
interface Experience {
    endYear: string;
    id: number;
    organization: string;
    role: string;
    startYear: string;
    updatedAt: string;
    certificateImages?: string[]; // Added certificate images
}

interface ExperienceResponse {
    message: string;
    experience: Experience[];
}

interface Education {
    endYear: string;
    id: number;
    degree: string;
    institution: string;
    startYear: string;
    updatedAt: string;
    certificateImages?: string[]; // Added certificate images
}

interface EducationResponse {
    message: string;
    education: Education[];
}

const EducationAndExperience = () => {
    // Hardcoded experience data with certificate images
    const experienceData: ExperienceResponse = {
        message: "Experience records fetched successfully",
        experience: [
            {
                id: 1,
                organization: "Kylo Apps",
                role: "Full stack developer (Internship)",
                startYear: "2023-06-01",
                endYear: "2023-10-27",
                updatedAt: "2025-03-08T20:59:30.000Z",
                certificateImages: [
                    kyloApps1.src,
                    kyloApps2.src,
                    kyloApps3.src,
                    kyloApps4.src,
                    kyloApps5.src,
                ]
            },
            {
                endYear: "2024-06-29",
                id: 2,
                organization: "Translense Pvt Ltd",
                role: "Frontend Developer",
                startYear: "2024-01-11",
                updatedAt: "2025-03-08T21:02:32.000Z",
                certificateImages: [
                    translense1.src,
                    translense2.src
                ]
            },
            {
                endYear: "2024-12-31",
                id: 3,
                organization: "Bangladeshi Software Ltd",
                role: "Full stack developer",
                startYear: "2024-10-01",
                updatedAt: "2025-03-08T21:01:51.000Z",
                certificateImages: [
                    "https://via.placeholder.com/800x600/581845/FFFFFF?text=Bangladeshi+Software+Certificate",
                    "https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Bangladeshi+Software+Certificate+2"
                ]
            }
        ]
    };

    // Education data with certificate images
    const educationData: EducationResponse = {
        message: "Education records fetched successfully",
        education: [
            {
                endYear: "2024-12-31",
                id: 1,
                degree: "BSc in Computer Science and Engineering",
                institution: "Green University of Bangladesh",
                startYear: "2020-01-01",
                updatedAt: "2025-03-08T21:01:51.000Z",
                certificateImages: [
                    certifcate6.src
                ]
            },
            {
                endYear: "2019-12-31",
                id: 2,
                degree: "Higher Secondary Certificate",
                institution: "Bogura Cantonment Public School and Collage.",
                startYear: "2017-01-01",
                updatedAt: "2025-03-08T21:01:51.000Z",
                certificateImages: [
                    certifcate7.src
                ]
            },
            {
                endYear: "2016-12-31",
                id: 3,
                degree: "Secondary School Certificate",
                institution: "Bogura Cantonment Board High School.",
                startYear: "2014-01-01",
                updatedAt: "2025-03-08T21:01:51.000Z",
                certificateImages: [
                    certifcate8.src
                ]
            }
        ]
    };

    // Modal state management
    const [showCertificateModal, setShowCertificateModal] = useState(false);
    const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
    const [currentCertificates, setCurrentCertificates] = useState<string[]>([]);

    const handleShowCertificate = (certificates: string[]) => {
        setCurrentCertificates(certificates);
        setCurrentCertificateIndex(0);
        setShowCertificateModal(true);
    };

    const handleCloseModal = () => {
        setShowCertificateModal(false);
        setCurrentCertificates([]);
    };

    const handlePrevCertificate = () => {
        if (currentCertificateIndex > 0) {
            setCurrentCertificateIndex(currentCertificateIndex - 1);
        }
    };

    const handleNextCertificate = () => {
        if (currentCertificateIndex < currentCertificates.length - 1) {
            setCurrentCertificateIndex(currentCertificateIndex + 1);
        }
    };

    return (
        <div className="h-full max-w-screen-xl mt-32 md:flex grid gap-x-8 w-full gap-y-4 px-2 md:px-0">
            {/* Experience Section */}
            <div className="p-8 space-y-4 bg-[#363e61] rounded-xl w-full">
                <Heading className="text-3xl">Experience</Heading>
                <div className="border border-gray-200 rounded-xl">
                    {experienceData.experience.map((exp, index) => (
                        <div key={exp.id} className={`flex gap-x-4 ${experienceData.experience.length === index + 1 ? '' : 'border-b border-gray-200'} py-8`}>
                            <span className="p-2 bg-gray-100 h-10 ml-1 rounded-md">
                                <FiBook size={25} color={'#448C74'} />
                            </span>
                            <div className='space-y-2 w-full'>
                                <Paragraph className="">{exp.startYear} - {exp.endYear}</Paragraph>
                                <Heading className="text-xl">{exp.organization}</Heading>
                                <Paragraph className="">{exp.role}</Paragraph>

                                {exp.certificateImages && exp.certificateImages.length > 0 && (
                                    <div className="pt-2">
                                        <CustomButton disabled={exp.organization === 'Bangladeshi Software Ltd'}
                                            onClick={() => handleShowCertificate(exp.certificateImages!)}
                                            className="bg-blue-700 px-2 py-1.5 hover:bg-blue-800"
                                        >
                                            Show Certificate
                                        </CustomButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="p-8 space-y-4 bg-[#363e61] rounded-xl w-full">
                <Heading className="text-3xl">Education</Heading>
                <div className="border border-gray-200 rounded-xl">
                    {educationData.education.map((edc, index) => (
                        <div key={edc.id} className={`flex gap-x-4 ${educationData.education.length === index + 1 ? '' : 'border-b border-gray-200'} py-8`}>
                            <span className="p-2 bg-gray-100 h-10 ml-1 rounded-md">
                                <FiBook size={25} color={'#448C74'} />
                            </span>
                            <div className='space-y-2 w-full'>
                                <Paragraph className="">{edc.startYear} - {edc.endYear}</Paragraph>
                                <Heading className="text-xl">{edc.degree}</Heading>
                                <Paragraph className="">{edc.institution}</Paragraph>

                                {edc.certificateImages && edc.certificateImages.length > 0 && (
                                    <div className="pt-2">
                                        <CustomButton
                                            onClick={() => handleShowCertificate(edc.certificateImages!)}
                                            className="bg-blue-700 px-2 py-1.5 hover:bg-blue-800"
                                        >
                                            Show Certificate
                                        </CustomButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            {showCertificateModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <motion.div initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{ duration: 0.3 }} className="bg-transparent p-6 w-full relative max-w-4xl">
                        <div className="flex w-full h-full items-center justify-between">
                            <button
                                className={`text-white rounded-full hover:text-gray-300 ${currentCertificateIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handlePrevCertificate}
                                disabled={currentCertificateIndex === 0}
                            >
                                <FaCaretLeft size={50} />
                            </button>

                            <div className="grid w-full">
                                <div className="flex justify-end mb-2">
                                    <button
                                        className="text-white hover:text-gray-300 rounded-xl text-xl"
                                        onClick={handleCloseModal}
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="relative w-full h-[70vh]">
                                    <Image
                                        src={currentCertificates[currentCertificateIndex]}
                                        alt="Certificate"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Display current image index / total images */}
                                <div className="flex justify-center mt-4">
                                    <span className="text-gray-200">
                                        {currentCertificateIndex + 1} of {currentCertificates.length}
                                    </span>
                                </div>
                            </div>

                            <button
                                className={`text-white rounded-full hover:text-gray-300 ${currentCertificateIndex === currentCertificates.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handleNextCertificate}
                                disabled={currentCertificateIndex === currentCertificates.length - 1}
                            >
                                <FaCaretRight size={50} />
                            </button>
                        </div>
                    </motion.div>
                    
                </div>
            )}
            
        </div>
    );
};

export default EducationAndExperience;