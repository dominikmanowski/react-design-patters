import React from 'react'
import PropTypes from 'prop-types'
import style from './Description.module.scss'

const Description = ({ name, species, gender }) => {
  return (
    <>
      <h2 className={style.name}>{name}</h2>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </>
  )
}

Description.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
}

Description.defaultProps = {
  name: 'Unknown',
  species: 'Unknown',
  gender: 'Unknown',
}

export default Description
