import React from 'react';
import "./About.css";

export default function About(props) {
    return (
        <div>
            <section className="about" id="about">
                <div className="max-width">

                    <div className="animate-icon">
                        <lord-icon src="https://cdn.lordicon.com//dxjqoygy.json" trigger="loop"
                            colors="primary:#ffffff,secondary:#dc143c" style={{ width: "100px", height: "100px" }}>
                        </lord-icon>
                    </div>


                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={props.aboutProfile} alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">I'm Vikas and I'm a <span className="typing-2"></span></div>
                            <p>I am undergraduate IT student, Web Developer, UI/UX Designer and Open Source Contributer. I am a
                                part of ArchLinux from last 1 years. I recently joined GRCSDEVELOPERSCLUB.</p>
                            <p>I am also co-leader of DPCOE CODECHEF Chapter & at the present moment I am preparing for GSoC.
                            </p>
                            <a href="https://drive.google.com/file/d/1M3hW0InCtO0feTnctoqAuRcncjF_5LKU/view?usp=sharing"><i
                                className="fas fa-download"></i> Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}