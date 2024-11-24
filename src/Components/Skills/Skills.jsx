import React from 'react';
import './Skills.css';

import boostrap from '../../assets/bootstrap.svg';
import css3 from '../../assets/css3.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import html5 from '../../assets/html5.svg';
import javascript from '../../assets/javascript.svg';
import json from '../../assets/json.svg';
import materialui from '../../assets/materialui.svg';
import nextjs1 from '../../assets/nextjs1.svg';
import nextjs2 from '../../assets/nextjs2.svg';
import node from '../../assets/node.svg';
import nodejs from '../../assets/nodejs.svg';
import python from '../../assets/python.svg';
import react from '../../assets/react.svg';
import sass from '../../assets/sass.svg';

const Skills = () => {
  // Array of skill logos with names
  const skills = [
    { src: html5, name: 'HTML5' },
    { src: css3, name: 'CSS3' },
    { src: javascript, name: 'JavaScript' },
    { src: python, name: 'Python' },
    { src: react, name: 'React' },
    { src: nextjs1, name: 'Next.js' },
    { src: sass, name: 'Sass' },
    { src: boostrap, name: 'Bootstrap' },
    { src: github, name: 'GitHub' },
    { src: git, name: 'Git' },
    { src: materialui, name: 'MaterialUI' },
    { src: node, name: 'Node.js' },
  ];

  return (
    <div className="skills-container">
      <h2 className="header">MY SKILLS</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.src} alt={`${skill.name} logo`} />
            <span className="skill-name">{skill.name}</span> {/* Name of the skill */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
