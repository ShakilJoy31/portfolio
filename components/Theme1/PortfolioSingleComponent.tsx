"use client";

import Paragraph from "@/components/utility/Paragraph/Paragraph";
import Heading from "@/components/utility/Text/heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import stories3 from '../../assets/blog3.jpg';
import stories4 from '../../assets/single-project1.jpg';
import stories5 from '../../assets/single-project2.jpg';
import stories6 from '../../assets/single-project3.jpg';
import stories7 from '../../assets/single-project4.jpg';
import LetsTalk from "./LetsTalk";

const PortfolioSingleComponent = () => {
    const [showScreen, setShowScreen] = useState(true);
    const [isSlidingUp, setIsSlidingUp] = useState(false);

    useEffect(() => {
        // Start the slide-up animation after 3 seconds
        const timer = setTimeout(() => {
            setIsSlidingUp(true);
            setTimeout(() => {
                setShowScreen(false);
            }, 500);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="mt-[105px] lg:mt-[206px]">
            {showScreen && (
                <div
                    className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${isSlidingUp && 'make-custom-curve'} ${isSlidingUp ? "animate-slide-up-fast" : ""
                        }`}
                >
                    <Paragraph className="animation-text text-white text-2xl">Dorbesh</Paragraph>
                </div>
            )}

            <div className="max-w-screen-lg mx-auto">
                <Heading className="flex justify-center uppercase"><span style={{ color: 'rgb(68, 68, 68)' }}>BRANDING - BENTO STUDIO</span></Heading>
                <Heading className="flex justify-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl my-8 font-bold ">Beautiful design for brand new Business</Heading>
            </div>

            <div className="ml-[-8px] mr-[-8px]">
                <Image
                    src={stories3}
                    alt='Story image'
                    className="lg:h-[800px] h-[211px] w-full "
                    width={300}
                    height={200}
                    objectFit="cover"
                />
            </div>

            <div className="flex justify-center mt-[30px]">
                <div className="max-w-screen-xl lg:flex gap-x-6 h-full">
                    <div className="grid gap-y-6 bg-white lg:w-1/3 w-full p-[40px] rounded-xl ">
                        <div>
                            <Paragraph className=""><span style={{ color: 'rgb(68, 68, 68)' }}>Year</span></Paragraph>
                            <Heading className="font-bold text-xl">2024</Heading>
                        </div>
                        <div>
                            <Paragraph className=""><span style={{ color: 'rgb(68, 68, 68)' }}>Client</span></Paragraph>
                            <Heading className="font-bold text-xl">Bento Studio</Heading>
                        </div>
                        <div>
                            <Paragraph className=""><span style={{ color: 'rgb(68, 68, 68)' }}>Services</span></Paragraph>
                            <Heading className="font-bold text-xl">Web Design</Heading>
                        </div>
                        <div>
                            <Paragraph className=""><span style={{ color: 'rgb(68, 68, 68)' }}>Project</span></Paragraph>
                            <Heading className="font-bold text-xl">Creative</Heading>
                        </div>

                    </div>

                    <div className="bg-white lg:w-2/3 w-full p-[40px] rounded-xl mt-[30px] lg:mt-0">
                        <div className="grid">
                            <Heading className="font-bold text-xl"><span style={{ color: 'rgb(68, 68, 68)' }}>Description</span></Heading>

                            <Paragraph className=""><span style={{ color: 'rgb(68, 68, 68)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo.
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span></Paragraph>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl">
                    <Image
                        src={stories4}
                        alt='Story image'
                        className="w-full h-[680px]"
                        width={300}
                        height={200}
                        objectFit="cover"
                    />
                    <Image
                        src={stories5}
                        alt='Story image'
                        className="w-full h-[680px]"
                        width={300}
                        height={200}
                        objectFit="cover"
                    />
                    <Image
                        src={stories6}
                        alt='Story image'
                        className="w-full h-[680px]"
                        width={300}
                        height={200}
                        objectFit="cover"
                    />
                    <Image
                        src={stories7}
                        alt='Story image'
                        className="w-full h-[680px]"
                        width={300}
                        height={200}
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="flex justify-center pb-8" id="lets-talk">
                <LetsTalk />
            </div>


        </div>
    );
};

export default PortfolioSingleComponent;
