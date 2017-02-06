import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import ListItems from './ListItems';

class App extends Component {
  render() {
    return (
      <div>My List!
      <List/>
      </div>
    );
  }
}

export default App;
