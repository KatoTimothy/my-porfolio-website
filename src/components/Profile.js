import React, { Fragment } from 'react'
import ProfilePhoto from './ProfilePhoto'

import '../css/Profile.css'

function Profile({ src }) {

  const data =
  {
    name: 'Kato Timothy',
    email: 'mctimkato@gmail.com',
    photo: {
      path: '/images/profile.jpg',
      description: 'This is a photo of Kato Timothy.'
    },
    github: 'github.com/katotimothy',
    proficiency: 'JavaScript, Java, PHP, MySQL, node, react, express, bootstrap'
  }

  return (
    <div className="container">
      <h1 id="page-title">Profile</h1>

      <header className="photo profile">
        <ProfilePhoto photo={data.photo} />
        <h3 id="profile-name">{data.name}</h3>
        <p id="profile-email">{data.email}</p>
      </header >

      <section className="github profile">
        <h3>Github</h3>
        <p>{data.github}</p>
      </section>

      <section className="proficiency profile">
        <h3>Programming Languages and libraries</h3>
        <p>{data.proficiency}</p>
      </section>

    </div>
  )
}

export default Profile 