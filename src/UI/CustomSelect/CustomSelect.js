import React from 'react';
import classes from './CustomSelect.module.scss';

const CustomSelect = props => {
  return (
    <div>
    <p>{props.description}</p>
    <span>{props.descDetails}</span>
    <label className={classes.customSelect} htmlFor="styledSelect1">
      <select id="styledSelect1">
        {props.children}
      </select>
    </label>
  </div>
  )
}

export default CustomSelect;