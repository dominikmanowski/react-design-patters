import React from 'react'
import PropTypes from 'prop-types'
import style from './ProfileRow.module.scss'
import Description from '../../Description/Description'
import Avatar from '../../Avatar/Avatar'

const ProfileRow = ({ character }) => {
  const { name, image, species, gender } = character;
  return (
    <div className={style['profile-row']}>
      <div className={style["profile-row__avatar"]}>
        <Avatar image={image} name={name} />
      </div>
      <div className={style["profile-row__desc"]}>
        <Description name={name} species={species} gender={gender} />
      </div>
    </div>
  )
}

ProfileRow.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  })
}

export default ProfileRow
