import React from "react";
import classes from "./CheckingTermModal.module.scss";
import LoadingSpinner from "../../../../../UI/LoadingSpinner/LoadingSpinner";
import Backdrop from "../../../../../UI/Backdrop/Backdrop";

const CheckingTermModal = (props) => {
  return (
    <Backdrop>
      <div className={classes.CheckingTermModal}>
        <LoadingSpinner />

        {props.status ? (
          <>
            <h3>Term is free!</h3>
            <p>Updating site ...</p>
          </>
        ) : (
          <>
            <h3>Checking term</h3>
            <p>Please wait ...</p>
          </>
        )}
      </div>
    </Backdrop>
  );
};

export default CheckingTermModal;
