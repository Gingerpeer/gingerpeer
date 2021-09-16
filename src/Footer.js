import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
/*
<div class="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="https://gingerpeer.com"> Pierre van Zyl</a>
  </div>
  
<div id='copy' className='sticky-footer-navbar'>
            <p>&copy; Created By <a href="https://gingerpeer.com" target='_blank' rel='noreferrer'>Pierre van Zyl</a> 2021 
            </p>
        </div>
  */
const Footer = () => {
    return(
        <div id='Footer' className="footer-copyright text-center">Copyright 2021 ©
            <a id='copyLink' href="https://gingerpeer.com"> Pierre van Zyl</a>
        </div>
    );
}
export default Footer;