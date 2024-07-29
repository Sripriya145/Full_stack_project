import React from 'react';
import '../Assert/About.css';
import aboutpic from '../Picture/aboutpic.jpg'
const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">About Let's Party</h1>
      <div className="about-content">
        <div className="aboutpic-section">
            <img className="aboutpic" src={aboutpic} alt="" />
        </div>
        <div className='about-right-content'>
        <section className="about-company">
          <h2 className="section-title">About Our Company</h2>
          <p>Let's Party is your go-to solution for organizing unforgettable birthday events.
             Established with a passion for creating magical moments, we specialize in crafting unique,
             memorable, and personalized birthday parties that reflect your style and preferences.</p>
        </section>
        </div>
        <section className="success-stories">
          <h2 className="section-title">Our Success Stories</h2>
          <p>Over the years, Let's Party has successfully organized hundreds of birthday events,
             ranging from intimate family gatherings to grand themed parties. 
             Our commitment to excellence has earned us rave reviews and a loyal customer base. We take pride in our ability to transform ordinary moments into extraordinary memories.</p>
        </section>
        
        <section className="our-services">
          <h2 className="section-title">What We Provide</h2>
          <ul className='provide'>
            <li>✓ Customized Theme Decorations</li>
            <li>✓ Venue Selection and Booking</li>
            <li>✓ Delicious and Diverse Food Options</li>
            <li>✓ Professional DJ Services</li>
            <li>✓ Surprise Party Planning</li>
            <li>✓ And much more...</li>
          </ul>
        </section>
        
        <section className="problem-solving">
          <h2 className="section-title">Solving Your Problems</h2>
          <p>At Let's Party, we understand the challenges of planning a birthday event. Our comprehensive services address all aspects of party planning, from selecting the perfect venue to coordinating with vendors and ensuring a seamless experience for you and your guests. We handle the details, so you can focus on enjoying the celebration.</p>
        </section>
        </div>
      </div>
    
  );
};

export default About;
