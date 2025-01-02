import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Heading from "../utility/Text/heading";
import Paragraph from "../utility/Paragraph/Paragraph";

import { StoryResponse } from "@/APIcalling/interface/story";
import { formatDateTime } from "@/lib/functions";

const Stories = ({ storiesData }: { storiesData: StoryResponse }) => {
  return (
    <div className="py-12 max-w-screen-xl">
      <Heading className="text-center md:mb-6 mb-4">Latest News</Heading>
      <Heading className="md:text-4xl text-3xl lg:text-5xl text-center mb-12">Stories</Heading>
      <div className="space-y-[29px]">
        {storiesData?.stories.map((story) => (
          <div key={story.id} className="grid md:flex items-center gap-x-8 bg-white p-6">
            <div className="group relative overflow-hidden rounded-xl">
              <Image
                src={story.images[0]}
                alt={story?.storyTitle}
                className="h-[345px] w-[613px] rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:blur-[1.5px]"
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>

            <div className="space-y-4">
              <Paragraph className="text-[#448C74] mt-2 md:mt-0">Posted on {formatDateTime(story?.createdAt)}</Paragraph> 
              <Heading className="text-[30px] md:text-[40px] font-bold">{story?.storyTitle}</Heading>
              <Link
                href={`/story/${story?.id.toString()}`}
                className="px-4 py-2 rounded-xl shadow bg-[#448C74] border hover:bg-black text-white flex gap-x-2 items-center w-44"
              >
                <span>Read More</span>

                <span>
                  <GoArrowRight size={20} />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
