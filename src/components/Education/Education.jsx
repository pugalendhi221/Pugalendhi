import React from 'react';
import './Education.css';

const educationDetails = [
  {
    id: 1,
    institution: "Anna University",
    degree: "Masters in Computer Application - MCA",
    duration: "2024-2026",
    grade: "Persuing",
    description: "Anna University, located in Chennai, Tamil Nadu, India, is a prestigious public technical university. Established in 1978, it holds the distinction of being one of the premier technical universities in the country. Anna University was formed by consolidating several renowned technical institutions in Tamil Nadu, including the College of Engineering, Guindy, and the Madras Institute of Technology."
  },
  {
    id: 2,
    institution: "DRBCCC Hindu College",
    degree: "Bachelor of computer science - BCA",
    duration: "2020-2023",
    grade: "86%",
    description: "The University of Madras (also known as Madras University) is a public state university in Chennai, Tamil Nadu, India. Established in 1857, it is one of the oldest and among the most prominent universities in India, incorporated by an act of the Legislative Council of India under the British government."
  },
  {
    id: 3,
    institution: "Don Bosco Matriculation Higher Secondary School",
    degree: "HSC - XII CS-Maths",
    duration: "2018-2020",
    grade: "68%",
    description: "Don Bosco schools in Chennai, Tamil Nadu, are esteemed educational institutions known for their holistic approach to education. With a legacy rooted in the teachings of St. John Bosco."
  }
];

const Education = () => {
  return (
    <div id="Education" className='education-container'>
      <div className='header-container'>
        <h1>Education</h1>
        <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      </div>
      {educationDetails.map(detail => (
        <div className='education-card-view' key={detail.id}>
          <h4>{detail.institution}</h4>
          <h5>{detail.degree}</h5>
          <h6>{detail.duration}</h6>
          <p>Grade: {detail.grade}</p>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
