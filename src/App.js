import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import ColorLine from './ColorLine';
import Footer from './Footer.js';

/* css issue -webkit-background-clip (err: Also define the standard property 'background-clip' for compatibility) on app.css needs fixing*/
function App() {
  return (
    <Router>
        <Nav />
        <ColorLine />
          <div id='content' className='Style'>
            <Switch>
              <Route exact path='/'><Home /></Route>
              <Route path='/About'><About /></Route>
              <Route path='/Work'><Work /></Route>
              <Route path='/Contact'><Contact /></Route>
            </Switch>
            <Footer />
          </div>
    </Router>
  );  
}

export default App;
