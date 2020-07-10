import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Menubar from './components/Menubar';

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
