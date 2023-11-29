import React from "react";
import { IoPlanetSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";




function Footer() {
    return (  
        <footer className="p-10 bg-black text-white">
            <div className="flex justify-center">
                <div className="flex items-center">
                
                <IoPlanetSharp className=""/>
                <p className="pl-2">Astral Art &copy;</p>
                </div>
               
                
            </div> 
            <p className="text-center mt-4">This website is not real, and was only created for a school project. All images are sourced from unsplash.com.</p>
        </footer>
      
    );
}

export  {Footer};