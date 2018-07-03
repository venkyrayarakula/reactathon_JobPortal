import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import NavBar from './Components/NavBar.js';
import UserProfile from './Components/UserProfile.js';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render((
  <Router>
  <div>
  	<NavBar/>
	<Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/profile" component={UserProfile} />
  </div>
    
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
