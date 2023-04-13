import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import React from 'react';


function App() {
  return (
    <div className='app-main'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
