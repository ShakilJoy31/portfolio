"use client"

import Paragraph from "../utility/Paragraph/Paragraph";

const Footer = () => {
    return (
        <div className="w-full max-w-screen-xl">
            <div className="grid md:flex md:justify-between gap-y-4 md:gap-y-0">
                <Paragraph className="flex justify-center">Copyright @2024, <span className="text-[#448C74] px-1">Dorbesh</span> All Rights Reserved.</Paragraph>
                <Paragraph className="flex justify-center">Crafted with ❤️ Themesvila</Paragraph>
            </div>
        </div>
    )
}

export default Footer;