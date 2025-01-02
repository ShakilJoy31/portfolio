import { FiBook } from "react-icons/fi";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import { ExperienceResponse, EducationResponse } from "@/APIcalling/interface/education";

const EducationAndExperience = ({ educationData, experienceData }: { educationData: EducationResponse, experienceData: ExperienceResponse }) => {
    return (
        <div className="h-full text-black max-w-screen-xl mt-32 md:flex grid gap-x-8 w-full gap-y-4 px-2 md:px-0">

            <div className="p-8 space-y-4 bg-white rounded-xl w-full">
                <Heading className="text-3xl">Experience</Heading>
                <div className="border border-gray-200 rounded-xl ">
                    {
                        experienceData?.experience?.map((exp, index) => <div key={index} className={`flex gap-x-4 ${experienceData?.experience?.length === index + 1 ? '' : 'border-b border-gray-200'} py-8`}>
                            <span className="p-2 bg-gray-100 h-10 ml-1 rounded-md"><FiBook size={25} color={'#448C74'}></FiBook></span>
                            <div className='space-y-2'>
                                <Paragraph className="">{exp?.startYear} - {exp?.endYear}</Paragraph>
                                <Heading className="text-xl">{exp?.organization}</Heading>
                                <Paragraph className="">{exp?.role}</Paragraph>
                            </div>
                        </div>)
                    }
                </div>

            </div>


            <div className="p-8 space-y-4 bg-white rounded-xl w-full">
                <Heading className="text-3xl">Education</Heading>
                <div className="border border-gray-200 rounded-xl">
                    {
                        educationData?.education?.map((edc, index) => <div key={index} className={`flex gap-x-4 ${educationData?.education?.length === index + 1 ? '' : 'border-b border-gray-200'} py-8`}>
                            <span className="p-2 bg-gray-100 h-10 ml-1 rounded-md"><FiBook size={25} color={'#448C74'}></FiBook></span>
                            <div className='space-y-2'>
                                <Paragraph className="">{edc?.startYear} - {edc?.endYear}</Paragraph>
                                <Heading className="text-xl">{edc?.degree}</Heading>
                                <Paragraph className="">{edc?.institution}</Paragraph>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </div>
    )
}

export default EducationAndExperience;