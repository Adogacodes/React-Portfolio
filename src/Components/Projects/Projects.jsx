import React from 'react';
import './Projects.scss';
import CryptoApp from '../../assets/CryptoApp.png';
import GeminiClone from '../../assets/GeminiClone.png';
import WeatherApp from '../../assets/WeatherApp.png';

const projectsData = [
  {
    title: 'Crypto Dashboard Application',
    description: 'This is a cryptocurrency tracking app that provides real-time data on prices, market cap, and trends, using the CoinGecko API.',
    image: CryptoApp,
    github: 'https://github.com/Adogacodes/crypto-app',
    website: 'https://vagocryptoapp.netlify.app/',
    alt: 'Crypto App'
  },
  {
    title: 'Frontend Chat Application with Google Generative AI Integration',
    description: 'This is an interactive chat app using the Google Generative AI API to generate real-time responses based on user input.',
    image: GeminiClone,
    github: 'https://github.com/your-username/gemini-clone',
    website: 'https://github.com/Adogacodes/gemini-app',
    alt: 'Gemini Clone'
  },
  {
    title: 'Weather Application with Real-Time API Integration',
    description: 'This is a weather app that fetches real-time data from the OpenWeather API, showing temperature, humidity, and wind speed for user-selected cities.',
    image: WeatherApp,
    github: 'https://github.com/Adogacodes/weather-react-app',
    website: 'https://vagoweatherapp.netlify.app/',
    alt: 'Weather App'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Take a look at some of the projects I've worked on!</p>
      </div>

      {projectsData.map((project, index) => (
        <div key={index} className={`project ${index % 2 === 1 ? 'reverse' : ''}`}>
          <div className="project-image-container">
            <img src={project.image} alt={project.alt} />
            <div className="project-links">
              <a href={project.github} className="github-link" aria-label={`View ${project.title} on Github`}>Github</a>
              <a href={project.website} className="website-link" aria-label={`Visit ${project.title} website`}>Website</a>
            </div>
          </div>
          <div className="project-links-visible-sm">
            <a href={project.github} className="github-link" aria-label={`View ${project.title} on Github`}>Github</a>
            <a href={project.website} className="website-link" aria-label={`Visit ${project.title} website`}>Website</a>
          </div>
          <div className="project-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
