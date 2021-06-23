import React from 'react';
import "./Hero.css";

export default function Hero(props) {
    return (
        < div >
            <section className="home" id="home">
                <div className="max-width">
                    <div className="row">
                        <div className="home-content">
                            <div className="text-1">Heya, I'm </div>
                            <div className="text-2">Vikas Das</div>
                            <div className="text-3">a <span className="typing"></span></div>
                            <a className="buttonType" href="#about"><i className="fas fa-eject"></i> About me</a>
                        </div>
                    </div>
                    <a href="#about" className="scroll-down">
                        <div className="mouse">
                            <span></span>
                        </div>
                        <div className="arrow">
                            <span></span>
                            <span></span>

                        </div>
                    </a>
                </div>
            </section>
        </ div >
    );
}