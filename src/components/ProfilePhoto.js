import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Profile.css'


class ProfilePhoto extends Component {

  render() {
    const { path, description } = this.props.photo

    return (
      <Fragment>
        <img src={path} alt={description} />
      </Fragment>
    )
  }
}

ProfilePhoto.propTypes = {
  photo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired
}

ProfilePhoto.defaultProps = {
  description: "This is a photo of Kato Timothy."
}

export default ProfilePhoto