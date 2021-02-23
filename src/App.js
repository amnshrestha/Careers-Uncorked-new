import React from 'react';

import { BrowserRouter as Router, withRouter, Route, HashRouter } from 'react-router-dom';


// import './assets/css/style.css';
import ReactGa from 'react-ga';


// sub components
import HomePage from './assets/Components/HomePage';



class App extends React.Component {


  constructor() {
    super();
    ReactGa.initialize("UA-169178602-1");
    ReactGa.pageview(window.location.pathname);
  }



  render() {
    return (

      // <GuestComponent imgURL="Tolga.png" name="Tolga Aktas" position="Computer Vision SWE Intern, Google" description="Tolga graduated from the University of Rochester in 2020 after pursuing a degree in Electrical Computer Engineering, and Computer Science. He spent his time in Rochester researching digital and image processing, artificial intelligence, computer vision, robotics, machine hearing, data mining, and machine learning. Despite its rigors, he was fascinated with the amount of information carryover between these fields, and how they complemented or inspired research in one another. He spent his summer in 2019 doing ML at Qualcomm and is presently a computer vision software engineer at Google!" linkedInLink="" />

      <HashRouter basename='/'>
        <div>
          <Route exact path='/' component={HomePage} />
        </div>
      </HashRouter>






    );
  }
}


export default App;
