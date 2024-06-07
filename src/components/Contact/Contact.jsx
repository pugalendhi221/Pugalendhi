import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    return (
        <div className='contact-main-container'>
            <div className='heading-container'>
                <h1>Contact</h1>
                <p>Feel free to reach out to me for any questions or opportunities!</p>
            </div>

            <div className='contact-box'>
                <h4>Email me</h4>
                <div className='input-fields-container'>
                    <input
                        placeholder='Email'
                        value={Email}
                        onChange={() => setEmail(event.target.value)}
                        style={{color:'white'}}>

                    </input>
                    <input
                        placeholder='Name'
                        value={Name}
                        onChange={() => setName(event.target.value)}
                        style={{color:'white'}}>

                    </input>
                    <input
                        placeholder='Subject'
                        value={Subject}
                        onChange={() => setSubject(event.target.value)}
                        style={{color:'white'}}>

                    </input>
                    <input 
                        placeholder='Message'
                        value={Message}
                        onChange={() => setMessage(event.target.value)}
                        style={{color:'white'}}>

                    </input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact