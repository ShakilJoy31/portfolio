import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface CustomCardProps {
    title?: React.ReactNode | string;
    description?: string;
    icon?: React.ReactNode | string;
    university?: string
}

const ImageCard = ({ title, description, icon, university }: CustomCardProps) => {
    return (
        <Card className="w-full service-card">
            <CardHeader>
                <div>{icon}</div>
                <p className="text-gray-400">{university}</p>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="flex justify-center txt-xl">{description}</CardDescription>
            </CardHeader>
        </Card>

    );
};

export default ImageCard;
