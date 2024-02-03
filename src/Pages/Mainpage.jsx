import React from 'react'
import "../Pages/Mainpage.css"
import NavBar from '../Components/Navbar'
function Mainpage() {
    return (
        <div>
            <div className='background' style={{ position: "absolute" }}>
                {/* <div class="main-gradient left-0 top-1/2 opacity-100  dark:opacity-0"></div> */}
                {/* <div class="main-gradient left-0 top-0 opacity-100  dark:opacity-0 "></div> */}
                <div class="main-gradient left-0 bottom-0 "></div>
                <div class="main-gradient right-0 top-10"></div>
            </div>

            <NavBar />


        </div>
    )
}

export default Mainpage