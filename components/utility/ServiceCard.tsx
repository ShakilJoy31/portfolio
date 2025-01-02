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
    icon?: string;
    university?: string
}

const ServiceCard = ({ title, description, icon }: CustomCardProps) => {
    return (
        <Card className="w-full service-card py-8">
            <CardHeader>
                <div>
                    {
                        icon && <Image
                            src={icon}
                            alt='Home logo'
                            className="w-16 h-16 mb-2 rounded-lg"
                            width={300}
                            height={200}
                            objectFit="cover"
                        />
                    }
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="flex justify-center txt-xl">{description}</CardDescription>
            </CardHeader>

        </Card>

    );
};

export default ServiceCard;
