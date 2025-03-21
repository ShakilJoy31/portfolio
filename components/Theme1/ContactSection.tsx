"use client";

import { RiMapPinLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import { useState } from "react";
import { BASE_URL } from "@/constants/routeConstant";
import { UserResponse } from "@/APIcalling/interface/user-information";

const ContactSection = () => {
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientMessage, setClientMessage] = useState('');
    const [isLoading, setIsloading] = useState(false);

    // const handleSendMessage = async () => {
    //     const clientPayload = {
    //         clientName: clientName,
    //         clientEmail: clientEmail,
    //         clientMessage: clientMessage,
    //     };
    //     if (clientEmail && clientName && clientMessage) {
    //         setIsloading(true);
    //         try {
    //             const response = await fetch(BASE_URL + "/inbox/upload-message", {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(clientPayload),
    //             });

    //             const data = await response.json();

    //             if (data) {
    //                 setIsloading(false);
    //             } else {
    //                 console.error('Error sending message:', data.message);
    //                 // Handle error (e.g., show an error message)
    //             }
    //         } catch (error) {
    //             console.error('Error sending message:', error);
    //         } finally {
    //             setIsloading(false);
    //         }
    //     }

    // };

    return (
        <div className="py-12 max-w-screen-xl w-full">

            <div className="bg-white rounded-xl px-8 py-10">
                <Heading className="text-center md:mb-6 mb-4">contact</Heading>
                <Heading className="text-3xl md:text-5xl font-bold text-center mb-12">Get in Touch with Me!</Heading>
                <div className="grid md:flex gap-x-6 gap-y-6 md:gap-y-0">
                    <div className="space-y-6 border border-gray-300 rounded-xl py-10 px-8 md:w-1/3 w-full">
                        <div className="space-y-2">
                            <span className="w-[20px] h-[20px] text-[#448C74]"><RiMapPinLine size={20}></RiMapPinLine></span>
                            <Heading className="text-xl text-gray-600">My Address:</Heading>
                            <Paragraph className="text-gray-600">Khulna, Bangladesh</Paragraph>
                        </div>

                        <div className="space-y-2">
                            <span className="w-[20px] h-[20px] text-[#448C74]"><FiPhone size={20}></FiPhone></span>
                            <Heading className="text-xl text-gray-600">Contact number:</Heading>
                            <h1 className="text-xl text-gray-600"></h1>
                            <Paragraph className="text-gray-600">+8801761043883</Paragraph>
                        </div>

                        <div className="space-y-2">
                            <span className="w-[20px] h-[20px] text-[#448C74]"><CiMail size={20}></CiMail></span>
                            <Heading className="text-xl text-gray-600">Email us:</Heading>
                            <Paragraph className="text-gray-600">shakidul31@gmail.com</Paragraph>
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-xl py-10 px-8 md:w-2/3 w-full space-y-6">
                        <div className="grid md:flex items-center gap-x-4 w-full gap-y-4 md:gap-y-0">
                            <div className="w-full">
                                <Paragraph className="mb-2">Full Name</Paragraph>
                                <input onChange={(e) => setClientName(e.target.value)}
                                    type="text"
                                    className="w-full rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-0 border-gray-300 contact-input-field"
                                    placeholder="Type your name"
                                />
                            </div>
                            <div className="w-full">
                                <Paragraph className="mb-2">Email Address</Paragraph>
                                <input onChange={(e) => setClientEmail(e.target.value)}
                                    type="email"
                                    className="w-full rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-0 border-gray-300 contact-input-field"
                                    placeholder="hello@websitename.com"
                                />
                            </div>
                        </div>

                        <div>
                            <Paragraph className="mb-2">Your Message</Paragraph>
                            <textarea onChange={(e) => setClientMessage(e.target.value)}
                                className="rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-0 border-gray-300 contact-input-field w-full h-[123px]"
                                placeholder="Write Your Message"
                            />
                        </div>

                        <button
                            // onClick={handleSendMessage}
                            className="px-4 py-2 rounded-lg shadow bg-[#448C74] border hover:bg-black text-white flex gap-x-2 items-center w-[200px] h-[46px]"
                        >
                            {
                                isLoading ? <span>Sending</span> : <span>Send Me Message</span>
                            }
                            <span>
                                <CiMail size={20} />
                            </span>
                        </button>
                    </div>



                </div>
            </div>

        </div>

    )
}

export default ContactSection;