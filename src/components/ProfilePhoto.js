import React from 'react'

function ProfilePhoto({ photo }) {
  return (
    <article className="profile" id="profile-photo">
      <img src={photo.location} alt={photo.name} />
      <div id="profile-info">
        <h3 id="profile-name">{photo.name}</h3>
        <p id="profile-email">{photo.email}</p>
      </div>
    </article>)
}

export default ProfilePhoto