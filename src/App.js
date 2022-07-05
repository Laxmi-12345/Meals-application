import React from 'react';
import Footer from './components/Footer/Footer';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch >
          <Route exact path='/'><HomePage /></Route> 
          <Route exact path='/categories'><Categories/></Route>
          <Route exact path='/random'><RandomMeal /></Route>
        </Switch >
        <Footer />
      </Router>
    </div>
  );
}

export default App;
