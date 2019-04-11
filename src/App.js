import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import GetReq from './components/GetReq'

class App extends Component {
  render() {
    return (
      <div className="App">
       <GetReq/>
      </div>
    );
  }
}

export default App;
