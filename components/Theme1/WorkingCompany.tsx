import Image from "next/image";
import skillsLogo1 from '../../assets/Logos/partner1 (1).png';
import skillsLogo2 from '../../assets/Logos/partner1.png';
import skillsLogo3 from '../../assets/Logos/partner2 (1).png';
import skillsLogo4 from '../../assets/Logos/partner2.png';
import skillsLogo5 from '../../assets/Logos/partner3.png';
import skillsLogo6 from '../../assets/Logos/partner4 (1).png';
import skillsLogo7 from '../../assets/Logos/partner4.png';
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";

const WorkingCompany = () => {
    return (
        <div className="h-full py-8 max-w-screen-xl rounded-xl mt-32 mx-2">
            <div style={{ position: 'relative' }} className="">
                <Paragraph className="flex justify-center text-gray-500">Company I work</Paragraph>
                <Heading className="md:text-4xl text-3xl lg:text-5xl flex justify-center mb-16 mt-8">300+ Global Clients</Heading>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-28 gap-16">
                <Image
                    src={skillsLogo1}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo2}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo3}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo4}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo5}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo6}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo7}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo1}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo2}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <Image
                    src={skillsLogo3}
                    alt="Figma"
                    className="h-ful w-full"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default WorkingCompany;