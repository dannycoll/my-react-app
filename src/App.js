import React, { Component } from 'react';

import './Assets/css/default.min.css';
import Footer from './components/footerComponent/footer';

import Header from "./components/headerComponent/header";
import HomePage from './components/pages/homePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
