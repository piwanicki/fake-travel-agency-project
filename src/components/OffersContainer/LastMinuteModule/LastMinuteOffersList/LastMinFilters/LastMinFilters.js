import React, {useState} from "react";
import classes from "./LastMinFilters.module.scss";
import SelectSearch from "react-select-search";
import CustomGuestBox from "../../../../SearchPanel/GuestBox/CustomGuestBox";
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
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);

  const ShowGuestBoxHandler = (e) => {
    setShowGuestBox(!showGuestBox);
  };

  const customGuestBoxStyles = {
    position: "absolute",
    right: "8%",
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
      name: "Fly",
    },
    {
      value: "bus",
      name: "Bus",
    },
    {
      value: "onYourOwn",
      name: "On Your Own",
    },
  ];

  const typeOptions = [
    {
      value: "type1",
      name: "Type 1",
    },
    {
      value: "type2",
      name: "Type 2",
    },
    {
      value: "type3",
      name: "Type 3",
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
          onChange={props.filterByWhere}
        />
      </span>

      <span>
        <SelectSearch
          options={typeOptions}
          placeholder={"Type..."}
          search={true}
          onChange={props.filterByType}
        />
      </span>

      <span>
        <SelectSearch
          options={transportOptions}
          placeholder={"Transport..."}
          search={true}
          onChange={props.filterByTransport}
        />
      </span>

      <span>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <DatePicker
          className={classes.DateFilters}
          placeholderText="Start Date"
          onChange={props.filterByStartDate}
        />
      </span>
      <span>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <DatePicker
          className={classes.DateFilters}
          placeholderText="End Date"
          onChange={props.filterByEndDate}
        />
      </span>

      <div
        onClick={(e) => ShowGuestBoxHandler(e)}
        className={classes.GuestBoxHandler}
      >
        Guests 0 - 2{" "}
        <FontAwesomeIcon
          icon={guestBoxIcon}
          className={classes.GuestBoxHandlerAngle}
        />
      </div>
      {showGuestBox ? (
        <CustomGuestBox
          customStyle={customGuestBoxStyles}
          customAddAdultHandler={() => setAdults(adults + 1)}
          customRmAdultHandler={() => {
            if (adults > 0) setAdults(adults - 1);
          }}
          customAddKidHandler={() => setKids(kids + 1)}
          customRmKidHandler={() => {
            if (kids > 0) setKids(kids - 1);
          }}
          kids={kids}
          adults={adults}
        />
      ) : null}

      <span onClick={props.clearFilters} className={classes.ClearFiltersBtn}>
        <FontAwesomeIcon icon={faFilter} />
        Clear Filters
      </span>
    </div>
  );
};

export default LastMinFilters;
