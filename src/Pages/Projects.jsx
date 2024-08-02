import React from 'react'
import "./Projects.css"
import Cinematrix from "../Assets/Projects SS/Cinematrix.jpg"
import NewsChron from "../Assets/Projects SS/NEWSCHRON.jpg"
import Notes from "../Assets/Projects SS/Notes.png"
import LiveTranslator from "../Assets/Projects SS/LiveTranslation.png"
import Portfolio from "../Assets/Projects SS/Portfolio SS.png"
import Github from "../Assets/Skills/icons8-github-96.png"
import LinkImg from "../Assets/LinkImg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

function Projects() {
    return (<>
        <div name="projects" className='ProjectPage pt-28'>
            <div className="screenSize">
                <div class="main-gradient1 left-1 top-unit-7xl"></div>
                <div class="main-gradient1 right-1 top-unit-4xl"></div>
                {/* <div class="main-gradient1 right-0 top-unit-9xl"></div> */}
            </div>
            <h1 className='gradientText Projectname text-4xl text-center pb-16 font-medium mt-unit-4xl mb-unit-3xl'>Projects</h1>
            <div className="Myprojects flex justify-center align-middle">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="project">
                        <img className='projectImg' src={Cinematrix} alt="" />
                        <div className="writtenText">
                            <h1 className='Cinematrix text-center text-lg text-slate-50  font-medium my-4'>Cinematrix</h1>
                            <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Tailwind CSS |  Next UI</h3>
                            <hr className='Hr my-5 w-40 mx-20' />
                            <p className='ProjectDesc  text-gray-400 text-xs'>Built CinemaTrix WebApp with React, TMDb API integration, and Ant Design for engaging movie exploration. Emphasized clean code and collaboration.</p>
                            <div className="linktoProject flex justify-center gap-3 cursor-pointer">
                                <a href="https://github.com/mohdhadi01/CinemaTrix" target="_blank" rel="noopener noreferrer"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                                <a href="https://cinema-trix.vercel.app/home/" target="_blank" rel="noopener noreferrer"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="project ">
                        <img className='projectImg' src={NewsChron} alt="" />
                        <div className="writtenText">
                            <h1 className='NewsChron text-center text-lg text-slate-50  font-medium my-4'>NewsChron</h1>
                            <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Javascript | Ant Design |  API</h3>
                            <hr className='Hr my-5 w-40 mx-20' />
                            <p className='ProjectDesc text-gray-400 text-xs'>Crafted a dynamic React NewsWebApp using Newsdata API for real-time news, enabling user-friendly browsing, searching, and filtering. Intuitive interface design.</p>
                            <div className="linktoProject flex justify-center gap-3">
                                <a href="https://github.com/mohdhadi01/NEWS-CHRON-Production-Version/" target="_blank" rel="noopener noreferrer"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                                <a href="https://news-chron.vercel.app/Home/" target="_blank" rel="noopener noreferrer"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide>  <div className="project ">
                        <img className='projectImg' src={Portfolio} alt="" />
                        <div className="writtenText">
                            <h1 className='Portfolio text-center text-lg text-slate-50  font-medium my-4'>Portfolio</h1>
                            <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  J.S | Next UI | Tailwind CSS</h3>
                            <hr className='Hr my-5 w-40 mx-20' />
                            <p className='ProjectDesc text-gray-400 text-xs'>Developed portfolio website with React.js, Tailwind CSS, Swiper, Scroller and Next UI, showcasing skills and projects effectively.</p>
                            <div className="linktoProject flex justify-center gap-3">
                                <a href="https://github.com/mohdhadi01/MyPortfolio/" target="_blank" rel="noopener noreferrer"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                                <a href="https://mohdhadi.vercel.app/" target="_blank" rel="noopener noreferrer"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide>  <div className="project ">
                        <img className='projectImg' src={Notes} alt="" />
                        <div className="writtenText">
                            <h1 className='Notes text-center text-lg text-slate-50 font-medium my-4'>Notes WebApp</h1>
                            <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Javascript | HTML |  CSS</h3>
                            <hr className='Hr my-5 w-40 mx-20' />
                            <p className='ProjectDesc text-gray-400 text-xs'>Developed a React Note WebApp with useState hook for note creation, deletion, and search. Modular structure with components for flexibility.</p>
                            <div className="linktoProject flex justify-center gap-3">
                                <a href="https://github.com/mohdhadi01/NOTES--React-based-Note-App-/" target="_blank" rel="noopener noreferrer"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                                <a href="https://notes-reactapp.vercel.app/" target="_blank" rel="noopener noreferrer"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide> <div className="project ">
                        <img className='projectImg' src={LiveTranslator} alt="" />
                        <div className="writtenText">
                            <h1 className='LiveTranslator text-center text-lg text-slate-50  font-medium my-4'>LiveTranslator</h1>
                            <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Javascript | API Integration</h3>
                            <hr className='Hr my-5 w-40 mx-20' />
                            <p className='ProjectDesc text-gray-400 text-xs'>Built a real-time language translator with React.js, detecting input language and utilizing Google Translate API through RapidAPI for translations.</p>
                            <div className="linktoProject flex justify-center gap-3">
                                <a href="https://github.com/mohdhadi01/CodeClauseInternship_Live-Language-Translation/" target="_blank" rel="noopener noreferrer"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                                <a href="https://livetranslator.vercel.app/" target="_blank" rel="noopener noreferrer"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>)
}

export default Projects