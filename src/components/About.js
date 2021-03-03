import React from 'react'
import aboutData from '../aboutData'

const About = () => {
    return (
        <main class="aboutBody">
            <div class="aboutImg">
                <img src={`${aboutData.img}`} alt={aboutData.name} ></img>
            </div>
            <div class="aboutText">
                <h2>{aboutData.name}</h2>
                <h4>{aboutData.occupation}</h4>
                <p>{aboutData.text}</p>
            </div>
        </main>
    );
}

export default About;
