import React from "react";

export default function HeroSection(){
    return(
        <section className="hero">
            <div className="image">
                <img src="./images/illustration-working.svg" alt="illustration"></img>
            </div>
            <div className="content">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button className="btn btn_style">Get Started</button>
            </div>
        </section>
    );
}