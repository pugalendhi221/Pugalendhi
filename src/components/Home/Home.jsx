import React, { useState, useEffect } from 'react';
import './Home.css';
import pdfFile from '../../assets/Resume/Resume.pdf';

const Home = () => {
    const [text, setText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const [isReversed, setIsReversed] = useState(false);

    const introText = "Hi I'm Pugalendhi";

    const handleDownloadCv = () => {
        // Fetch the PDF file asynchronously
        fetch(pdfFile)
            .then(response => response.blob())
            .then(blob => {
                // Create a temporary URL for the Blob object
                const url = URL.createObjectURL(blob);
    
                // Open the PDF file in a new browser tab/window
                window.open(url, '_blank');
    
                // Release the temporary URL
                URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Error fetching PDF file:', error);
            });
    };
    

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            if (!isReversed) {
                if (typingIndex <= introText.length) {
                    setText(introText.slice(0, typingIndex));
                    setTypingIndex(typingIndex + 1);
                } else {
                    setIsReversed(true);
                }
            } else {
                if (typingIndex >= 0) {
                    setText(introText.slice(0, typingIndex));
                    setTypingIndex(typingIndex - 1);
                } else {
                    setIsReversed(false);
                    setTypingIndex(0);
                }
            }
        }, 200);

        return () => clearTimeout(typingTimer);
    }, [typingIndex, isReversed]);

    return (
        <div id="Home" className='home-container'>
            <div className='right-container'>
                <div id='profile-container'>
                    <img src='src/assets/afro-man-saluting.jpg' alt='profile pic' />
                </div>
            </div>
            <div className='left-container'>
                <div id='name'>
                    <p>WELCOME TO MY WORLD</p>
                    <h1 className="typing-text">{text}</h1>
                </div>
                <div>
                    <h4>Software developer</h4>
                    <p>Hello! My name is Pukalendhi, and I am a Mobile Application Developer with 1 year of experience. I specialize in creating seamless and engaging mobile apps. Additionally, I have skills in building websites using React.js for the frontend. Currently, I am expanding my knowledge by learning backend technologies. I am passionate about technology and constantly strive to enhance my skills and deliver exceptional digital experiences.</p>
                </div>
                <div className='button-container'>
                    <button onClick={handleDownloadCv}>Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
