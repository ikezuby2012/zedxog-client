import React from 'react';
import {FiLifeBuoy} from "react-icons/fi";
const About = () => {
    return (
        <div className="about-box">
            <div className="about_circle">
                <div className="about_circleText">
                    <span>our</span>
                    <span className="about-text">missi<span>
                        <FiLifeBuoy className="about_icon"/>
                        <span style={{textTransform: "lowercase"}}>n</span>
                    </span></span>
                </div>
            </div>
            <div className="about_description">
                <p className="about_paragraph">
                    we specialize in website development, mobile development and also consultation.
                    we believe in one simple core value: to help you build your business idea from
                    small application to a large application, we have been successfully creating 
                    solution a lot and application for our client
                </p>

                <p className="about_paragraph">
                   we recognize the trust you put in us to do your project and we take the responsibility
                   seriously. Once we understand your goals and directives we create a comprehensive work,
                   budget and schedule. With a fixed price and a time dedicated to your project, we ensure
                   everything is completed on time, on budget and on your terms. 
                </p>
            </div>
        </div>
    );
}

export default About;
