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
    <Fragment>
      <header className="photo profile">
        <ProfilePhoto photo={data.photo} />
        <h3 id="profile-name">{data.name}</h3>
        <p id="profile-email">{data.email}</p>
      </header >

      <article className="github profile">
        <h3>Github</h3>
        <p>{data.github}</p>
      </article>

      <article className="proficiency profile">
        <h3>Programming Languages and libraries</h3>
        <p>{data.proficiency}</p>
      </article>
    </Fragment>
  )
}

export default Profile 