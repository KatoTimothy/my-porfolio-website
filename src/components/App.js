import React from 'react';

import Nav from './Nav'
import '../css/App.css'
import Profile from './Profile';
import ProfilePhoto from './ProfilePhoto'

function App() {
  const profile_info = [

    {
      id: 'profile-github',
      title: 'Github',
      text: 'github.com/katotimothy'
    },
    {
      id: "profile-languages",
      title: 'Programming Languages & Libraries',
      text: 'JavaScript, Java, php, MySQL, node js, express js, react js and bootstrap'
    }

  ]

  const photo =
  {
    name: "Kato Timothy",
    location: "http://localhost:3000/images/profile.jpg",
    email: "mctimkato@gmail.com",
  }

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1 id="page-title">Profile</h1>
        <ProfilePhoto photo={photo} />
        {
          profile_info.map(function (info, index) {
            return (
              <Profile
                key={index}
                info={info}
              />)
          })
        }

      </div>
    </div>
  )
}

export default App