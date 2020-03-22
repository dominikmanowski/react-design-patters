import React from 'react'
import Spinner from 'react-spinkit'
import style from './LoadingSpinner.module.scss'

const LoadingSpinner = props => {
  return (
    <div className={style['async-status-wrapper']}>
      <Spinner name="line-scale-pulse-out" color='#0eabca' />
    </div>
  )
}

export default LoadingSpinner
