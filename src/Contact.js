import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';

const Contact = () =>{
    return(
        <React.StrictMode>
            <div id='ContactDetails' className='Style'>
                <h1 className='Heading'>Contact me</h1>
                <p><a href='mailto:pierre@ruachstudios.co.za'>pierre@ruachstudios.co.za</a> or follow me at the following social platforms.</p>
                <SocialIcon className='btn-lg' url='https://twitter.com/Gingerp8r' />
                <SocialIcon className='btn-lg' url='https://www.facebook.com/Gingerpeer' />
                <SocialIcon className='btn-lg' url='https://www.linkedin.com/in/pierre-van-zyl-3a1413b8' />
                <SocialIcon className='btn-lg' url='https://github.com/Gingerpeer' />
                <SocialIcon className='btn-lg' url='https://www.upwork.com/o/profiles/users/~0186ddf0a0368b2750/' />
            </div>
        </React.StrictMode>
    );
}
export default Contact;