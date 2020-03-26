import React from 'react';
import classes from './LangSelectBox.module.scss';

const LangSelectBox = props => {
  return (
    <div className={classes.LangSelectBox}>
      <ul onClick={props.langSelectHandler}> 
        <li>
        <img src={`images/langSelector/england.png`} alt="language english" id='english' />
        </li>
        <li>
        <img src={`images/langSelector/poland.png`} alt="language english" id='polish' />

        </li>
      </ul>

    </div>
  )
}

export default LangSelectBox;