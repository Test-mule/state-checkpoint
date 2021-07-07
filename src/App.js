import React, { Component } from 'react'
import './App.css';
import Profile from './Components/Profile';
import 'react-bootstrap';
import Timer from './Components/Timer';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Profile />
        <Timer />
      </div>
    )
  }
}

