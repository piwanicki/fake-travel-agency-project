import React, {useState} from "react";
import classes from "./LastMinFilters.module.scss";
import SelectSearch from "react-select-search";
import GuestBox from "../../../../SearchPanel/GuestBox/GuestBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faAngleDown,
  faAngleUp,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const LastMinFilters = (props) => {
  const [showGuestBox, setShowGuestBox] = useState(false);

  const ShowGuestBoxHandler = (e) => {
      setShowGuestBox(!showGuestBox);
  };

  const guestBoxCustomStyles = {
    position: "absolute",
    right: "10%",
    top: "75%",
    backgroundColor: "white",
    padding: ".5em",
    color: "black",
    border: "1px solid grey",
    borderRadius: "10px",
  };

  const transportOptions = [
    {
      value: "fly",
      name: "fly",
    },
    {
      value: "bus",
      name: "fly",
    },
    {
      value: "onYourOwn",
      name: "fly",
    },
  ];

  const whereOptions = props.countries.map((country) => {
    return {name: country, value: country.toLowerCase()};
  });

  const guestBoxIcon = showGuestBox ? faAngleUp : faAngleDown;

  return (
    <div className={classes.LastMinFilters}>
      <span style={{width: "200px"}}>
        <SelectSearch
          options={whereOptions}
          placeholder={"Where..."}
          search={true}
        />
      </span>

      <span>
        <SelectSearch
          options={transportOptions}
          placeholder={"Type..."}
          search={true}
        />
      </span>

      <span>
        <SelectSearch
          options={transportOptions}
          placeholder={"Transport..."}
          search={true}
        
        />
      </span>

      <FontAwesomeIcon icon={faCalendarAlt} />
      <DatePicker className={classes.DateFilters} placeholderText="Start Date" />
      <FontAwesomeIcon icon={faCalendarAlt} />
      <DatePicker className={classes.DateFilters} placeholderText="End Date" />

      <div
        onClick={(e) => ShowGuestBoxHandler(e)}
        className={classes.GuestBoxHandler}
      >
        Guests 0 - 2{" "}
        <span>
          <FontAwesomeIcon icon={guestBoxIcon} />
        </span>
       
      </div>
      {showGuestBox ? <GuestBox customStyle={guestBoxCustomStyles} /> : null}

      <span onClick={props.clearFilters} className={classes.ClearFiltersBtn}>
        <FontAwesomeIcon icon={faFilter} />
        Clear Filters
      </span>
    </div>
  );
};

export default LastMinFilters;
