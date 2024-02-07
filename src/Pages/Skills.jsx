import React from 'react'
import "./Skills.css"
import photoshop from "../Assets/Skills/icons8-adobe-photoshop-96(1).png"
import CssIcon from "../Assets/Skills/icons8-css-96.png"
import Github from "../Assets/Skills/icons8-github-96.png"
import HtmlIcon from "../Assets/Skills/icons8-html-96.png"
import Java from "../Assets/Skills/icons8-java-96.png"
import JSIcon from "../Assets/Skills/icons8-javascript-96.png"
import Python from "../Assets/Skills/icons8-python-96.png"
import ReactIcon from "../Assets/Skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png"
import Redux from "../Assets/Skills/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png"
import Tailwind from "../Assets/Skills/icons8-tailwindcss-96.png"

function Skills() {
    return (<>
        <div name="skills" className='SkillsPage'>
            <div className="screenSize">
                <div class="main-gradient left-0 top-80"></div>
                <div class="main-gradient right-0 top-5"></div>
            </div>
            <h1
                className='gradientText SkillHeading text-4xl text-center font-medium my-unit-4xl'>Skills</h1>
            <div
                className="skillContainer">
                <div
                    className="Line1 flex justify-around">
                    <div className="SkillIcons flex flex-col"><img className='Icon' src={HtmlIcon} alt="" />HTML</div>
                    <div className="SkillIcons flex flex-col"><img className='Icon' src={CssIcon} alt="" />CSS</div>
                    <div className="SkillIcons flex flex-col"> <img className='Icon' src={ReactIcon} alt="" />React</div>
                    <div className="SkillIcons MidLine-1a flex flex-col"> <img className='Icon' src={Redux} alt="" />Redux</div>
                    <div className="SkillIcons MidLine-1b flex flex-col"> <img className='Icon' src={JSIcon} alt="" />Javascript</div>
                </div>
                <div
                    className="Line2 flex justify-center gap-8 my-11">
                    <div className="SkillIcons flex flex-col"><img className='Icon' src={Tailwind} alt="" />Tailwind</div>
                    <div className="SkillIcons flex flex-col"><img className='Icon' src={Github} alt="" />Github</div>
                    <div className="SkillIcons flex flex-col"><img className='Icon' src={photoshop} alt="" />Photoshop</div>
                    <div className="SkillIcons MidLine-1a flex flex-col"><img className='Icon' src={Java} alt="" />Java</div>
                    <div className="SkillIcons MidLine-1b flex flex-col"><img className='Icon' src={Python} alt="" />Python</div>
                </div>

            </div>

        </div>
    </>)
}

export default Skills