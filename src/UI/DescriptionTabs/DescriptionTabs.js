import React, { useState } from "react";
import classes from "./DescriptionTabs.module.scss";
import { useEffect } from "react";

const DescriptionTabs = (props) => {
  const [activeTab, selectTab] = useState(props.children[0].props.id);

  const selectTabHandler = (id) => {
    if (id !== "") {
      document.getElementById(activeTab).classList.remove(classes.SelectedTab);
      document.getElementById(id).classList.add(classes.SelectedTab);
      selectTab(id);
      props.updateContent(id);
    }
  };

  useEffect(() => {
    document.getElementById(activeTab).classList.add(classes.SelectedTab);
  });

  return (
    <div
      className={classes.DescriptionTabs}
      onClick={(e) => selectTabHandler(e.target.id)}
      style={{ width: props.width }}
    >
      {props.children}
    </div>
  );
};

export default DescriptionTabs;
