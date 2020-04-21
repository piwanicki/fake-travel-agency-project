
import React from 'react';
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = props => {
  return (
    <div className={classes.LoadingSpinner}><div></div><div></div><div></div><div></div></div>
  )
}

export default LoadingSpinner;