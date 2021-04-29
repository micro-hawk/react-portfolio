import React from "react";
import "./Hero.css";

export default function Hero(props) {

        
    return (
        <div>
            <section id="hero">
                <div className="hero container row">
                    <div className="col-lg-4">
                        <h1>
                            Hey,<span></span>
                        </h1>
                        <h1>
                            I am <span></span>
                        </h1>
                        <h1 className="userName">
                            Vikas Das !<span></span>
                        </h1>
                        <a href="#" type="button" className="cta">
                            Portfolio
                         </a>
                    </div>
                    <div className="col-lg-8">
                            <img className="hero-image" src={props.heroBannersrc} alt="MicroHawk" />
                    </div>
                </div>
            </section>

           
        </div>
    );
}
