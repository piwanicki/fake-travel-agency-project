import React, {useState} from "react";
import classes from "./CarRentForm.module.scss";
import RentAgreement from "./RentAgreement/RentAgreement";
import DatePicker from "react-datepicker";
import SelectSearch from "react-select-search";
import Offers from "../../../../../Offers";

const CarRentForm = (props) => {
  const [showRentAgreement, showHandler] = useState(false);
  const [acceptAgreement, acceptHandler] = useState(false);
  const today = new Date();
  const [startTime, setStartTime] = useState( new Date().setHours(today.getHours() + 1));
  const [endTime, setEndTime] = useState(
    new Date().setHours(today.getHours() + 2)
  );

  const [startDay, setStartDay] = useState(new Date());
  const [endDay, setEndDay] = useState(
    new Date().setDate(startDay.getDate() + 1)
  );

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

  const setStartTimeHandler = (time) => {
    setStartTime(time);
  };

  const setEndTimeHandler = (time) => {
    setEndTime(time);
  };

  const setStartDayHandler = (day) => {
    setStartDay(day);
  };

  const setEndDayHandler = (day) => {
    setEndDay(day);
  };

  const locOptions = Object.keys(Offers).map((country) => {
    return {name: country, value: country.toLowerCase()};
  });
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
            <DatePicker
              selected={startDay}
              onChange={(day) => setStartDayHandler(day)}
              placeholderText="From..."
              required
            />
          </span>
          <span>
            <DatePicker
              selected={endDay}
              onChange={(day) => setEndDayHandler(day)}
              placeholderText="To..."
              required
            />
          </span>
        </div>

        <div className={classes.TermData}>
          <p>Hours </p>
          <span>
            <DatePicker
              selected={startTime}
              onChange={(time) => setStartTimeHandler(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:00 aa"
              placeholderText="Start..."
            />
          </span>
          <span>
            <DatePicker
              selected={endTime}
              onChange={(time) => setEndTimeHandler(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:00 aa"
              placeholderText="End..."
            />
          </span>
        </div>

        <div className={classes.RentLocation}>
          <p>Location</p>
          <span>
            <SelectSearch
              options={locOptions}
              placeholder={"Location"}
              search={true}
            ></SelectSearch>
          </span>

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
