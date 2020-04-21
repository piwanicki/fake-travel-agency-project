import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = props => {
  return (
    <div className={classes.Backdrop}>
      {props.children}
    </div>
  )
}

export default Backdrop;