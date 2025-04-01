import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

interface CustomCardProps {
    title?: React.ReactNode | string;
    description?: string;
    icon?: string;  // Updated type
    university?: string
}

const ServiceCard = ({ title, description, icon }: CustomCardProps) => {
    return (
        <Card className="w-full service-card py-4 h-80 bg-[#363e61]">
            <CardHeader>
                <div>
                    {icon && (
                        <Image
                            src={icon}
                            alt='Service icon'
                            className="w-16 h-16 mb-2 object-cover block mx-auto border rounded-full p-2"
                            width={300}
                            height={200}
                        />
                    )}
                </div>
                <CardTitle className="text-center text-white">{title}</CardTitle>
                <CardDescription className="flex justify-center txt-xl text-center text-gray-400">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
};

export default ServiceCard;