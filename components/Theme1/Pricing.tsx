import { GoArrowRight } from "react-icons/go";
import { FaBucket } from "react-icons/fa6";
import Link from "next/link";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";

const Pricing = () => {
    const pricingData = {
        pricing: [
            {
                cost: 15,
                createdAt: "2025-03-08T21:16:41.000Z",
                features: [
                    'Static site creation (1-3 pages)',
                    'Custom home page design',
                    'Minor bug fixes and troubleshooting responsiveness optimization',
                    'Content integration'
                ],
                id: 1,
                pricingDescription: "Basic sometimes given for free with premium type works.",
                pricingType: "Basic",
                updatedAt: "2025-03-08T21:20:10.000Z"
            },
            {
                cost: 30,
                createdAt: "2025-03-08T21:21:58.000Z",
                features: [
                    'Dynamic web application development',
                    'Full-stack solutions (front-end + back-end)',
                    'Advanced bug fixing and performance optimization',
                    'Database integration (MySQL, MongoDB)',
                    'API development and integration',
                    'Custom animations and interactive features',
                    'SEO optimization and analytics setup',
                    'Ongoing maintenance and support.'
                ],
                id: 2,
                pricingDescription: "Dynamic web apps, full-stack solutions, advanced bug fixes, database integration, APIs, custom animations, SEO, analytics, and ongoing support—delivering seamless, scalable, and engaging digital experiences.",
                pricingType: "Premium",
                updatedAt: "2025-03-08T21:21:58.000Z"
            },
            {
                cost: 45,
                createdAt: "2025-03-08T21:24:58.000Z",
                features: [
                    'Dynamic web application development',
                    'Full-stack solutions (front-end + back-end)',
                    'Advanced bug fixing and performance optimization',
                    'Database integration (MySQL, MongoDB)',
                    'API development and integration',
                    'Custom animations and interactive features',
                    'SEO optimization and analytics setup',
                    'Ongoing maintenance and support.'
                ],
                id: 3,
                pricingDescription: "Dynamic web apps, full-stack solutions, advanced bug fixes, database integration, APIs, custom animations, SEO, analytics, and ongoing support—delivering seamless, scalable, and engaging digital experiences.",
                pricingType: "Edge",
                updatedAt: "2025-03-08T21:24:58.000Z"
            }
        ]
    };

    return (
        <div className="h-full py-8 text-black max-w-screen-xl bg-white rounded-xl mt-32">
            <div style={{ position: 'relative' }} className="">
                <Paragraph className="flex justify-center text-gray-400">Pricing</Paragraph>
                <Heading className="md:text-4xl text-3xl lg:text-5xl flex justify-center mt-[36px]">
                    Flexible Pricing Plan
                </Heading>
            </div>

            <div className="flex justify-center p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pricingData.pricing.map((plan, index) => (
                        <div key={index} className="border-gray-200 border rounded-xl p-2">
                            <div className="border-gray-200 border rounded-xl p-4">
                                <Heading className="text-xl font-bold">{plan.pricingType}</Heading>
                                <Paragraph className="text-xl my-4">{plan.pricingDescription}</Paragraph>
                                <Paragraph>
                                    <span className="text-3xl text-[#448C74]">{plan.cost}</span>{' '}
                                    <span>/Hour</span>
                                </Paragraph>
                            </div>

                            <div className="px-4 py-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <span key={featureIndex} className="flex gap-x-4">
                                        <GoArrowRight />
                                        <span>{feature}</span>
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/"
                                className="px-5 py-2 hover:bg-black rounded-lg shadow bg-[#448C74] border text-white flex gap-x-2 items-center justify-center w-36"
                            >
                                <span>Order Now</span>
                                <span>
                                    <FaBucket size={15} />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;