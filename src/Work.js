import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import avantSite from './AvantGarde.png';
import ruachSite from './RuachStudios.png';
/* Need to complete a portfolio 
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                            <img className="carousel-item d-block w-100" src="./AvantGarde.png" alt="First slide"></img>
                            <img className="carousel-item d-block w-100" src="./RuachStudios.png" alt="Second slide"></img>
                     </div>
                </div>
*/
const Work = () =>{
    return(
        <React.StrictMode>
            <div id='WorkContact' className='Style'>
                <h1 className='Heading'>Case Studies</h1>
                    <div id='ruachStudiosCaseStudy' className='caseStudy'>
                            <a href='https://ruachstudios.co.za' target='_blank' rel='noreferrer'><img className="item d-block w-100" src={ruachSite} alt="Ruach-Studios Landing Page"></img></a>
                            <h4 className='Heading'>Ruach Studios Landing Page</h4>
                            <p>This is my Creative Studio landing page created using the React Library. I also used Jquery, Bootstrap and Css for a nice design and mobile friendly GUI.</p>
                        </div>
                            </div>
                        <div id='avantGardeCaseStudy' className='caseStudy'>
                                <a href='https://avantgarde2332.com' target='_blank' rel='noreferrer'><img className="item d-block w-100" src={avantSite} alt="AvantGarde Business Website"></img></a>
                                <h4 className='Heading'>Avant Garde 2332 Business Website</h4>
                                <p>This is a continuous project that I am working on as I am employed with the company. I created the full website for the company using EJS, Bootstrap and Css on the front end, and Express.js and Node.js in the backend. I used MongoDb a noSql database with Mongoose and used cookies with JWT auth to create functionality for clients to login. I also used Bcrypt for security purposes</p>
                            </div>
        </React.StrictMode>
    );
}
export default Work;