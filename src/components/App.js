import React from 'react';

import NavBar from './NavBar'
import Profile from './Profile';

import '../css/App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
        <Profile />
    </div>
  )
}

export default App