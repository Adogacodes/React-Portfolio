import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import backgroundvid from '../../assets/backgroundvid.mp4';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  const handleResumeClick = () => {
    console.log('Resume button clicked');
  };

  return (
    <div className='hero'>
      <video autoPlay muted loop className='hero-video'>
        <source src={backgroundvid} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='hero-content'>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="content">
          <h1>HI, I'm Adoga Isaac.</h1>
          <p>
            I'm a passionate FRONTEND WEB DEVELOPER focused on creating responsive, user-friendly websites and applications. 
            I craft seamless digital experiences with a keen eye for design and modern web technologies.
            Let's build something great together!
          </p>

          <div className="buttons">
            <button onClick={handleResumeClick}>RESUME</button>
            <Link to="contact" smooth={true} duration={500}>
              <button>CONTACT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
