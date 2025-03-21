"use client"

import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import homeLogo from '../../assets/profile.jpg';
import { RiDownloadLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiGithubLine } from "react-icons/ri";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import Link from "next/link";

const AboutSection = () => {
    const userData = {
        message: "User information fetched successfully",
        user: {
            address: "Digholia, Khulna, Bangladesh",
            availableFor: "Full stack development",
            biography: "I am a passionate and skilled web application developer with a strong background in creating dynamic, user-friendly websites and software solutions. With expertise in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React, as well as back-end development using Python, Node.js, and database management with mysql and mongoose. I like to build seamless, scalable applications.",
            businessEmail: "shakidul31@gmail.com",
            contactNo: "+8801761043883",
            createdAt: "2025-03-08T20:48:31.000Z",
            id: 1,
            name: "Shakidul Islam Shakil",
            officeAddress: "Khulna, Bangladesh",
            profession: "Web Application Developer",
            profilePicture: null,
            slidingDescription: "Web application development is your gateway to creating dynamic, interactive, and scalable digital solutions. By combining front-end technologies like HTML, CSS, and JavaScript with powerful back-end frameworks such as Node.js you can build seamless, secure, and responsive applications.",
            socialMedia: {
                facebook: "https://www.facebook.com/shakil.ahammedjoy.39/",
                github: "https://github.com/ShakilJoy31",
                linkedin: "https://www.linkedin.com/in/shakidul-islam-shakil-213398354/",
                twitter: "https://x.com/?lang=en"
            },
            updatedAt: "2025-03-08T20:50:47.000Z",
            wordDescription: "I design, build, and maintain dynamic websites using HTML, CSS, JavaScript, and frameworks, ensuring seamless functionality and an exceptional user experience."
        }
    };

    return (
        <div className="h-full flex items-center justify-between text-black max-w-screen-xl mt-4">
            <div className="grid md:flex justify-between w-full gap-x-8 gap-y-4 md:gap-y-0">
                <div className="grid py-16 px-4 bg-white rounded-xl h-full md:w-1/3 w-full">
                    <Image style={{ border: '3px dashed #448C74' }}
                        src={homeLogo}
                        alt='Home logo'
                        className="lg:h-[350px] lg:w-[350px] w-[300px] h-[300px] block mx-auto rounded-full p-2"
                        width={300}
                        height={200}
                        objectFit="cover"
                    />
                    <Heading className="text-4xl flex justify-center mt-4 ">{userData.user.name}</Heading>
                    <Paragraph className="flex justify-center my-4">{userData.user.biography}</Paragraph>

                    <div className="flex gap-x-4 justify-center">
                        {userData.user.socialMedia.facebook && (
                            <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                <Link target="_blank" href={userData.user.socialMedia.facebook}><FaFacebook size={20} /></Link>
                            </span>
                        )}

                        {userData.user.socialMedia.twitter && (
                            <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                <Link target="_blank" href={userData.user.socialMedia.twitter}><FaXTwitter size={20} /></Link>
                            </span>
                        )}

                        {userData.user.socialMedia.linkedin && (
                            <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                <Link target="_blank" href={userData.user.socialMedia.linkedin}><BiLogoLinkedin size={20} /></Link>
                            </span>
                        )}

                        {userData.user.socialMedia.github && (
                            <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                <Link target="_blank" href={userData.user.socialMedia.github}><RiGithubLine size={20} /></Link>
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid gap-y-8 md:w-2/3 w-full">
                    <div className="bg-white p-8 rounded-xl space-y-2">
                        <Paragraph className="">Hello There!</Paragraph>
                        <Heading className="font-bold custom-heading">{userData.user.wordDescription}</Heading>
                        <div className="flex items-center py-6">
                            <span><GoDotFill size={25} color={'green'}></GoDotFill></span>
                            <span>Available for {userData.user.availableFor}</span>
                        </div>
                        <Link href="#contact">
                            <button className="bg-[#448C74] text-white flex items-center py-2 px-4 rounded-xl gap-x-2">
                                <span>Contact me</span>
                                <span><RiDownloadLine></RiDownloadLine></span>
                            </button>
                        </Link>
                    </div>

                    <div className="relative bg-white overflow-hidden rounded-xl flex items-center ">
                        <div className="marquee">
                            <Heading className="text-2xl whitespace-nowrap py-4 md:py-0">{userData.user.slidingDescription}</Heading>
                        </div>
                        {/* Shadows */}
                        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white via-white to-transparent"></div>
                        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white via-white to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;