"use client"

import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
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
import { UserResponse } from "@/APIcalling/interface/user-information";

const AboutSection = ({ data }: { data: UserResponse }) => {
    const parseSocialMedia = (socialMedia: string | object): { [key: string]: string } => {
        if (typeof socialMedia === "string") {
            try {
                return JSON.parse(socialMedia);
            } catch (error) {
                console.error("Error parsing social media JSON:", error);
                return {};
            }
        }
        return socialMedia as { [key: string]: string };
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
                    <Heading className="text-4xl flex justify-center mt-4 ">{data?.user?.name}</Heading>
                    <Paragraph className="flex justify-center my-4">{data?.user?.biography}</Paragraph>

                    <div className="flex gap-x-4 justify-center">
                        {(() => {
                            const socialMediaLinks = parseSocialMedia(data?.user?.socialMedia);
                            return (
                                <>
                                {/* href={`https://${socialMediaLinks.github}`} */}
                                    {socialMediaLinks.facebook && (
                                        <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                            <Link target="_blank" href={`${socialMediaLinks.facebook}`}><FaFacebook size={20} /></Link>
                                        </span>
                                    )}

                                    {socialMediaLinks.twitter && (
                                        <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                             <Link target="_blank" href={`${socialMediaLinks.twitter}`}><FaXTwitter size={20} /></Link>
                                            
                                        </span>
                                    )}

                                    {socialMediaLinks.linkedin && (
                                        <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                             <Link target="_blank" href={`${socialMediaLinks.linkedin}`}><BiLogoLinkedin size={20} /></Link>
                                            
                                        </span>
                                    )}

                                    {socialMediaLinks.github && (
                                        <span className="hover:text-blue-500 hover:cursor-pointer border border-gray-300 p-2 rounded-md">
                                             <Link target="_blank" href={`${socialMediaLinks.github}`}><RiGithubLine size={20} /></Link>
                                        </span>
                                    )}
                                </>
                            );
                        })()}
                    </div>

                </div>

                <div className="grid gap-y-8 md:w-2/3 w-full">
                    <div className="bg-white p-8 rounded-xl space-y-2">
                        <Paragraph className="">Hello There!</Paragraph>
                        <Heading className="font-bold custom-heading">{data?.user?.wordDescription}</Heading>
                        <div className="flex items-center py-6"><span><GoDotFill size={25} color={'green'}></GoDotFill></span> <span>Available for {data?.user?.availableFor}</span></div>
                        <Link href="#contact"><button className="bg-[#448C74] text-white flex items-center py-2 px-4 rounded-xl gap-x-2"><span>Contact me</span> <span><RiDownloadLine></RiDownloadLine></span></button></Link>
                    </div>

                    <div className="relative bg-white overflow-hidden rounded-xl flex items-center ">
                        <div className="marquee">
                            <Heading className="text-2xl whitespace-nowrap py-4 md:py-0">{data?.user?.slidingDescription}</Heading>
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