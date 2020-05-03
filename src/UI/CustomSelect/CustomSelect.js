import React from 'react';
import classes from './CustomSelect.module.scss';

const CustomSelect = props => {
  return (
    <div>
    <p>{props.description}</p>
    <label className={classes.customSelect} htmlFor="styledSelect1">
      <select id="styledSelect1">
        {props.children}
      </select>
    </label>
  </div>
  )
}

export default CustomSelect;