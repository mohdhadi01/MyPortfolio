import React from 'react'
import "../Pages/Mainpage.css"
import NavBar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from '../Components/Footer'

function Mainpage() {
    return (<>
        <div className='MainContainer flex justify-center'>
            <div className="ShowBox">
                <NavBar />
                <Hero />
                <About />
                <Skills/>
                <Projects/>
                <Footer/>
            </div>


        </div>
    </>)
}

export default Mainpage