import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Image from "next/image";
import { useRef } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Paragraph from '../utility/Paragraph/Paragraph';
import Heading from '../utility/Text/heading';
import { ClientResponse } from '@/APIcalling/interface/client';
import { formatDateTime } from '@/lib/functions';

const Testinomials = ({ clientData }: { clientData: ClientResponse }) => {
    const sliderRef = useRef<Slider | null>(null); 
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
       
        centerPadding: '20px',  
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Go to previous slide
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Go to next slide
        }
    };
    

    return (
        <div className="h-full py-8 text-black max-w-screen-xl bg-white rounded-xl mt-32 mx-2 w-full ">
            <div style={{ position: 'relative' }} className="mb-10 space-y-4">
                <p className="flex justify-center text-gray-400">Testimonials</p>
                <h1 className="md:text-4xl text-3xl lg:text-5xl flex justify-center">What clients say!</h1>
            </div>
            <div className="px-4">
                <Slider {...settings} ref={sliderRef}>
                    {clientData?.feedback?.map((item, index) => (
                        <div key={index} className="px-4"> {/* Add px-4 to create space between the slides */}
                            <div className="border border-gray-300 hover:border-[#448C74] rounded-xl p-4">
                                <div>
                                    <Image
                                        src={item?.profilePicture}
                                        alt={`Client ${item?.clientName}`}
                                        className="w-20 h-20 rounded-full mb-6"
                                        width={300}
                                        height={200}
                                        objectFit="cover"
                                    />
                                    <Paragraph className="text-gray-500 md:h-16 h-20">{item.feedback}</Paragraph>
                                    <Heading className="text-2xl text-gray-500 mt-6">{item?.clientProfession}</Heading>
                                    <span className='text-gray-500'>Date: {formatDateTime(item?.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='flex justify-center gap-x-4 mt-10'>
                <span
                    className=" hover:bg-black bg-[#448C74] hover:cursor-pointer border-2 p-1 text-white rounded-full transform -translate-y-1/2 text-3xl cursor-pointer z-10"
                    onClick={goToPrev} // Call goToPrev on click
                >
                    <MdKeyboardArrowLeft />
                </span>

                <span
                    className=" hover:bg-black bg-[#448C74] hover:cursor-pointer border-2 p-1 text-white rounded-full transform -translate-y-1/2 text-3xl cursor-pointer z-10"
                    onClick={goToNext} // Call goToNext on click
                >
                    <MdKeyboardArrowRight />
                </span>
            </div>
        </div>
    );
};

export default Testinomials;