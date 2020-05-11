import React from "react";
import classes from "./CarRentForm.module.scss";
import CustomSelect from "../../../../../../../UI/CustomSelect/CustomSelect";

const CarRentForm = (props) => {
  return (
    <div className={classes.CarRentForm}>
      <p>
        Please fill the rent form and accept rules to complete the process...
      </p>

      <div className={classes.PersonalData}>
        <p>Personal data </p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
      </div>

      <div className={classes.TermData}>
        <p>Term </p>
        <span>
          From : <br />
          <input type="date" />
        </span>
        <span>
          To : <br />
          <input type="date" />
        </span>
      </div>

      <div className={classes.TermData}>
        <p>Hours </p>
        <span>
          Start time : <br />
          <input type="time" placeholder="Start" />
        </span>
        <span>
          End time : <br />
          <input type="time" placeholder="End" />
        </span>
      </div>

      <div className={classes.RentLocation}>
        <CustomSelect description="Location" descDetails="Pick your city :">
          <option>Somewhere1</option>
          <option>Somewhere2</option>
          <option>Somewhere3</option>
          <option>Somewhere4</option>
        </CustomSelect>

        <div style={{textAlign: "left", width: "210px", marginTop: "1em"}}>
          <div
            style={{
              display: "inline-block",
              width: "130px",
              textAlign: "center",
              transform: "translateY(25%)",
            }}
          >
            Period of having a driving license
          </div>
          <input type="number" min="0" style={{width: "70px"}} />
        </div>
      </div>

      <div className={classes.AcceptBtn}>
        <span>
          <input type="checkbox" />
          Check here to indicate that you have read and agree to the terms of
          the &nbsp;
          <a href="#CarAgreement">Car Renting Agreement</a>.
        </span>
        <button type="submit">Rent</button>
      </div>
    </div>
  );
};

export default CarRentForm;
