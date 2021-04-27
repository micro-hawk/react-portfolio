import React from 'react';
import "./Header.css";

export default function Header(props) {


    return(
        <section id="header">
            <div className="wrapper">
            <header>
              <a href="#" className="logo">MicroHawk</a>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Portfolio</a></li>
              </ul>
          </header>
            </div>


        </section>
    );
}