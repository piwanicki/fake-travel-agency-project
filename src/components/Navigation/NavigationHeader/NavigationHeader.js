import React from 'react';
import classes from './NavigationHeader.module.css';
import InfoPanel from '../InfoPanel/InfoPanel';
import NavigationBar from '../NavigationBar/NavigationBar';
import Logo from '../../../UI/Logo/Logo';
import MobileNav from '../NavigationBar/MobileNav/MobileNav';

 const NavigationHeader = props => {

  return (
    <div className={classes.NavigationHeader}>
      <Logo />
      <InfoPanel />
      <NavigationBar />
      <MobileNav />
    </div>
  )
  
}

export default NavigationHeader;