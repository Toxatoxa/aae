import React, { Component } from 'react';
import '../css/App.css';
import Podcast from './Podcast';
import BottonBar from './BottonBar';
import '../css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Podcast />
        <BottonBar />
      </div>
    );
  }
}

export default App;
