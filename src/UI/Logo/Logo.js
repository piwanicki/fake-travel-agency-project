import React from 'react';
import logo from './logo.png'
import classes from './Logo.module.css';

const Logo = props => {
  return (
    <img src={logo} alt='company logo' className={classes.Logo}/>
  )
}

export default Logo;