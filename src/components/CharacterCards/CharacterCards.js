import React from 'react'
import PropTypes from 'prop-types'
import style from './CharacterCards.module.scss'
import ProfileRow from './ProfileRow/ProfileRow'

const CharacterCards = ({ characters }) => {
  return (
    <div>
      {characters.map(character => (
        <div className={style['id-card-wrapper']} key={character.name}>
          <div className={style['id-card']}>
            <ProfileRow character={character} />
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
