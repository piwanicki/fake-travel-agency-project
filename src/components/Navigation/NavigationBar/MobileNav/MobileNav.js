import React, {useState} from "react";
import classes from "MobileNav.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {NavigationItemsList} from "../NavigationItemsList";

const MobileNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <>
      <div className={classes.MobileMenu} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {isOpen ? <div className={classes.SideDrawer}>
        <NavigationItemsList />
      </div> : null }
    </>
  );
};

export default MobileNav;
