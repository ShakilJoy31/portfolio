import { useState } from "react";
import Heading from "../utility/Text/heading";

const GoogleMap = () => {
    const [showMap, setShowMap] = useState(true);

    // Dynamic location: Replace with values fetched from your admin panel or API
    const location = {
        lat: 25.6221,
        lng: 88.6438,
    };

    const toggleMap = () => {
        setShowMap((prev) => !prev);
    };

    return (
        <div className="py-12 max-w-screen-xl w-full">
            {/* Map Container with Animation */}
            <div
                className={`mt-8 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    showMap ? "max-h-[500px]" : "max-h-0"
                }`}
            >
                {showMap && (
                    <iframe
                        title="Google Map Location"
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.902452601836!2d${location.lng}!3d${location.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77f789c7edb%3A0x74c52e173aeafc4c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1690759458423!5m2!1sen!2sus`}
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        className="border-0 rounded-lg"
                    ></iframe>
                )}
            </div>

            {/* Button to Show/Hide Map */}
            <div
                className="bg-[#363e61] h-[182px] hover:bg-black hover:text-white transition-all duration-300 hover:cursor-pointer mt-4"
                onClick={toggleMap}
            >
                <div className="flex justify-center items-center h-[182px]">
                    {showMap ? (
                        <Heading className="xl:text-5xl lg:text-4xl text-3xl font-bold px-4 md:px-0">
                            Close Google Map
                        </Heading>
                    ) : (
                        <Heading className="xl:text-5xl lg:text-4xl text-3xl font-bold px-4 md:px-0">
                            View My Live Map Location
                        </Heading>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GoogleMap;
