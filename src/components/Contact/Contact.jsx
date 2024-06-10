import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: Name,
            from_email: Email,
            subject: Subject,
            message: Message,
        };

        emailjs.send(
            'service_su1s4bd',
            'template_qzfhmfk',
            templateParams,
            'DRglNkMHdWg5RUJic'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, (err) => {
            console.log('FAILED...', err);
            alert('Failed to send message, please try again later.');
        });
    };

    return (
        <div id="Contact" className='contact-main-container'>
            <div className='heading-container'>
                <h1>Contact</h1>
                <p>Feel free to reach out to me for any questions or opportunities!</p>
            </div>

            <div className='contact-box'>
                <h4>Email me</h4>
                <form className='input-fields-container' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder='Email'
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Name'
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Subject'
                        value={Subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder='Message'
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
