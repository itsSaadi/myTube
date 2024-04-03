'use client'
import React, { useState } from 'react'
import '../sidebar/sidebar.style.css'
import { GiHamburgerMenu } from "react-icons/gi";



export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>




        </>
    )
}
