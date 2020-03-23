import React from "react";
import classes from "./Underline.module.css";

const Underline = props => {
  return (
  <>
    <div className={classes.Underline}>
      <div className={classes.UnderlineTop}></div>
      <div className={classes.UnderlineBottom}></div>
    </div>
   </>
  );
};

export default Underline;
