import React, { Component } from 'react';
import './App.css';
import NewForm from './components/Home/NewForm';
import routes from './routes';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
        <NewForm/>
        </div>
    );
  }
}

export default App;
