import React from 'react'
import PropTypes from 'prop-types'
import FetchError from '../common/FetchError/FetchError'
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner'
import CharacterCard from './CharacterCard/CharacterCard'
import ProfileRow from './ProfileRow/ProfileRow'
import Avatar from './Avatar/Avatar'
import Description from './Description/Description'

const CharacterCards = ({ characters, isLoading, error }) => {
  if (error) {
    const { message: errorMessage } = error;
    return <FetchError errorMessage={errorMessage} />
  }
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    characters.map(({ name, image, species, gender }) => (
      <CharacterCard key={name}>
        <ProfileRow>
          <Avatar image={image} name={name} />
          <Description name={name} species={species} gender={gender} />
        </ProfileRow>
      </CharacterCard>
    ))
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
