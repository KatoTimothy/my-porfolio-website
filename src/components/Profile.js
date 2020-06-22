import React from 'react'
import '../css/Profile.css'

function Profile({ info }) {

  return (
    <article id={info.id} className="profile">
      <h3>{info.title}</h3>
      <p>{info.text}</p>
    </article >
  )
}

export default Profile 