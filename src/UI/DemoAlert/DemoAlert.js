import React from "react";
import classes from "./DemoAlert.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const DemoAlert = (props) => {
  return (
    <Backdrop>
      <div className={classes.DemoAlert}>
        <h3>Welcome</h3>
        <p>
          There are three modules already implemented:
          </p>
          <ul>
            <li>Cars -&gt; where you can find list of available cars to rent</li>
            <li>
              Recommended offers -&gt; you can click on recommended offer to see
              offer details
            </li>
            <li>
              Last Minute Module -&gt; simple list with last minute offers / offers details. Filters and sorting are still in development and will be soon updated
            </li>

            <li>
              User Authentication Module -&gt; (Only via https) Possibility of register and login for new users. Firebase Authentication is connected here as backend. You can also modify your user account data.
            </li>
            <li>
              <strong>Module in development -&gt;</strong> Migrating to TS , then Media queries / RWD
            </li>
          </ul>
          <p>Application will be updated with new features soon. Enjoy!</p>

        <span onClick={props.onClick}>Close</span>
      </div>
    </Backdrop>
  );
};

export default DemoAlert;
