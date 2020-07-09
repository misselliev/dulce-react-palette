import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
