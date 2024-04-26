import React from 'react'
import "./Hero.css"
import profileImg from "../Assets/edited_dp-ast6yqVUK-transformed.png"
import Arrow from "../Assets/arrow.png"
import Twitter from "../Assets/twitter (2).png"

function Hero() {

    return (<>
        <div className="screenSize">
            <div class="main-gradient left-0 bottom-full"></div>
            <div class="main-gradient right-0 top-20"></div>
        </div>
        <div name="home" className='Hero'>
            <div className="Desc">
                <h3
                    className='gradientText helloText font-semibold text-lg my-1' style={{ animation: "Text-opacity 1s 0.2s both" }}>Hello There !</h3>
                <h2
                    className='Name text-3xl' style={{ animation: "Text-opacity 1.5s 0.4s both" }}>I'm Mohd Hadi</h2>
                <h2
                    className='gradientText frontendDev text-5xl font-medium' style={{ animation: "Text-opacity 1.5s 0.6s both" }}>Frontend Developer</h2>
                <h2
                    className='para text-sm' style={{ animation: "Text-opacity 2.5s 0.8s ease-in-out both" }}>I like building new things and turn visions into vibrant code as a frontend wizard. I worked on Many projects as a developer using most recent Technologies.</h2>
            </div>
            <div
                className="Image">
                <img src={profileImg} className='myImage' alt="" />
            </div>

        </div>
        <div className="buttons">
            <a href="https://drive.google.com/file/d/1Nz_pt54uIZRXjb-qwwRst3FifKHRftFJ/view?usp=drive_link/" target="_blank" rel="noopener noreferrer">
                <div
                    className="Resume" style={{ animation: "Text-opacity 2.5s 1.2s ease-in-out both" }}>Download CV</div></a>

            <a href="mailto: hadi.88923@gmail.com">
                <div className="HireMe" style={{ animation: "Text-opacity 2.5s 1.5s ease-in-out both" }}>Hire Me</div></a>
            <img className='Arrow' src={Arrow} alt="" />
        </div>
        <div
            className="Socials mx-8 my-10 flex gap-6 justify-center">
            <a style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }} href="mailto: hadi.88923@gmail.com/" target="_blank" rel="noopener noreferrer"><svg stroke="#ff7a2c" fill="#ce6629f5" stroke-width="0" viewBox="0 0 24 24" class="SocialIcons text-secondary hover:text-secondary/50  text-2xl md:text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg></a>
            <a style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }} href="https://github.com/mohdhadi01/" target="_blank" rel="noopener noreferrer"><svg stroke="#ff7a2c" fill="#ce6629f5" stroke-width="0" viewBox="0 0 1024 1024" class="SocialIcons text-secondary hover:text-secondary/50  text-2xl md:text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
            <a style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }} href="https://www.linkedin.com/in/mohd-hadi-5a4638226/" target="_blank" rel="noopener noreferrer"><svg stroke="#ff7a2c" fill="#ce6629f5" stroke-width="0" viewBox="0 0 448 512" class="SocialIcons text-secondary hover:text-secondary/50  text-2xl md:text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
            <a style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }} href="https://twitter.com/mohdhadi01/" target="_blank" rel="noopener noreferrer"><img src={Twitter} className='SocialIcons' alt="" /></a>
        </div>

    </>)
}

export default Hero
