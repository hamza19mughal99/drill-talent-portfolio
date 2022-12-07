import React from 'react';
import './App.css';
import Introductory from './Components/Introductory/Introductory';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Introductory />
      <Footer />
    </div>
  );
}

export default App;
