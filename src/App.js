import React, { Component } from 'react';
import { 
  Browser as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Footer from './components/footerComponent/footer';

import Header from "./components/headerComponent/header";
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Products' component={Products} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
