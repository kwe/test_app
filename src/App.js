import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <p className="App-intro">Hey there, Tuesday evening...</p>
      </div>
    );
  }
}

export default App;
