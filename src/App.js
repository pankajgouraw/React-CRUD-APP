import React, { Component } from 'react';
import Header from './Header';
import SubmitData from './SubmitData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="todoApp">
        <Header />
        <SubmitData />
      </div>
    )
  }
}

export default App;
