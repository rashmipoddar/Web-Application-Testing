import React from 'react';

import './App.css';
import Dashboard from './components/Dashboard';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Baseball Game Scoreboard</h1>
        <Dashboard />
      </div>
    );
  }
  
}



export default App;
