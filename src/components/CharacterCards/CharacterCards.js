import React from 'react'
import PropTypes from 'prop-types'
import style from './CharacterCards.module.scss'

const UNKNOWN_AVATAR_URL = `${process.env.PUBLIC_URL}/images/unknown-avatar.png`

const CharacterCards = ({ characters }) => {
  return (
    <div>
      {characters.map(({ name, image = UNKNOWN_AVATAR_URL, species, gender }) => (
        <div className={style['id-card-wrapper']} key={name}>
          <div className={style['id-card']}>
            <div className={style['profile-row']}>
              <div className={style["profile-row__avatar"]}>
                <img src={image} alt={`${name}'s avatar`} className={style["avatar__image"]} />
              </div>
              <div className={style["profile-row__desc"]}>
                <h2 className={style["desc__name"]}>{name}</h2>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

CharacterCards.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }))
}

export default CharacterCards
