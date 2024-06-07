import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div class='home-container'>
            <div className='left-container'>
                <div id='name'>
                    <p>WELCOME TO MY WORLD</p>
                    <h1>Hi I'm Pugalendhi</h1>
                    <h4>Software developer</h4>
                    <p>Lorem Ipsum is a placeholder text used in publishing and graphic design to demonstrate the look and feel of a layout before the actual content is available. It is a scrambled version of a Latin text, which makes it look like real text but has no meaning.</p>
                </div> 
                <div className='button-container'>
                    <button>Download CV</button>
                    <button id='contact'>Contact Me</button>
                </div>
            </div>
            <div className='right-container'>
                <div id='profile-container'>
                    <img src='src\assets\afro-man-saluting.jpg' alt='profile pic'></img>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Home