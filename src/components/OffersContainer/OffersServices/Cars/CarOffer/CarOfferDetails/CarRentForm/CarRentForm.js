import React, {useState} from "react";
import classes from "./CarRentForm.module.scss";
import CustomSelect from "../../../../../../../UI/CustomSelect/CustomSelect";
import RentAgreement from "./RentAgreement/RentAgreement";

const CarRentForm = (props) => {
  const [showRentAgreement, showHandler] = useState(false);
  const [acceptAgreement, acceptHandler] = useState(false);

  const openRentAgreementHandler = () => {
    showHandler(!showRentAgreement);
  };

  const acceptRentAgreementHandler = () => {
    acceptHandler(!acceptAgreement);
  };

  const rentHandler = (event) => {
    event.preventDefault();
    console.log(`rentHandler`);
  };

  return (
    <form onSubmit={rentHandler}>
      <div className={classes.CarRentForm}>
        <p style={{marginLeft: "1em"}}>
          Please fill the rent form and accept rules to complete the process...
        </p>

        <div className={classes.PersonalData}>
          <p>Personal data </p>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Surname" required />
        </div>

        <div className={classes.TermData}>
          <p>Term </p>
          <span>
            From : <br />
            <input type="date" required />
          </span>
          <span>
            To : <br />
            <input type="date" required />
          </span>
        </div>

        <div className={classes.TermData}>
          <p>Hours </p>
          <span>
            Start time : <br />
            <input type="time" placeholder="Start" required />
          </span>
          <span>
            End time : <br />
            <input type="time" placeholder="End" required />
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
            <input type="number" min="0" style={{width: "70px"}} required />
          </div>
        </div>

        <div className={classes.AcceptBtn}>
          <span>
            <input
              type="checkbox"
              onChange={acceptRentAgreementHandler}
              required
              checked={acceptAgreement}
            />
            * Check here to indicate that you have read and agree to the terms
            of the &nbsp;
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={openRentAgreementHandler}
            >
              Car Renting Agreement
            </span>
            .
          </span>
          <button type="submit">Rent</button>
        </div>

        {showRentAgreement ? (
          <RentAgreement
            showRentAgreement={openRentAgreementHandler}
            acceptRentAgreement={acceptRentAgreementHandler}
          />
        ) : null}
      </div>
    </form>
  );
};

export default CarRentForm;
