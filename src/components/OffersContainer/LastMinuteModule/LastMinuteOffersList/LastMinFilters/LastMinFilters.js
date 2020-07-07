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

  const [whereOption, setWhereOption] = useState();
  const [typeOption, setTypeOption] = useState();
  const [transportOption, setTransportOption] = useState();
  const [startDtOption, setStartDtOption] = useState();
  const [endDtOption, setEndtDtOption] = useState();

  const filterByWhere = (val) => {
    setWhereOption(val);
    props.filterByWhere(val);
  };
  const filterByType = (val) => {
    setTypeOption(val);
    props.filterByType(val);
  };

  const filterByTransport = (val) => {
    setTransportOption(val);
    props.filterByTransport(val);
  };

  const filterByStartDate = (val) => {
    setStartDtOption(val);
    props.filterByStartDate(val);
  };

  const filterByEndDate = (val) => {
    setEndtDtOption(val);
    props.filterByEndDate(val);
  };

  const setAdultsHandler = (val) => {
    setAdults(val);
    props.filterByGuests(true,val)
  }

  const setKidsHandler = (val) => {
    setKids(val);
    props.filterByGuests(false,val)
  }

  const clearFilters = () => {
    setWhereOption(null);
    setTypeOption(null);
    setTransportOption(null);
    setStartDtOption(null);
    setEndtDtOption(null);
    props.clearFilters();
  };

  const ShowGuestBoxHandler = () => {
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

  const transportOptions = props.transport.map((transport) => {
    return {name: transport, value: transport};
  });

  const typeOptions = props.types.map((type) => {
    return {name: type, value: type};
  });

  const whereOptions = props.countries.map((country) => {
    return {name: country, value: country};
  });

  const guestBoxIcon = showGuestBox ? faAngleUp : faAngleDown;

  return (
    <div className={classes.LastMinFilters}>
      <span style={{width: "200px"}}>
        <SelectSearch
          options={whereOptions}
          placeholder={"Where..."}
          search={true}
          onChange={filterByWhere}
          value={whereOption}
        />
      </span>

      <span>
        <SelectSearch
          options={typeOptions}
          placeholder={"Type..."}
          search={true}
          onChange={filterByType}
          value={typeOption}
        />
      </span>

      <span>
        <SelectSearch
          options={transportOptions}
          placeholder={"Transport..."}
          search={true}
          onChange={filterByTransport}
          value={transportOption}
        />
      </span>

      <span>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <DatePicker
          className={classes.DateFilters}
          placeholderText="Start Date"
          onChange={filterByStartDate}
          value={startDtOption}
          selected={startDtOption}
        />
      </span>
      <span>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <DatePicker
          className={classes.DateFilters}
          placeholderText="End Date"
          onChange={filterByEndDate}
          value={endDtOption}
          selected={endDtOption}
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
          customAddAdultHandler={() => setAdultsHandler(adults + 1)}
          customRmAdultHandler={() => {
            if (adults > 0) setAdultsHandler(adults - 1);
          }}
          customAddKidHandler={() => setKidsHandler(kids + 1)}
          customRmKidHandler={() => {
            if (kids > 0) setKidsHandler(kids - 1);
          }}
          kids={kids}
          adults={adults}
        />
      ) : null}

      <span onClick={clearFilters} className={classes.ClearFiltersBtn}>
        <FontAwesomeIcon icon={faFilter} />
        Clear Filters
      </span>
    </div>
  );
};

export default LastMinFilters;
