import React from 'react'
import PropTypes from 'prop-types'
import style from './Avatar.module.scss'

const UNKNOWN_AVATAR_URL = `${process.env.PUBLIC_URL}/images/unknown-avatar.png`

const Avatar = ({ name, image }) => <img src={image} alt={`${name}'s avatar`} className={style["avatar-image"]} />

Avatar.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}

Avatar.default = {
  name: 'Unknown',
  image: UNKNOWN_AVATAR_URL,
}

export default Avatar
