import React from "react";
import Navbar from "../Theme1/Navbar";
import { fetchSettings } from "@/APIcalling/settings/headerSettings";
const NavbarServerComponent = async () => {
    const headerSettings = await fetchSettings()
    return (
       <Navbar headerSettings={headerSettings}></Navbar>
    );
};

export default NavbarServerComponent;
