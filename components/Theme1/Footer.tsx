"use client"

const Footer = () => {

    return (
        <div className=""> 
            <footer className="bg-[#363e61] ">
                <div className="w-full mx-auto py-4 md:py-8 px-4 sm:px-8 md:px-20 lg:px-28 xl:px-64">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Shakil</span>
                        </a>

                        <ul className="flex flex-wrap items-center mb-6 font-medium sm:mb-0 text-gray-400">
                            <li className="navbar-link">
                                <a href="#home-banner" className="hover:underline hover:text-white me-4 md:me-6">Home</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#about-us" className="hover:underline hover:text-white me-4 md:me-6">About</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#service-section" className="hover:underline hover:text-white me-4 md:me-6">Services</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#gallery" className="hover:underline hover:text-white me-4 md:me-6">Works</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#team-information" className="hover:underline hover:text-white me-4 md:me-6">Pricing</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#portfolio" className="hover:underline hover:text-white me-4 md:me-6">Blog</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#" className="hover:underline hover:text-white me-4 md:me-6">Contact</a>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </footer>


        </div>
    )
}

export default Footer;