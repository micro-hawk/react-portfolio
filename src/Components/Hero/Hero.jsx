import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <div>
      <section id="hero">
        <div className="hero container">
        <div>
          <h1>Hey,<span></span></h1>
          <h1>I am <span></span></h1>
          <h1 className="userName">Vikas Das !<span></span></h1>
        
          {/* <img src={props.heroBannersrc} />; */}
          <a href="#" type="button" className="cta">Portfolio</a>
        </div>
        
        </div>
      </section>
    </div>
  );
}
