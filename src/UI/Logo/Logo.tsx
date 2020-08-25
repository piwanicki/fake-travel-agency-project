import React from 'react';
import logo from './logo.png'
import classes from './Logo.module.css';
import {Link } from 'react-router-dom'

const Logo = props => {
  return (
    <Link to='/' >
      <img src={logo} alt='company logo' className={classes.Logo}/>
    </Link>
  )
}

export default Logo;