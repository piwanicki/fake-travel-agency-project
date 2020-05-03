import React from "react";
import classes from "./Tab.module.scss";

const Tab = (props) => {
  return (
    <div className={classes.Tab} id={props.id}>
      {props.tabTitle}
    </div>
  );
};

export default Tab;
