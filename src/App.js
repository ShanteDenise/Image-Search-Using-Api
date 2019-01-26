import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="main-container">
      <SearchBar/>   
      </div>
    );
  }
}

export default App;
