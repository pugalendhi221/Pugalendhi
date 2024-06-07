import React from 'react'
import './Skills.css'

const Skills = () => {

  const Frontend = [
    { id: 1, name: 'HTML', image: 'src/assets/skills_logo/html_logo.png' },
    { id: 2, name: 'CSS', image: 'src/assets/skills_logo/css_logo.png' },
    { id: 3, name: 'JavaScript', image: 'src/assets/skills_logo/js_logo.png' },
  ];

  const Backend = [
    { id: 2, name: 'Java', image: 'src/assets/skills_logo/java-logo.png' },
    { id: 3, name: 'MySQL', image: 'src/assets/skills_logo/mysql-logo.png' },
  ]

  const Framework = [
    { id: 1, name: 'React.js', image: 'src/assets/skills_logo/react_js_logo.png' },
    { id: 2, name: 'React Native', image: 'src/assets/skills_logo/react-native_logo.png' },
    { id: 3, name: 'Native android', image: 'src/assets/skills_logo/android_logo.png' },
    { id: 4, name: 'Express', image: 'src/assets/skills_logo/express_js_logo.png' },
  ]

  const Tools = [
    { id: 1, name: 'Vscode', image: 'src/assets/skills_logo/vs_code.png' },
    { id: 2, name: 'Android studio', image: 'src/assets/skills_logo/android_studio.png' },
    { id: 3, name: 'Intellij', image: 'src/assets/skills_logo/intellij.png' },
    { id: 4, name: 'Github', image: 'src/assets/skills_logo/github_2.png' },
    { id: 5, name: 'Git', image: 'src/assets/skills_logo/git_logo.png' },
    { id: 6, name: 'Npm', image: 'src/assets/skills_logo/npm_logo.png' },
    { id: 7, name: 'Postman', image: 'src/assets/skills_logo/postman_logo.png' },
  ]

  return (
    <div className='main-container'>
      <h1>Skills</h1>
      <h2>Skills which i have learnt through</h2>
      <div className='sub-container'>
        <div className='card-container'>
        <div className="card-header">Front end</div>  
          {Frontend.map(skill => (
            <div key={skill.id} className='card'>
              <img src={skill.image} alt='' sizes='10px'/>
              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>
        <div className='card-container'>
        <div className="card-header">Back end</div>
          {Backend.map(Framework => (
            <div key={Framework.id} className='card'>
              <img src={Framework.image} alt='' sizes='10px'/>
              <h3>{Framework.name}</h3>
            </div>
          ))}

        </div>
      </div>

      <div className='sub-container'>
        <div className='card-container'>
        <div className="card-header">Framework</div>
          {Framework.map(Tool => (
            <div key={Tool.id} className='card'>
              <img src={Tool.image} alt='' sizes='10px'/>
              <h3>{Tool.name}</h3>
            </div>
          ))}

        </div>
        <div className='card-container'>
        <div className="card-header">Tools & IDES</div>
          {Tools.map(ide => (
            <div key={ide.id} className='card'>
              <img src={ide.image} alt='' sizes='10px'/>
              <h3>{ide.name}</h3>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills