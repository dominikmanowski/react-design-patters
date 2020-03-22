import React from 'react'
import PropTypes from 'prop-types'
import style from './FetchError.module.scss'

const FetchError = ({ errorMessage }) => (
  <div className={style['async-status-wrapper']}>
    <p className={style['error-message']}>Error occurred:</p>
    <p className={style['error-message']}>{errorMessage}</p>
  </div>
)

FetchError.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

export default FetchError
