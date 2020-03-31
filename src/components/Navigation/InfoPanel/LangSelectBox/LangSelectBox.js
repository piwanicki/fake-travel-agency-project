import React from "react";
import classes from "./LangSelectBox.module.scss";
import engIcon from "./langSelectorsIcon/england.png";
import polIcon from "./langSelectorsIcon/poland.png";

const LangSelectBox = props => {
  return (
    <div className={classes.LangSelectBox}>
      <ul onClick={props.langSelectHandler}>
        <li>
          <img src={engIcon} alt="language english" id="english" />
        </li>
        <li>
          <img src={polIcon} alt="language polish" id="polish" />
        </li>
      </ul>
    </div>
  );
};

export default LangSelectBox;
