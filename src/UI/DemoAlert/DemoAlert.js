import React from "react";
import classes from "./DemoAlert.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const DemoAlert = (props) => {
  return (
    <Backdrop>
      <div className={classes.DemoAlert}>
        <h3>Welcome</h3>
        <p>
          There are two modules already implemented:
          </p>
          <ul>
            <li>Cars -&gt; where you can find list of available cars to rent</li>
            <li>
              Recommended offers -&gt; you can click on recommended offer to see
              offer details
            </li>
          </ul>
          <p>Application will be updated with new features soon. Enjoy!</p>

        <span onClick={props.onClick}>Close</span>
      </div>
    </Backdrop>
  );
};

export default DemoAlert;
