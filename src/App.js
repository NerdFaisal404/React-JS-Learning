import React, {Compon} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let p ='Faisal Ahmed haahha';

  return (
    <div className="App">
      <header className="App-header">
       <h2>{p?p:'No Data'}</h2>
    
      </header>
    </div>
  );
}

export default App;
