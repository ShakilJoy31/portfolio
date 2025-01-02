import Image from "next/image";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";
import { SkillsResponse } from "@/APIcalling/interface/skills";

const Skills = ({ skillsData }: { skillsData: SkillsResponse }) => {
    return (
        <div className="py-12 max-w-screen-xl">
            <Heading className="text-center md:mb-8 mb-4">Pro Skills</Heading>
            <Heading className="text-4xl text-center mb-12">Let’s Explore My Skills</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    skillsData?.skills?.map((skill, index)=> <div key={index} className="flex flex-col items-center p-3 rounded-xl border border-gray-300 hover:border-[#448C74] md:w-72 w-full">
                    <Image
                        src={skill?.logo}
                        alt="Figma"
                        className="h-16 w-16"
                        width={300}
                        height={200}
                        objectFit="cover"
                    />
                    <Paragraph className="text-lg font-medium my-4">{skill?.proficiencyIn}</Paragraph>
                    <button className="bg-[#448C74] text-white flex items-center py-2 px-4 rounded-xl gap-x-2 w-full justify-center">{skill?.capability}</button>
                </div>)
                }
            </div>



        </div>

    )
}

export default Skills;