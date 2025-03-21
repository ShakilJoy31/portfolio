import ServiceCard from "../utility/ServiceCard";
import Heading from "../utility/Text/heading";

const ServiceSection = () => {
    const serviceData = {
        message: "Services retrieved successfully",
        services: [
            {
                createdAt: "2025-03-08T20:52:43.000Z",
                id: 1,
                serviceDescription: "I create stunning, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, and frameworks like React. Focused on performance, accessibility, and cross-device compatibility, I deliver engaging, scalable front-end solutions that bring your vision to life.",
                serviceLogo: "http://api.demo3.xdomainhost.com/641cd4eb3c1-DSC_1870-(2).JPG",
                serviceName: "Front end development",
                updatedAt: "2025-03-08T20:52:43.000Z"
            },
            {
                createdAt: "2025-03-08T20:53:42.000Z",
                id: 2,
                serviceDescription: "I offer full-stack development services, crafting end-to-end web solutions. From front-end design with HTML, CSS, and JavaScript to back-end logic using Node.js or Django, I deliver seamless, scalable, and user-focused applications tailored to your needs.",
                serviceLogo: "http://api.demo3.xdomainhost.com/41cd4eb3c15-DSC_1870-(2).JPG",
                serviceName: "Full stack development",
                updatedAt: "2025-03-08T20:53:42.000Z"
            }
        ]
    };

    return (
        <div className="h-full py-8 text-black max-w-screen-xl bg-white rounded-xl mt-32">
            <div style={{ position: 'relative' }} className="">
                <p className="flex justify-center">Service</p>
                <Heading className="md:text-4xl text-3xl lg:text-5xl flex justify-center md:py-[36px]">
                    Our Services
                </Heading>
            </div>

            <div className="flex justify-center px-8 pb-[36px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {serviceData.services.map((item, index) => (
                        <div key={index}>
                            <ServiceCard
                                key={index}
                                title={item.serviceName}
                                description={item.serviceDescription}
                                icon={item.serviceLogo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;