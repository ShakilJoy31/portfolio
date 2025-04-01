import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Importing project images
import prothomAlo1 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (526).png'
import prothomAlo2 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (527).png'
import prothomAlo3 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (528).png'
import prothomAlo4 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (529).png'
import prothomAlo5 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (530).png'
import prothomAlo6 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (531).png'
import prothomAlo7 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (532).png'
import prothomAlo8 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (533).png'
import prothomAlo9 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (534).png'
import prothomAlo10 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (535).png'
import prothomAlo11 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (536).png'
import prothomAlo12 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (537).png'
import prothomAlo13 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (538).png'
import prothomAlo14 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (539).png'
import prothomAlo15 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (540).png'
import prothomAlo16 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (541).png'
import prothomAlo17 from '../../assets/Projects Screenshots/Prothomalo/Screenshot (542).png'

import instute1 from '../../assets/Projects Screenshots/Instute/Screenshot (545).png'
import instute2 from '../../assets/Projects Screenshots/Instute/Screenshot (546).png'
import instute3 from '../../assets/Projects Screenshots/Instute/Screenshot (547).png'
import instute4 from '../../assets/Projects Screenshots/Instute/Screenshot (548).png'
import instute5 from '../../assets/Projects Screenshots/Instute/Screenshot (549).png'
import instute6 from '../../assets/Projects Screenshots/Instute/Screenshot (550).png'
import instute7 from '../../assets/Projects Screenshots/Instute/Screenshot (551).png'
import instute8 from '../../assets/Projects Screenshots/Instute/Screenshot (552).png'
import instute9 from '../../assets/Projects Screenshots/Instute/Screenshot (553).png'
import instute10 from '../../assets/Projects Screenshots/Instute/Screenshot (554).png'
import instute11 from '../../assets/Projects Screenshots/Instute/Screenshot (555).png'
import instute12 from '../../assets/Projects Screenshots/Instute/Screenshot (556).png'
import instute13 from '../../assets/Projects Screenshots/Instute/Screenshot (557).png'
import instute14 from '../../assets/Projects Screenshots/Instute/Screenshot (558).png'
import instute15 from '../../assets/Projects Screenshots/Instute/Screenshot (559).png'

import eCrms1 from '../../assets/Projects Screenshots/e-commarse/Screenshot (560).png'
import eCrms2 from '../../assets/Projects Screenshots/e-commarse/Screenshot (561).png'
import eCrms3 from '../../assets/Projects Screenshots/e-commarse/Screenshot (562).png'
import eCrms4 from '../../assets/Projects Screenshots/e-commarse/Screenshot (563).png'

import tradeSent68 from '../../assets/Projects Screenshots/Trading/Screenshot (566).png'
import tradeSent69 from '../../assets/Projects Screenshots/Trading/Screenshot (567).png'
import tradeSent70 from '../../assets/Projects Screenshots/Trading/Screenshot (568).png'
import tradeSent71 from '../../assets/Projects Screenshots/Trading/Screenshot (569).png'
import tradeSent72 from '../../assets/Projects Screenshots/Trading/Screenshot (570).png'
import tradeSent73 from '../../assets/Projects Screenshots/Trading/Screenshot (571).png'
import tradeSent74 from '../../assets/Projects Screenshots/Trading/Screenshot (572).png'
import tradeSent75 from '../../assets/Projects Screenshots/Trading/Screenshot (573).png'
import tradeSent77 from '../../assets/Projects Screenshots/Trading/Screenshot (575).png'
import tradeSent78 from '../../assets/Projects Screenshots/Trading/Screenshot (576).png'
import tradeSent79 from '../../assets/Projects Screenshots/Trading/Screenshot (577).png'
import tradeSent80 from '../../assets/Projects Screenshots/Trading/Screenshot (578).png'
import tradeSent81 from '../../assets/Projects Screenshots/Trading/Screenshot (579).png'

// Define the Project interface
interface Project {
    id: number;
    projectName: string;
    projectType: string;
    projectImages: string[];
    githubLink: string;
    liveLink: string;
    createdAt: string;
    updatedAt: string;
}

// Define the ProjectsResponse interface
interface ProjectsResponse {
    message: string;
    projects: Project[];
}

const Portfolio = () => {
    // Hardcoded project data
    const projectData: ProjectsResponse = {
        message: "Projects retrieved successfully",
        projects: [
            {
                id: 1,
                projectName: "Sangbadpatra",
                projectType: "News Paper",
                githubLink: "https://github.com/bangladeshi-software/sangbadpatra",
                liveLink: "https://prothomalo.demo1.xdomainhost.com/",
                projectImages: [
                    prothomAlo1.src,
                    prothomAlo2.src,
                    prothomAlo3.src,
                    prothomAlo4.src,
                    prothomAlo5.src,
                    prothomAlo6.src,
                    prothomAlo7.src,
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 2,
                projectName: "Sangbadpatra Admin",
                projectType: "News Paper",
                githubLink: "https://github.com/bangladeshi-software/sangbadpatra-admin",
                liveLink: "https://admin.prothomalo.demo1.xdomainhost.com/",
                projectImages: [
                    prothomAlo9.src,
                    prothomAlo8.src,
                    prothomAlo10.src,
                    prothomAlo11.src,
                    prothomAlo12.src,
                    prothomAlo13.src,
                    prothomAlo14.src,
                    prothomAlo15.src,
                    prothomAlo16.src,
                    prothomAlo17.src,
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 3,
                projectName: "J.N. KAUL INSTITUTE OF EDUCATION",
                projectType: "Education",
                githubLink: "https://github.com/ShakilJoy31/hgs_frontend",
                liveLink: "https://tourmaline-pavlova-786578.netlify.app",
                projectImages: [
                    instute1.src,
                    instute2.src,
                    instute3.src,
                    instute4.src,
                    instute5.src,
                    instute6.src,
                    instute7.src,
                    instute8.src,
                    instute9.src,
                    instute10.src,
                    instute11.src,
                    instute12.src,
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 4,
                projectName: "Temparature Hub",
                projectType: "Education",
                githubLink: "https://github.com/ShakilJoy31/show-temperature",
                liveLink: "https://shakiljoy31.github.io/show-temperature/index.html",
                projectImages: [
                    instute13.src,
                    instute14.src,
                    instute15.src
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 5,
                projectName: "Omrrito Restaurant",
                projectType: "E-Commarse",
                githubLink: "https://github.com/ShakilJoy31/restaurant-app",
                liveLink: "https://restaurant-app-flame.vercel.app",
                projectImages: [
                    eCrms1.src,
                    eCrms2.src,
                    eCrms3.src,
                    eCrms4.src
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 6,
                projectName: "Trade-sent",
                projectType: "Online Trading",
                githubLink: "https://github.com/ShakilJoy31/tradesent",
                liveLink: "https://tradesent.onrender.com",
                projectImages: [
                    tradeSent68.src,
                    tradeSent69.src,
                    tradeSent70.src,
                    tradeSent71.src,
                    tradeSent72.src,
                    tradeSent73.src,
                    tradeSent74.src,
                    tradeSent75.src,
                    tradeSent77.src,
                    tradeSent78.src,
                    tradeSent79.src,
                    tradeSent80.src,
                    tradeSent81.src
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            }
        ]
    };

    const [modalData, setModalData] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("Show All");
    const [projectToShowOnModal, setProjectToShowOnModal] = useState<Project[]>([]);

    const projects = projectData?.projects ?? [];
    const categories: string[] = ["Show All"];
    for (const project of projects) {
        if (!categories.includes(project?.projectType)) {
            categories.push(project?.projectType);
        }
    }

    const filteredData =
        activeCategory === "Show All" ? projectData?.projects : projectData?.projects.filter(item => item.projectType === activeCategory);

    const handleOpenModal = (getProject: Project[]) => {
        setModalData(true);
        setProjectToShowOnModal(getProject);
    };

    const handleCloseModal = () => {
        setModalData(false);
        setCurrentIndex(0);
        setProjectToShowOnModal([]);
    };

    return (
        <div className="h-full max-w-screen-xl bg-[#363e61] rounded-xl px-8 py-10 w-full ">
            <div className="">
                <Heading className="text-4xl font-bold flex justify-center">Works & Projects</Heading>
                <div className="flex justify-center">
                    <Paragraph className="text-gray-400 max-w-xl py-6">Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.</Paragraph>
                </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 gap-y-4 md:gap-y-0 md:flex gap-x-6 mb-6">
                {categories.map((category) => (
                    <p
                        onClick={() => setActiveCategory(category)}
                        key={category}
                        className={`cursor-pointer pb-1 transition-all font-semibold ${activeCategory === category
                            ? "text-white border-b-4 border-white"
                            : "text-gray-400"
                            }`}
                    >
                        {category}
                    </p>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
                {filteredData.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#363e61] border rounded-lg overflow-hidden transition-transform duration-300"
                    >
                        <div className="w-full h-64 bg-gray-200 relative">
                            <Image
                                src={item?.projectImages[0]}
                                alt={item?.projectName}
                                className="w-full h-full object-cover"
                                width={300}
                                height={200}
                                objectFit="cover"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={() => handleOpenModal([item])}
                                    className="p-4 rounded-full font-semibold bg-[#448C74] text-white transition"
                                >
                                    <span><GoArrowUpRight size={25}></GoArrowUpRight></span>
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            <Heading className="text-gray-500">{item?.projectType}</Heading>
                            <div className="flex justify-between items-center">
                                <Heading className="text-xl font-semibold text-white">{item?.projectName}</Heading>
                                <div className="flex gap-4">
                                    {item.githubLink && (
                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gray-400 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {item.liveLink && (
                                        <a
                                            href={item.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gray-400 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalData && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div
                        className="bg-transparent p-6 w-full relative transform scale-95 opacity-0 transition-all duration-300"
                        style={{
                            animation: modalData ? "fadeIn 0.3s ease forwards" : "fadeOut 0.3s ease forwards",
                        }}
                    >
                        <motion.div initial={{ scale: 0.3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.3, opacity: 0 }}
                            transition={{ duration: 0.3 }} className="flex w-full h-full items-center justify-between">
                            <button
                                className="text-white rounded-full hover:text-gray-300"
                                onClick={() => {
                                    if (currentIndex > 0) {
                                        setCurrentIndex(currentIndex - 1);
                                    }
                                }}
                            >
                                <FaCaretLeft size={50} />
                            </button>

                            <div className="grid max-w-screen-lg">
                                <div className="flex justify-end mb-2">
                                    <button
                                        className="text-white hover:text-gray-300 rounded-xl text-xl"
                                        onClick={handleCloseModal}
                                    >
                                        ✕
                                    </button>
                                </div>

                                {projectToShowOnModal[0]?.projectImages && (
                                    <div>
                                        <Image
                                            src={projectToShowOnModal[0].projectImages[currentIndex]}
                                            alt="Project Image"
                                            className="w-full h-full "
                                            width={300}
                                            height={200}
                                            objectFit="cover"
                                        />

                                        {/* Display current image index / total images */}
                                        <div className="flex justify-end mt-2">
                                            <span className="text-gray-200">{currentIndex + 1} of {projectToShowOnModal[0]?.projectImages.length}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                className="text-white rounded-full hover:text-gray-300"
                                onClick={() => {
                                    if (currentIndex < projectToShowOnModal[0]?.projectImages.length - 1) {
                                        setCurrentIndex(currentIndex + 1);
                                    }
                                }}
                            >
                                <FaCaretRight size={50} />
                            </button>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;