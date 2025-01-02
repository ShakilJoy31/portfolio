import ServiceCard from "../utility/ServiceCard";
import Heading from "../utility/Text/heading";
import { ServicesResponse } from "@/APIcalling/interface/service";

const ServiceSection = ({serviceData}: {serviceData: ServicesResponse}) => {
    // const data = [
    //     {
    //         title:  <Heading className="service-card-title text-2xl">Brand Identity Design</Heading>,
    //         description: "Dorbesh gives you the blocks & kits you need to create a true website within minutes.",
    //         icon: <RiGlobalFill size={55} color={'#448C74'}/>,
    //     },
    //     {
    //         title: <Heading className="service-card-title text-2xl">Website Design</Heading>,
    //         description: "Dorbesh gives you the blocks & kits you need to create a true website within minutes.",
    //         icon: <RiQuillPenLine size={55} color={'#448C74'} />,
    //     },
    //     {
    //         title: <Heading className="service-card-title text-2xl">Application Design</Heading>,
    //         description: "Dorbesh gives you the blocks & kits you need to create a true website within minutes.",
    //         icon: <RiPantoneFill size={55} color={'#448C74'} />,
    //     },
      
    // ];


    return (
        <div className="h-full py-8 text-black max-w-screen-xl bg-white rounded-xl mt-32">

            <div style={{ position: 'relative' }} className="">
                <p className="flex justify-center">Service</p>
                <Heading className="md:text-4xl text-3xl lg:text-5xl flex justify-center md:py-[36px]">{serviceData?.services[0]?.serviceTitle}</Heading>
            </div>

            <div className="flex justify-center px-8 pb-[36px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {serviceData?.services.map((item, index) => (
                        <div key={index}>
                            <ServiceCard key={index} title={item?.serviceName} description={item?.serviceDescription} icon={item?.serviceLogo} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ServiceSection;