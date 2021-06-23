import React from 'react';
import "./Header.css";
export default function Header(props) {


   return (
      <div>
         <div className="scroll-up-btn">
            <i className="fas fa-chevron-up"></i>
         </div>

         <nav className="navbar">
            <div className="max-width">
               <div className="logo">

                  <p>  <a href="#"> Micro<span>Hawk</span></a></p>

               </div>
               <ul className="menu">
                  <li><a href="#home" className="menu-btn">Home</a></li>
                  <li><a href="#about" className="menu-btn">About</a></li>
                  <li><a href="#skills" className="menu-btn">Skills</a></li>
                  <li><a href="#projects" className="menu-btn">Projects</a></li>
                  <li><a href="#services" className="menu-btn">Services</a></li>
                  <li><a href="#contact" className="menu-btn">Contact</a></li>
               </ul>
               <div className="menu-btn">
                  <i className="fas fa-bars"></i>
               </div>


            </div>
         </nav>

      </div>

   );
}