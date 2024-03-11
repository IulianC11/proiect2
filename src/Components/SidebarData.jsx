import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"


export const SidebarData = [
    {
        title: "Home",
        path:"/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
        
    },
    {
        title: "Blog",
        path:"/Blog",
        icons: <FaIcons.FaCartPlus />,
        cName: "nav-text",
        
     
        
    },
    {
        title: "Products",
        path:"/Products",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "AboutUs",
        path:"/aboutus",
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
]