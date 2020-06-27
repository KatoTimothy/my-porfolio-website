import React from 'react';

import NavBar from './NavBar'
import Profile from './Profile';

import '../css/App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h1 id="page-title">Profile</h1>
        <Profile />
      </div>
    </div>
  )
}

export default App