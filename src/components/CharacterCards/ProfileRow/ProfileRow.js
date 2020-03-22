import React from 'react'
import PropTypes from 'prop-types'
import style from './ProfileRow.module.scss'

const ProfileRow = ({ children }) => (
  <div className={style['profile-row']}>
    {children}
  </div>
)

ProfileRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ])
}

export default ProfileRow
