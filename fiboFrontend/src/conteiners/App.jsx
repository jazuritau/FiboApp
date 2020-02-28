import React from 'react';
import '../assets/styles/App.css';
import Header from '../components/Header'
import Fibo from '../components/Fibo'
import Footer from '../components/Footer'



function App() {
  return (
    <div className="App">
      <Header title="Fibonacci" />
      <Fibo />
      <Footer />      
    </div>
  );
}

export default App;
