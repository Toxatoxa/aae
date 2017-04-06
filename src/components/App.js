import React, { Component } from 'react';
import '../css/App.css';
import Podcast from './Podcast';
import BottomBar from './BottomBar';
import '../css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Podcast />
        <BottomBar />
      </div>
    );
  }
}

export default App;
