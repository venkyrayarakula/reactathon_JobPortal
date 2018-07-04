import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import NavBar from './Components/NavBar.js';
import UserProfile from './Components/UserProfile.js';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import config from './global/config';
import ApplyJob from './Components/ApplyJob'

const client = new AWSAppSyncClient({
  url: config.graphqlEndpoint,
  region: config.region,
  auth: {
    type: config.authenticationType,
    apiKey: config.apiKey,
  }
});

ReactDOM.render((
	<ApolloProvider client={ client }>
	  <Rehydrated> 
		  <Router>
			  <div>
			  	<NavBar/>
				<Route exact path="/" component={App} />
			    <Route path="/login" component={Login} />
			    <Route path="/profile" component={UserProfile} />
                <Route path="/apply" component = {ApplyJob} />
			  </div>
		  </Router>
	  </Rehydrated>
	</ApolloProvider>),
  document.getElementById('root')
);
registerServiceWorker();
