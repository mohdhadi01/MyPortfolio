import React from 'react'
import "./Links.css"
import { Github, LinkedinIcon, MoveUpRight, NotebookText, TwitterIcon, UserSearchIcon } from 'lucide-react';
import CinematrixIcon from '../Assets/ProjectICON/image-removebg-preview (1).png';
import NewsChronIcon from '../Assets/ProjectICON/NewsChron_Icon-removebg-preview.png';
import LiveTransIcon from '../Assets/ProjectICON/LiveTran_Icon-removebg-preview.png';
import { Parallax } from 'react-scroll-parallax';


function Links() {
   
    return (
        <div>
            <div name="links" className='AboutPage pt-28'>
                <div className="screenSize">
                <Parallax speed={-20}>
                    <div class="main-gradient right-0 top-96"></div>
                    </Parallax>
                    <Parallax speed={-10}>
                    {/* <div class="main-gradient right-0 top-10"></div> */}
                    </Parallax>
                    <Parallax speed={-20}>
                    {/* <div class="main-gradient right-0 top-unit-9xl"></div> */}
                    </Parallax>
                </div>
                <h1 className='gradientText LinkHeading text-4xl  pb-10 text-center font-medium mt-unit-4xl mb-unit-xl'>Links</h1>

                <div className="linkContainer">

                    <div className="featuredLinks">
                        <h2 className='KnowMore my-5 text-pretty font-semibold  text-slate-600 text-center'>KNOW MORE ABOUT ME</h2>
                        <a href="mohdhadi.vercel.app"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='MyProfile flex gap-2 font-semibold'><UserSearchIcon /> mohdhadi</h3> <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>

                        <h2 className='featproject my-5 text-pretty font-semibold  text-slate-600 text-center'>FEATURED PROJECT</h2>
                        <a href="https://cinema-trix.vercel.app/home/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'> <img className='LinkIconImg' src={CinematrixIcon} alt="" /> CinemaTrix</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://news-chron.vercel.app/Home/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'><img className='LinkIconImg' src={NewsChronIcon} alt="" />News-Chron</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://notes-reactapp.vercel.app/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'><NotebookText /> Notes</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://livetranslator.vercel.app/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'><img className='LinkIconImg' src={LiveTransIcon} alt="" />LiveLanguageTranslator</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>

                        <h2 className='SocialLinks my-5 text-pretty font-semibold  text-slate-600 text-center'>SOCIAL LINKS</h2>
                        <a href="https://www.linkedin.com/in/mohd-hadi-5a4638226/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'> <LinkedinIcon /> Linkedin</h3>  <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://github.com/mohdhadi01/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='github flex gap-2 font-semibold'> <Github /> Github</h3>     <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://twitter.com/mohdhadi01/" target="_blank" rel="noopener noreferrer"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='github flex gap-2 font-semibold'> <TwitterIcon /> X (Twitter)</h3>     <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Links