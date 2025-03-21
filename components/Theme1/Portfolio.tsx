import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

// Define the Project interface
interface Project {
    id: number;
    projectName: string;
    projectType: string;
    projectImages: string[];
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
                projectName: "E-commerce Website",
                projectType: "Web Development",
                projectImages: [
                    "https://via.placeholder.com/600x400",
                    "https://via.placeholder.com/600x400/FF0000",
                    "https://via.placeholder.com/600x400/00FF00"
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 2,
                projectName: "Mobile App UI",
                projectType: "UI/UX Design",
                projectImages: [
                    "https://via.placeholder.com/600x400/0000FF",
                    "https://via.placeholder.com/600x400/FFFF00"
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 3,
                projectName: "Portfolio Website",
                projectType: "Web Development",
                projectImages: [
                    "https://via.placeholder.com/600x400/00FFFF",
                    "https://via.placeholder.com/600x400/FF00FF"
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 4,
                projectName: "Social Media Dashboard",
                projectType: "Web Development",
                projectImages: [
                    "https://via.placeholder.com/600x400/FFA500",
                    "https://via.placeholder.com/600x400/800080"
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 5,
                projectName: "Landing Page Design",
                projectType: "UI/UX Design",
                projectImages: [
                    "https://via.placeholder.com/600x400/008000",
                    "https://via.placeholder.com/600x400/000080"
                ],
                createdAt: "2025-03-08T21:03:42.000Z",
                updatedAt: "2025-03-08T21:03:42.000Z"
            },
            {
                id: 6,
                projectName: "Blog Platform",
                projectType: "Web Development",
                projectImages: [
                    "https://via.placeholder.com/600x400/FFC0CB",
                    "https://via.placeholder.com/600x400/FF4500"
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
        setProjectToShowOnModal([]);
    };

    return (
        <div className="h-full max-w-screen-xl bg-white rounded-xl px-8 py-10 w-full ">
            <div className="text-black">
                <Heading className="text-4xl font-bold flex justify-center">Works & Projects</Heading>
                <div className="flex justify-center">
                    <Paragraph className="text-[#444444] max-w-xl py-6">Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.</Paragraph>
                </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 gap-y-4 md:gap-y-0 md:flex gap-x-6 mb-6">
                {categories.map((category) => (
                    <p
                        onClick={() => setActiveCategory(category)}
                        key={category}
                        className={`cursor-pointer pb-1 transition-all font-semibold ${activeCategory === category
                            ? "text-[#448C74] border-b-4 border-[#448C74]"
                            : "text-gray-500"
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
                        className="group relative bg-white border rounded-lg overflow-hidden transition-transform duration-300"
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
                            <Heading className="text-xl font-semibold text-gray-500">{item?.projectName}</Heading>
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
                        <div className="flex w-full h-full items-center justify-between">
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
                                            className="w-full h-full object-cover"
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;