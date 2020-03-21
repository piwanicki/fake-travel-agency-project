import React from "react";
import classes from "./Underline.module.css";

const Underline = props => {
  return (
  <>
    <span className={classes.Underline}>
      <div className={classes.UnderlineTop}></div>
      <div className={classes.UnderlineBottom}></div>
    </span>
      
   </>
  );
};

export default Underline;
