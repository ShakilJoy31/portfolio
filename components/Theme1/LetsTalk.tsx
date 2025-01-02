import Link from "next/link";
import { CiMail } from "react-icons/ci";
import Heading from "../utility/Text/heading";

const LetsTalk = () => {
    return (
        <div className="py-12 max-w-screen-xl w-full">
            <div className="bg-white rounded-xl px-8 py-10">
                <div className="space-y-6 xl:px-36 lg:px-24 md:px-16 px-4">
                    <Heading className="xl:text-5xl lg:text-4xl text-3xl font-bold text-center mb-12">
                        Are You Ready to kickstart your project with a touch of magic?
                    </Heading>
                    <Heading className="text-center md:mb-6 mb-4">
                        Reach out and let&apos;s make it happen ✨. I&apos;m also available for full-time or part-time opportunities to push the boundaries of design and deliver exceptional work.
                    </Heading>
                    <div className="flex justify-center">
                        <Link
                            href="/"
                            className="px-4 py-2 rounded-lg shadow bg-[#448C74] border hover:bg-black text-white gap-x-2 items-center w-[200px] h-[46px] flex justify-center"
                        >
                            <span>Let&apos;s Talk</span>
                            <span>
                                <CiMail size={20} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;
