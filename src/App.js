import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import JobList from './Components/JobList.js';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      		<div className="App">
	        <div>
	        <JobList></JobList>
	        </div>
	      </div>
    );
  }
}

export default App;
