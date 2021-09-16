import React from 'react';
import './App.css';
import ProfilePic from './profilePic.jpg';
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

console.log({ProfilePic});
const Home = () => {
    return(
        
        <div id='Home'>
            
            <div id='intro-text'>
                <h1  id='intro1' className='teal Style'>Pierre v. Zyl</h1> 
                <h1 id='intro3' className='Heading Style'>Full-Stack React Developer</h1>
            </div>
            <div id='homeContent'>
                <img id='ProfilePic' className='img-fluid' src={ProfilePic} alt='ProfilePicture'></img>
                <p className='Style'>Hi there! My name is Pierre I am a software engineer specializing in React.</p>
                <p className='Style'> Do you need a new mobile application, web application, e-commerce website or even just a landing page. I am here to build your specific application or website all whilst ensuring that you get a beautifully designed, fully functional and secure product. 
                </p>
                <p className='Style'>I would love to connect with you, and start the adventure of building your application or site.</p>
            </div>
        </div>
    );
}
export default Home;