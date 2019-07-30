import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Counter from './components/counter/Counter'

function App() {

  return (
    <div className="App">

      <First name=" Faisal Ahmed" email="faisal.ahmed@gmail.com"
        address="Dhanmondi" />

      <Counter />
    </div>
  );
}

export default App;
