import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Section from './Section';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
 const home=()=>{
   return(
<div>
       <Nav/>
       <Section/>
       <Footer/>
      
      </div>
   )
 };
 const about=()=>{
  return(
<div>
  <Nav/>
      <Footer/>
     
     </div>
  )
};
const contact=()=>{
  return(
<div>
      <Nav/>
     <Footer/>
     </div>
  )
};
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/kiran" component={contact} />
        </div>
      </Router>

    );
  }
}

export default App;
