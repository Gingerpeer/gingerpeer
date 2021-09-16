import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const About = () => {
    return(
        <React.StrictMode>
            <div id="aboutDetails">
                <h1 className='Heading'>About me</h1>
                    <p className='Style'>My name is Pierre van Zyl known online as <a href='https://gingerpeer.com' target='_blank' rel='noreferrer'>Gingerpeer</a>, I am a Software Engineer in love with creating smart, beautiful code. My specialization is in the React library using HTML, CSS, Bootstrap, JavaScript, TypeScript, Express and Node.js.</p>
                    <p className='Style'>The story that led me to code and software engineering is an arduous one filled with roadblocks and detours but here goes.</p>
                    <p className='Style'>I grew up in an artist home and was from an early age fascinated by technology and design, even when having very limited exposure to technology, the little exposure I received blew my mind.</p>
                    <p className='Style'>After school, though, I was unsure of what discipline to choose and decided to take a gap year working as a labour relations consultant in training as I had the opportunity at that time, and this would give me the exposure to the business world I needed to make a proper decision regarding my discipline. 
                    During that period I got back together with my high-school sweetheart and we decided to get married as soon as possible and figure out life together, we soon had kids and a one year gap year turned into a decade of business consulting work.</p>
                    <p className='Style'>I tried to teach myself to code during this time but found it difficult, as I had limited time in my position. The time I spent with that firm was definitely time well spent as I managed people, assisted businesses in numerous fields with their human resources and took our firm from a paper-only environment using fax, post and large filling cabinets to a paperless environment having all staff working with an online diary and storing case-files in the cloud, (I was told by management that this greatly assisted them during the months of hard lock-down in 2020).</p>
                    <p className='Style'>During this same lock-down period of the 2020 covid-19 pandemic, I, however, had the awesome opportunity to delve deeper into the world of coding and development and now a year later, I have been employed as a full-time full-stack React developer and currently study computer science at the University of the People.
                    </p>
                    <p className='Style'>I have the freedom with my current company to freelance and conduct projects and would love to connect with anyone in need of a mobile or web application, e-commerce site or even a landing page.
                    Hope to speak to you soon!
                    </p>
    </div>
        </React.StrictMode>
    );
}
export default About;
