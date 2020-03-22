import React from 'react'
import PropTypes from 'prop-types'
import style from './Description.module.scss'

const Description = ({ name, species, gender }) => {
  return (
    <div className={style.desc}>
      <h2 className={style['desc__name']}>{name}</h2>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </div>
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
