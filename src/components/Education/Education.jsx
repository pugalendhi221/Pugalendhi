import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className='education-container'>
      <div className='header-container'>
          <h1>Education</h1>
          <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      </div>
      <div className='education-card-view'>
          <h4>Anna University</h4>
          <h5>Masters in Computer Application - MCA</h5>
          <h6>2024-2026</h6>
          <p>Grade:Persuing</p>
          <p>Anna University, located in Chennai, Tamil Nadu, India, is a prestigious public technical university. Established in 1978, it holds the distinction of being one of the premier technical universities in the country. Anna University was formed by consolidating several renowned technical institutions in Tamil Nadu, including the College of Engineering, Guindy, and the Madras Institute of Technology</p>
      </div>

      <div className='education-card-view'>
          <h4>DRBCCC Hindu College</h4>
          <h5>Bachelor of computer science - BCA</h5>
          <h6>2020-2023</h6>
          <p>Grade:86%</p>
          <p>The University of Madras (also known as Madras University) is a public state university in Chennai, Tamil Nadu, India. Established in 1857, it is one of the oldest and among the most prominent universities in India, incorporated by an act of the Legislative Council of India under the British government. </p>
      </div>

      <div className='education-card-view'>
          <h4>Don Bosco Matriculation Higher Secondary School</h4>
          <h5>HSC - XII CS-Maths</h5>
          <h6>2018-2020</h6>
          <p>Grade:68%</p>
          <p>Don Bosco schools in Chennai, Tamil Nadu, are esteemed educational institutions known for their holistic approach to education. With a legacy rooted in the teachings of St. John Bosco.</p>
      </div>
    </div>
  )
}

export default Education